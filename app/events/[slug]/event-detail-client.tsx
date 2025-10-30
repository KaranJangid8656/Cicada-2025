'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Wifi, ExternalLink, Award, Target, Lightbulb, Trophy, Medal, Sparkles, Zap, Star, Phone, Mail } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"

export function EventDetailClient({ event }: { event: any }) {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <EventDetailLayout 
      event={event} 
      isContactOpen={isContactOpen} 
      setIsContactOpen={setIsContactOpen} 
    />
  )
}

function EventDetailLayout({ 
  event, 
  isContactOpen, 
  setIsContactOpen 
}: { 
  event: any; 
  isContactOpen: boolean; 
  setIsContactOpen: (open: boolean) => void 
}) {
  // ... rest of your existing EventDetailLayout component code
  // Make sure to include all the JSX and logic from your original EventDetailLayout
  return (
    <>
      <Navbar />
      {/* Your existing layout JSX here */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        {/* Rest of your layout */}
      </div>
      <Footer />
    </>
  )
}
