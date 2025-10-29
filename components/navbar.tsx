"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Mail, MapPin, Phone, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/Cicada Brochure-1_compress.pdf", label: "Brochure" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="w-full border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://res.cloudinary.com/dx9bvma03/image/upload/v1760198155/cicada_logo_no_bg_m0sjov.png"
            alt="CICADA logo"
            className="h-12 w-12"
          />
          <span className="font-semibold tracking-wide">  CICADA 2025</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn("text-sm hover:text-primary transition-colors", pathname === l.href && "text-primary")}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="/events">Join the Fest</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-8 grid gap-4">
                {links.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <Link
                      href={l.href}
                      className={cn("py-2 px-2 rounded-md hover:bg-accent/50", pathname === l.href && "text-primary")}
                    >
                      {l.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-2 bg-primary text-primary-foreground">
                    <Link href="/events">Join the Fest</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
