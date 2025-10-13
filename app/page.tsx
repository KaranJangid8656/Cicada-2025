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

      <section id="about" className="mx-auto max-w-7xl px-4 md:px-6 mt-16">
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
