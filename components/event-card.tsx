import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/data/events"

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className={`bg-card border-border neon-ring ${event.slug === 'markethon' ? 'h-auto' : 'h-76'} flex flex-col`}>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          {(event.slug === "hackathon" || event.slug === "ipl-auction" || event.slug === "project-expo" || event.slug === "esports") && (
            <>
              <div className="flex items-center gap-2">
                <img
                  src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png"
                  alt="CICADA logo"
                  className="h-9 w-9"
                />
                <div>
                  {event.slug === "hackathon" && (
                    <span className="text-xs font-medium text-green-500 border border-green-500/30 rounded-full px-3 py-1 bg-green-500/10">
                      Flagship Event
                    </span>
                  )}
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {event.slug === "ipl-auction" || event.slug === "project-expo" || event.slug === "esports" ? "Team Cicada" : ""}
                  </div>
                </div>
              </div>
            </>
          )}
          {event.slug !== "hackathon" && event.slug !== "ipl-auction" && event.slug !== "project-expo" && event.slug !== "esports" && (
            <>
              <img
                src={event.clubLogo || `/placeholder.svg?height=32&width=32&query=club%20logo`}
                alt={`${event.clubName} logo`}
                className={`${event.clubName.toLowerCase().includes('llm') ? 'h-10 w-24' : 'h-10 w-10'} ${event.slug === 'markethon' ? 'object-contain' : 'object-cover'} ${event.clubName.toLowerCase().includes('iot') || event.clubName.toLowerCase().includes('e-cell') ? 'rounded-full border-2 border-white' : 'rounded-sm'}`}
              />
              <div className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-accent/10 text-accent-foreground rounded-full text-xs font-medium backdrop-blur-sm">
                {event.clubName}
              </div>
            </>
          )}
        </div>
        <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3">{event.summary}</p>
        <div className={`space-y-1 text-xs text-muted-foreground ${event.slug === "ipl-auction" ? "-mt-2" : ""}`}>
          <div>
            {event.date} • {event.Duration}
          </div>
          <div>
            Venue: {event.venue}
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href={`/events/${event.slug}`}>View Details</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={event.registerUrl} target="_blank" rel="noreferrer">
              Register
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
