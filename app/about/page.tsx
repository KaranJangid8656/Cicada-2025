import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, Instagram } from "lucide-react"
import { OrganizerContact } from "@/components/OrganizerContact"

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

        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-6 text-center">Participating Clubs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 place-items-center px-4">
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760269199/CyberSec-AIT_jtlgdt.png"
              alt="CyberSec Club"
              className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto rounded-full object-cover"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760960677/iot_forge-modified_v2gvml.png"
              alt="IoT Forge Club"
              className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto rounded-full object-cover border-2 border-white"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760378401/ai_club-removebg-preview_szuluv.png"
              alt="AI Club"
              className="w-30 sm:w-40 md:w-44 lg:w-48 h-auto rounded-full object-cover"
            />
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760959250/E-Cell_Atria_Logo_Option_4_1_h0lvih.jpg"
              alt="E-Cell Atria"
              className="w-24 sm:w-32 md:w-36 lg:w-40 h-auto rounded-full object-cover"
            />
          </div>
        </section>

        <Separator className="my-8 opacity-60" />

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Organizers</h3>
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-8 md:ml-20 lg:ml-32">
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761909347/IMG_20251031_164104_cjnugo.jpg"
              alt="Organizer portrait"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover ring-2 ring-white shadow-md md:mt-4 lg:mt-6"
            />
            <div className="text-center md:text-left">
              <p className="text-base md:text-lg font-semibold">Dr. Deepak N R</p>
              <p className="text-sm text-muted-foreground">Head of Department (ISE)</p>
              <p className="text-sm text-muted-foreground">Atria Institute of Technology</p>
              <OrganizerContact />
            </div>
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1761926582/College_Logo_gjwudh.png"
              alt="Atria Institute of Technology Logo"
              className="w-48 sm:w-48 md:w-60 lg:w-72 h-auto object-contain mt-6 sm:mt-8 md:ml-auto md:mr-24 lg:mr-40 md:mt-4 lg:mt-6"
            />
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}