import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { events } from "@/data/events"
import { EventCard } from "@/components/event-card"

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-bold">All Events</h1>
        <p className="mt-2 text-muted-foreground">Browse all CICADA 2025 activities and register.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
