import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-bold">About CICADA</h1>
        <p className="mt-3 text-muted-foreground prose-narrow">
          CICADA is the annual technology festival of Atria Institute of Technology. It unites student clubs to host
          workshops, hackathons, competitions, and talks that champion learning by building.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl p-6 bg-accent text-accent-foreground neon-ring">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Empower students to explore, prototype, and ship ideas together—bridging disciplines and experience
              levels.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-accent text-accent-foreground neon-ring">
            <h2 className="text-xl font-semibold">Highlights</h2>
            <ul className="mt-2 text-sm text-muted-foreground space-y-1">
              <li>• 30+ events across AI, Robotics, Cybersecurity, Design, Dev</li>
              <li>• Mentorship, prize tracks, and showcases</li>
              <li>• Open to beginners and advanced builders</li>
            </ul>
          </div>
          <div className="rounded-xl p-6 bg-accent text-accent-foreground neon-ring">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2 text-sm text-muted-foreground">cicada@ait.edu • AIT Campus, Bengaluru</p>
          </div>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Participating Clubs</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Club, Robotics Club, Cybersecurity Club, Design Club, Developers Society, Aero & Robotics, and more.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">How to Participate</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore the Events page, open an event to view details, and use the Register button to access the Google
              Form. Teams can register together or add teammates later per event rules.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold">FAQ</h3>
          <ul className="mt-3 text-sm text-muted-foreground space-y-2">
            <li>
              <span className="text-foreground font-medium">Who can join?</span> Any AIT student; beginners welcome.
            </li>
            <li>
              <span className="text-foreground font-medium">Do I need a team?</span> Many events support solo entries;
              check team size in details.
            </li>
            <li>
              <span className="text-foreground font-medium">Where do I register?</span> Each event has a Register button
              that links to its Google Form.
            </li>
          </ul>
        </section>
      </section>
      <Footer />
    </main>
  )
}
