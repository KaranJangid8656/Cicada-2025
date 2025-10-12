
import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { events } from "@/data/events"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Wifi, DollarSign, ExternalLink } from "lucide-react"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug)
  if (!event) return notFound()

  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden grid grid-cols-1 md:grid-cols-5 gap-0">
          {/* Left: Image and Event Info */}
          <div className="md:col-span-2 flex flex-col">
            <div className="bg-card flex items-center justify-center p-0 md:p-6">
              <img
                src={event.coverImage || `/placeholder.svg?height=720&width=1280&query=${encodeURIComponent(event.title)}`}
                alt={`${event.title} cover`}
                className="w-full max-w-lg h-56 md:h-80 object-cover object-center rounded-t-2xl md:rounded-2xl"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <ul className="grid grid-cols-2 gap-2 text-xs mb-2">
                <li className="rounded bg-accent/50 px-3 py-2">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Date
                  </span>
                  <span className="text-foreground font-semibold">{event.date}</span>
                </li>
                <li className="rounded bg-accent/50 px-3 py-2">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    Duration
                  </span>
                  <span className="text-foreground font-semibold">{event.Duration}</span>
                </li>
                <li className={`rounded bg-accent/50 px-3 py-2 ${event.mode ? "" : "col-span-2"}`}>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-3 w-3" />
                    Team Size
                  </span>
                  <span className="text-foreground font-semibold">{event.teamSize}</span>
                </li>
                {event.mode && (
                  <li className="rounded bg-accent/50 px-3 py-2">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Wifi className="h-3 w-3" />
                      Mode
                    </span>
                    <span className="text-foreground font-semibold">{event.mode}</span>
                  </li>
                )}
                <li className="rounded bg-accent/50 px-3 py-2">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    Venue
                  </span>
                  <span className="flex items-center gap-1 text-foreground font-semibold">
                    <a
                      href="https://maps.app.goo.gl/1yVpn5oqd8wJkyA88"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {event.venue}
                    </a>
                    {event.venue === "Atria Institute of Technology" && (
                      <a
                        href="https://maps.app.goo.gl/1yVpn5oqd8wJkyA88"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </span>
                </li>
                <li className="rounded bg-accent/50 px-3 py-2">
                  <span className="block text-muted-foreground">
                    Registration Fee
                  </span>
                  <span className="text-foreground font-semibold">{event.registrationFee}</span>
                </li>
              </ul>
              <div className="flex gap-3 mb-2">
                <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
                  <a href={event.registerUrl} target="_blank" rel="noreferrer">
                    Register
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/events">Back to Events</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Right: Description with Club Info and Title */}
          <div className="md:col-span-3 p-6 flex flex-col items-start justify-start md:border-l border-border bg-background">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={event.clubLogo || `/placeholder.svg?height=32&width=32&query=club%20logo`}
                alt={`${event.clubName} logo`}
                className="h-8 w-8 rounded-sm"
              />
              <span className="text-base font-semibold text-foreground">{event.clubName}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-pretty">{event.title}</h1>
            <section className="text-base text-gray-300 text-justify w-full max-w-3xl">
              {(() => {
                // Enhance headings for 'Event Flow' and 'Learning Outcomes' in the description
                const desc = event.description || "";
                // Replace 'Event Flow:' and 'Learning Outcomes:' with styled headings
                // Move the ordered list under Event Flow up by 0.3cm (approx 5px)
                let html = desc
                  .replace(/\n/g, '<br />');
                return <span dangerouslySetInnerHTML={{ __html: html }} />;
              })()}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
