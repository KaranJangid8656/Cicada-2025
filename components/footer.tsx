import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
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
          <ul className="space-y-2 text-muted-foreground">
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
          <ul className="space-y-2 text-muted-foreground">
            <li>Email: cicada@ait.edu</li>
            <li>Address: Atria Institute of Technology , Hebbal, Bengaluru</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>© 2025 CICADA Festival</p>
          <a href="https://vercel.com" className="hover:text-primary" target="_blank" rel="noreferrer noopener">
            Powered by Vercel
          </a>
        </div>
      </div>
    </footer>
  )
}
