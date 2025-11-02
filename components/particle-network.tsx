"use client"

import { useEffect, useRef, useState } from "react"

type Node = { x: number; y: number; vx: number; vy: number }

export function ParticleNetwork({
  pausedExternally = false,
  showControls = true,
  className,
}: {
  pausedExternally?: boolean
  showControls?: boolean
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    setPaused(pausedExternally)
  }, [pausedExternally])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let dprCap = typeof window !== "undefined" && window.innerWidth < 768 ? 1.25 : 1.5
    let dpr = Math.min(window.devicePixelRatio || 1, dprCap)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let baseNodes: number, limitNodes: number
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      baseNodes = prefersReducedMotion ? 12 : 18
    } else {
      baseNodes = prefersReducedMotion ? 29 : 58
    }
    limitNodes = Math.round(baseNodes * 1.3)
    const nodes: Node[] = []

    function resize() {
      if (!canvas) return
      const { clientWidth, clientHeight } = canvas
      canvas.width = Math.floor(clientWidth * dpr)
      canvas.height = Math.floor(clientHeight * dpr)
    }

    function init() {
      if (!canvas) return
      nodes.length = 0
      const aspect = canvas.width / Math.max(canvas.height, 1)
      const cols = Math.max(1, Math.ceil(Math.sqrt(limitNodes * aspect)))
      const rows = Math.max(1, Math.ceil(limitNodes / cols))
      const cellW = canvas.width / cols
      const cellH = canvas.height / rows
      const vScale = typeof window !== "undefined" && window.innerWidth < 768 ? 0.3 : 0.4
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (nodes.length >= limitNodes) break
          const x = c * cellW + (0.2 + 0.6 * Math.random()) * cellW
          const y = r * cellH + (0.2 + 0.6 * Math.random()) * cellH
          nodes.push({
            x,
            y,
            vx: (Math.random() - 0.5) * vScale,
            vy: (Math.random() - 0.5) * vScale,
          })
        }
      }
    }

    let raf = 0
    function tick() {
      if (!canvas || !ctx) {
        raf = requestAnimationFrame(tick)
        return
      }
      if (paused) {
        raf = requestAnimationFrame(tick)
        return
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          const threshold = 160 * dpr
          if (dist < threshold) {
            const alpha = 1 - dist / threshold
            ctx.strokeStyle = `oklch(0.85 0.22 142 / ${alpha * 0.85})`
            ctx.lineWidth = 1.1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x <= 0 || n.x >= canvas.width) n.vx *= -1
        if (n.y <= 0 || n.y >= canvas.height) n.vy *= -1

        ctx.fillStyle = `oklch(0.86 0.22 142 / 0.35)`
        ctx.beginPath()
        ctx.arc(n.x, n.y, 4.2 * dpr, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = "oklch(0.92 0.23 142)"
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.4 * dpr, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(tick)
    }

    function onResize() {
      dprCap = typeof window !== "undefined" && window.innerWidth < 768 ? 1.25 : 1.5
      dpr = Math.min(window.devicePixelRatio || 1, dprCap)
      resize()
      init()
    }

    resize()
    init()
    raf = requestAnimationFrame(tick)
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [paused])

  return (
    <div className={className ?? "relative w-full h-[280px] md:h-[420px] lg:h-[520px]"} aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full" />
      {showControls ? (
        <div className="absolute top-3 right-3">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="text-xs px-2 py-1 rounded-md bg-accent text-accent-foreground hover:opacity-90"
            aria-pressed={paused}
          >
            {paused ? "Resume" : "Pause"}
          </button>
        </div>
      ) : null}
    </div>
  )
}
