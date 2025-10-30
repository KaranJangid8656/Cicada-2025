import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ParticleNetwork } from "./particle-network"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <ParticleNetwork className="absolute inset-0" showControls={false} />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 pt-12 md:pt-16 pb-12 md:pb-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-pretty text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              CICADA 2025 <span className="text-primary">Tech Fest</span>
            </h1>
            <p className="mt-2 text-base md:text-lg font-semibold text-white drop-shadow-sm">
              Atria Institute of Technology
            </p>
            <p className="mt-4 text-base md:text-lg text-muted-foreground prose-narrow">
              Celebrate innovation with workshops, hackathons, competitions, tech talks, and creative showcases across
              multiple clubs. Join us to build, learn, and connect.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:opacity-90">
                <Link href="/events">Explore Events</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="/Cicada Brochure-1_compress.pdf" target="_blank" rel="noopener noreferrer">Brochure</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center pl-4">
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png"
              alt="CICADA 2025 Logo"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain opacity-85"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
