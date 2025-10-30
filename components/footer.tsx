"use client";

import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import { ContactOrganizersDialog } from "./ContactOrganizersDialog"
import React, { useState } from "react"

export function Footer() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  return (
    <footer className="mt-16 border-t border-border">
      <ContactOrganizersDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png"
              alt="CICADA logo"
              className="h-16 w-auto"
            />
            <span className="font-semibold tracking-wide">CICADA 2025</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            CICADA is AIT’s annual technology festival featuring events hosted by clubs across campus—workshops,
            competitions, talks, and showcases.
          </p>
        </div>

        <nav className="text-sm">
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-primary">
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <a className="hover:text-primary" href="#featured">
                Featured
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-medium mb-3">Contact</h3>
          <div className="flex gap-4 text-muted-foreground mb-2">
            <a
              href="https://www.instagram.com/cicada_atria?igsh=dmp0Ym1hM3dneXc3"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:cicada@ait.edu"
              className="hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setContactDialogOpen(true)}
              className="hover:text-primary transition-colors p-0 bg-transparent border-none cursor-pointer"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </button>
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a
                href="https://maps.google.com/maps?q=Atria+Institute+of+Technology+Hebbal+Bengaluru"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Atria Institute of Technology, Bengaluru
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>©  CICADA 2025 </p>
          <a href="https://script-verse-mu.vercel.app/" className="hover:text-primary" target="_blank" rel="noreferrer noopener">
            ScriptVerse
          </a>
        </div>
      </div>
    </footer>
  )
}
