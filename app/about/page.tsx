import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleNetwork } from "@/components/particle-network"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 md:px-6 pt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400">About CICADA</h1>
        <p className="mt-3 text-muted-foreground prose-narrow">
          CICADA is the annual technology festival of Atria Institute of Technology. It unites student clubs to host
          workshops, hackathons, competitions, and talks that champion learning by building.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 relative">
          <div className="space-y-6">
            <div className="rounded-xl p-5 bg-accent text-accent-foreground">
              <h2 className="text-xl font-semibold">Mission</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Empower students to explore, prototype, and ship ideas together—bridging disciplines and experience
                levels.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-accent text-accent-foreground">
              <h2 className="text-xl font-semibold">Vision</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Foster a collaborative tech ecosystem where innovation thrives, ideas transform into solutions, and students gain real-world experience.
              </p>
            </div>
            <div className="rounded-xl p-5 bg-accent text-accent-foreground">
              <h2 className="text-xl font-semibold">Community</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Build meaningful connections, network with mentors, and collaborate with peers passionate about technology and problem-solving.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center -mt-10 ml-24">
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png"
              alt="CICADA 2025 Logo"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain opacity-90"
            />
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
