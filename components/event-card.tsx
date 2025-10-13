import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Event } from "@/data/events"

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="bg-card border-border neon-ring h-76 flex flex-col">
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <img
            src={event.clubLogo || `/placeholder.svg?height=32&width=32&query=club%20logo`}
            alt={`${event.clubName} logo`}
            className={`${event.clubName.toLowerCase().includes('llm') ? 'h-8 w-20' : 'h-8 w-8 rounded-sm'}`}
          />
          <div className="px-3 py-1.5 bg-gradient-to-r from-accent/20 to-accent/10 text-accent-foreground rounded-full text-xs font-medium backdrop-blur-sm">
            {event.clubName}
          </div>
        </div>
        <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3">{event.summary}</p>
        <div className="space-y-1 text-xs text-muted-foreground">
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
