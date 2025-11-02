'use client'

import * as React from 'react'
import Image from 'next/image'

interface EventCarouselProps {
  images?: string[]
  speed?: number
}

const DEFAULT_IMAGES = [
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082488/IMG_0496_gtt0e0.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762083748/IMG_0495_mkkui2.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762083662/IMG_0432_ix6x17.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082508/IMG_0438_olz5lg.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082494/IMG_0442_gomaag.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082473/IMG_0570_i4fdqm.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082466/IMG_0574_evpjos.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082464/IMG_0586_lbzf1v.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082458/IMG_0587_rbf0xo.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/f_auto,q_auto,w_800/v1762082445/IMG_0585_fhv4lb.jpg',
]

export default function EventCarousel({
  images = DEFAULT_IMAGES,
  speed = 30,
}: EventCarouselProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const offsetRef = React.useRef(0)
  const animationRef = React.useRef<number | null>(null)
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragStart, setDragStart] = React.useState(0)
  const [dragOffset, setDragOffset] = React.useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [scrollSpeed, setScrollSpeed] = React.useState(speed)

  // ✅ Repeat only twice to reduce DOM load
  const repeatedImages = React.useMemo(() => [...images, ...images], [images])

  // ✅ Responsive speed (TypeScript-safe)
  React.useEffect(() => {
    const updateSpeed = (): void => {
      if (window.innerWidth < 640) setScrollSpeed(speed * 0.4) // mobile
      else if (window.innerWidth < 1024) setScrollSpeed(speed * 0.7) // tablet
      else setScrollSpeed(speed) // desktop
    }

    updateSpeed()
    window.addEventListener('resize', updateSpeed)

    return (): void => {
      window.removeEventListener('resize', updateSpeed)
    }
  }, [speed])

  // ✅ Infinite animation loop
  React.useEffect(() => {
    if (isDragging || isPaused) return

    let lastTime = Date.now()
    const singleSetWidth = (288 + 24) * images.length // width + gap

    const animate = (): void => {
      const now = Date.now()
      const delta = (now - lastTime) / 1000
      lastTime = now

      offsetRef.current -= scrollSpeed * delta
      if (Math.abs(offsetRef.current) >= singleSetWidth) {
        offsetRef.current += singleSetWidth
      }

      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return (): void => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isDragging, isPaused, scrollSpeed, images.length])

  // ✅ Drag handling
  const handleDragStart = (clientX: number): void => {
    setIsDragging(true)
    setDragStart(clientX)
    setDragOffset(offsetRef.current)
  }

  const handleDragMove = (clientX: number): void => {
    if (!isDragging) return
    const diff = clientX - dragStart
    offsetRef.current = dragOffset + diff
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
    }
  }

  const handleDragEnd = (): void => setIsDragging(false)

  // ✅ Hover pause/resume
  const handleMouseEnter = (): void => setIsPaused(true)
  const handleMouseLeave = (): void => setIsPaused(false)

  return (
    <div className="w-full py-12 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={(e) => {
            handleDragEnd()
            handleMouseLeave()
          }}
          onMouseEnter={handleMouseEnter}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={containerRef}
            className="flex gap-6 will-change-transform transition-transform ease-linear"
            style={{ transform: 'translate3d(0px, 0, 0)' }}
          >
            {repeatedImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image}
                  alt={`Event ${(index % images.length) + 1}`}
                  fill
                  priority={index < 2}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  className="object-cover pointer-events-none select-none rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
