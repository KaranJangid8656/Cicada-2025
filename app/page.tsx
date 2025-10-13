import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { events } from "@/data/events"
import { EventCard } from "@/components/event-card"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section id="featured" className="mx-auto max-w-7xl px-4 md:px-6 mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Featured Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Our Sponsors</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left gap-16 items-center">
            {/* First set of sponsors */}
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760349702/PhonePe-Logo_xmkakf.png"
              alt="PhonePe"
              className="flex-shrink-0 w-60 h-30 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348839/Decathlon_Group-Logo.wine_vjwxpi.png"
              alt="Decathlon"
              className="flex-shrink-0 w-80 h-40 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760347841/dominos-logo4-removebg-preview_vdiqlk.png"
              alt="Domino's"
              className="flex-shrink-0 w-80 h-40 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348420/intel-logo-new_cty5ay.png"
              alt="Intel"
              className="flex-shrink-0 w-32 h-16 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348280/images__5_-removebg-preview_fjabqd.png"
              alt="Red Bull"
              className="flex-shrink-0 w-60 h-30 object-contain"
            />
            {/* Duplicate set for seamless scrolling */}
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760349702/PhonePe-Logo_xmkakf.png"
              alt="PhonePe"
              className="flex-shrink-0 w-70 h-35 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348839/Decathlon_Group-Logo.wine_vjwxpi.png"
              alt="Decathlon"
              className="flex-shrink-0 w-80 h-40 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760347841/dominos-logo4-removebg-preview_vdiqlk.png"
              alt="Domino's"
              className="flex-shrink-0 w-80 h-40 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348420/intel-logo-new_cty5ay.png"
              alt="Intel"
              className="flex-shrink-0 w-32 h-16 object-contain"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760348280/images__5_-removebg-preview_fjabqd.png"
              alt="Red Bull"
              className="flex-shrink-0 w-60 h-30 object-contain"
            />
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 mt-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl p-6 bg-accent text-accent-foreground">
            <h3 className="text-xl md:text-2xl font-semibold text-green-400">About CICADA</h3>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              CICADA 2025 is AIT’s flagship tech fest—one week of hands‑on workshops, competitions, talks, and creative
              showcases led by student clubs. It’s where ideas turn into prototypes and teams into communities.
            </p>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Whether you’re building your first bot, shipping an AI app, or solving CTF challenges, CICADA is designed
              for makers at every level.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Hands‑on First</h4>
              <p className="mt-1 text-sm text-muted-foreground">Learn by building with mentors and peers.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Multi‑Club</h4>
              <p className="mt-1 text-sm text-muted-foreground">AI, Robotics, Cybersecurity, Design, Dev & more.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Showcase</h4>
              <p className="mt-1 text-sm text-muted-foreground">Demos, prize tracks, and campus‑wide recognition.</p>
            </div>
            <div className="rounded-xl p-5 bg-card border border-border">
              <h4 className="font-semibold">Open to All</h4>
              <p className="mt-1 text-sm text-muted-foreground">Solo or teams—beginners welcome.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
