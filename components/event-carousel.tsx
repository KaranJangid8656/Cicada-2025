'use client'

import * as React from 'react'

interface EventCarouselProps {
  images?: string[]
  speed?: number
}

const DEFAULT_IMAGES = [
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082488/IMG_0496_gtt0e0.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762083748/IMG_0495_mkkui2.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762083662/IMG_0432_ix6x17.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082508/IMG_0438_olz5lg.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082494/IMG_0442_gomaag.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082473/IMG_0570_i4fdqm.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082466/IMG_0574_evpjos.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082464/IMG_0586_lbzf1v.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082458/IMG_0587_rbf0xo.jpg',
  'https://res.cloudinary.com/dx9bvma03/image/upload/v1762082445/IMG_0585_fhv4lb.jpg',
]

export default function EventCarousel({
  images = DEFAULT_IMAGES,
  speed = 30,
}: EventCarouselProps) {
  const [offset, setOffset] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const [dragStart, setDragStart] = React.useState(0)
  const [dragOffset, setDragOffset] = React.useState(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const animationRef = React.useRef<number | null>(null)

  // Triple the images for seamless loop
  const repeatedImages = React.useMemo(() => {
    return [...images, ...images, ...images]
  }, [images])

  // Auto-scroll animation
  React.useEffect(() => {
    if (isDragging) return

    let lastTime = Date.now()
    
    const animate = () => {
      const now = Date.now()
      const delta = (now - lastTime) / 1000
      lastTime = now

      setOffset(prev => {
        const newOffset = prev - speed * delta
        const singleSetWidth = (272 + 24) * images.length // width + gap
        
        // Reset when we've scrolled past one complete set
        if (Math.abs(newOffset) >= singleSetWidth) {
          return newOffset + singleSetWidth
        }
        return newOffset
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isDragging, speed, images.length])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setDragStart(clientX)
    setDragOffset(offset)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - dragStart
    setOffset(dragOffset + diff)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  return (
    <div className="w-full py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            ref={containerRef}
            className="flex gap-6 transition-transform"
            style={{
              transform: `translate3d(${offset}px, 0, 0)`,
              transitionDuration: isDragging ? '0ms' : '0ms',
            }}
          >
            {repeatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Event ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}