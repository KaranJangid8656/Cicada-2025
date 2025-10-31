'use client'

import { useState } from "react"
import { Phone, Mail, Instagram } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export function OrganizerContact() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-3 flex items-center justify-center md:justify-start gap-4">
      <a href="tel:+919886467667" aria-label="Call" className="text-muted-foreground hover:text-foreground transition-colors">
        <Phone className="h-5 w-5" />
      </a>
      <a
        href="https://www.instagram.com/drdeepugowda?igsh=enE0bWk0c2xnOW1i"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <button
        type="button"
        aria-label="Email"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Mail className="h-5 w-5" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Contact</DialogTitle>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Choose an email to continue:</p>
              <div className="space-y-2">
                <a href="mailto:isehod@atria.edu" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Work</p>
                    <p className="text-sm text-muted-foreground">isehod@atria.edu</p>
                  </div>
                </a>
                <a href="mailto:Deepaknrgowda@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Personal</p>
                    <p className="text-sm text-muted-foreground">Deepaknrgowda@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}


