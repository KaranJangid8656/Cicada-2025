import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { events } from "@/data/events"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Wifi, ExternalLink, Award, Target, Lightbulb } from "lucide-react"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug)
  if (!event) return notFound()

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              {/* Club Info & Image Side by Side */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Event Image */}
                <div className={`flex-shrink-0 ${event.slug === 'hackathon' ? 'w-48' : 'md:w-80'}`}>
                  <div className={`relative ${event.slug === "markethon" ? 'h-auto' : event.slug === "esports" ? 'aspect-[3/2]' : event.slug === 'hackathon' ? 'h-auto' : 'aspect-[4/3]'} ${event.slug === 'hackathon' ? 'bg-transparent' : 'rounded-2xl overflow-hidden border border-border shadow-lg'} group`}>
                    <img
                      src={
                        event.coverImage ||
                        `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(event.title)}`
                      }
                      alt={event.title}
                      className={`w-full h-full ${event.slug === "markethon" || event.slug === 'hackathon' ? 'object-contain' : event.slug === "esports" || event.slug === "intruverse-ctf" || event.slug === "proto-race" || event.slug === "ipl-auction" || event.slug === "llm-odyssey" ? 'object-cover' : 'object-contain'}`}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {event.title}
                  </h1>

                  {/* Quick Info Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.Duration}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.teamSize}</span>
                    </div>
                    {event.mode && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                        <Wifi className="h-4 w-4 text-primary" />
                        <span className="font-medium">{event.mode}</span>
                      </div>
                    )}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Event */}
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <div className="text-base leading-relaxed text-muted-foreground">
                  {(() => {
                    const desc = event.description || ""
                    const html = desc.replace(/\n/g, "<br />")
                    return <div dangerouslySetInnerHTML={{ __html: html }} />
                  })()}
                </div>
              </div>
            </div>

            {/* What You'll Gain - Hidden for esports */}
            {event.slug !== 'esports' && (
              <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  What You'll Gain
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Hands-on Experience</h4>
                      <p className="text-sm text-muted-foreground">Practical learning through real challenges</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Skill Development</h4>
                      <p className="text-sm text-muted-foreground">Enhance your technical capabilities</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Networking</h4>
                      <p className="text-sm text-muted-foreground">Connect with like-minded peers</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Recognition</h4>
                      <p className="text-sm text-muted-foreground">Certificates and prizes for winners</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements - Hidden for esports */}
            {event.slug !== 'esports' && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Laptop with necessary software installed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Valid college ID for entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Team registration completed before deadline</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky space-y-4" style={{ top: "calc(6rem - 1cm)" }}>
              {/* Registration Card */}
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 border-b border-border">
                  <p className="text-sm text-muted-foreground mb-2">Registration Fee</p>
                  <p className="text-4xl font-bold mb-4">{event.registrationFee}</p>
                  <Button
                    asChild
                    className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
                    size="lg"
                  >
                    <a href={event.registerUrl} target="_blank" rel="noreferrer">
                      Register Now
                    </a>
                  </Button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Date & Time</p>
                    <p className="text-base font-semibold">{event.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Duration</p>
                    <p className="text-base font-semibold">{event.Duration}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Team Size</p>
                    <p className="text-base font-semibold">{event.teamSize}</p>
                  </div>
                  {event.mode && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Mode</p>
                      <p className="text-base font-semibold">{event.mode}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">Venue</p>
                    <a
                      href="https://maps.app.goo.gl/1yVpn5oqd8wJkyA88"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {event.venue}
                      {event.venue === "Atria Institute of Technology" && (
                        <ExternalLink className="h-3.5 w-3.5" />
                      )}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact - Sticky */}
              <div className="sticky top-32 bg-accent/30 rounded-2xl p-5 text-sm">
                <p className="font-semibold mb-2">Questions?</p>
                <p className="text-muted-foreground mb-3">
                  Contact the organizing team for any queries.
                </p>
                <Button variant="outline" className="w-full" size="sm">
                  Contact Organizers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
