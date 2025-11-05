"use client";

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProjectExpoStandings } from "@/components/project-expo-standings"

export default function ProjectExpoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProjectExpoStandings />
      <Footer />
    </main>
  )
}
