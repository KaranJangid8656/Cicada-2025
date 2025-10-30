import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { events } from "@/data/events"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Wifi, ExternalLink, Award, Target, Lightbulb, Trophy, Medal, Sparkles, Zap, Star } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

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
                <div className={`flex-shrink-0 ${event.slug === 'esports' ? 'w-full max-w-sm h-60' : 'md:w-80'}`}>
                  <div className={`relative ${event.slug === 'esports' ? 'h-58' : 'aspect-[4/3]'} rounded-2xl overflow-hidden border border-border shadow-lg group ${event.slug === 'esports' ? 'bg-black/5 p-0' : ''}`}>
                    <img
                      src={
                        event.coverImage ||
                        `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(event.title)}`
                      }
                      alt={event.title}
                      className={`w-full h-full ${
                        ['hackathon', 'intruverse-ctf', 'ipl-auction', 'proto-race', 'markethon', 'esports', 'agentic-ai'].includes(event.slug) 
                          ? 'object-cover' 
                          : 'object-contain'
                      }`}
                      style={{
                        ...(event.slug === 'intruverse-ctf' && { objectPosition: '20% 30%' }),
                        ...(event.slug === 'ipl-auction' && { objectPosition: 'center 20%' }),
                        ...(event.slug === 'proto-race' && { objectPosition: 'center 25%' }),
                        ...(event.slug === 'markethon' && { objectPosition: 'center 60%' }),
                        ...(event.slug === 'esports' && { 
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                          objectPosition: 'center 30%'
                        }),
                        ...(event.slug === 'agentic-ai' && { objectPosition: 'center 30%' })
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {event.title}
                  </h1>

                  {/* Quick Info Pills - Hidden for esports */}
                  {event.slug !== 'esports' && (
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
                  )}
                </div>
              </div>
            </div>

            {/* About Event */}
            {event.slug === 'project-expo' && (
              <div className="border-t border-border pt-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                  <p className="text-blue-800 dark:text-blue-100 font-medium">
                    📌 Eligibility: Open to 7th-semester students only
                  </p>
                </div>
              </div>
            )}
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

           {/* Prizes & Recognition - For specific events */}
           {(event.slug === 'intruverse-ctf' || event.slug === 'hackathon' || event.slug === 'ipl-auction' || event.slug === 'agentic-ai' || event.slug === 'proto-race' || event.slug === 'markethon' || event.slug === 'project-expo') && (
  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
    
    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
      <Award className="h-5 w-5 text-primary" />
      What's In It For You?
    </h3>
    
    <div className="relative z-10 space-y-4">
      {/* Prize Money Section - Dramatic Split */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* Champion */}
        <div className="group relative bg-black/60 rounded-xl p-5 border-2 border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">
                {event.slug === 'hackathon' ? '1st Prize' : event.slug === 'ipl-auction' ? 'Winners' : 'Winners'}
              </div>
              <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">
                {event.slug === 'hackathon' ? '₹15,000' : event.slug === 'ipl-auction' ? '₹3,000' : event.slug === 'project-expo' ? '₹8,000' : '₹2,000'}
              </div>
              <div className="text-xs text-gray-500">Cash Prize</div>
            </div>
            <Trophy className="h-10 w-10 text-white/90 group-hover:text-white transition-colors mt-1" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-300">E-Certificate</span>
          </div>
        </div>

        {/* Runner Up */}
        <div className="group relative bg-black/60 rounded-xl p-5 border-2 border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">{event.slug === 'hackathon' ? '2nd Prize' : 'Runner Up'}</div>
              <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform">
                {event.slug === 'hackathon' ? '₹10,000' : event.slug === 'project-expo' ? '₹4,000' : '₹1,000'}
              </div>
              <div className="text-xs text-gray-500">Cash Prize</div>
            </div>
            <Award className="h-10 w-10 text-white/90 group-hover:text-white transition-colors mt-1" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-2.5 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-xs font-medium text-gray-300">E-Certificate</span>
          </div>
        </div>
      </div>

      {/* Everyone Wins Section - Simplified */}
      <div className="bg-black/60 rounded-xl p-4 border-2 border-gray-700/50">
        <div className="flex items-center gap-3">
          <Award className="h-7 w-7 text-gray-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-white text-sm mb-0.5">All Participants</div>
            <div className="text-gray-400 text-sm">
              {event.slug === 'hackathon' 
                ? 'Exclusive Goodies + E-Certificates' 
                : 'E-Certificates'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
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
            <div className="sticky space-y-4 min-h-[calc(100vh-2rem)]" style={{ top: "2rem" }}>
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
                    <Link href={event.registerUrl || '#'} target="_blank" rel="noopener noreferrer">
                      Register Now
                    </Link>
                  </Button>
                </div>
                <div className="p-6 space-y-4">
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
                <a href="mailto:karansuthar9565@gmail.com" className="block w-full">
                  <Button variant="outline" className="w-full cursor-pointer" size="sm">
                    Contact Organizers
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
