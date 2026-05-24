import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface print:hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-semibold mb-3">Programs</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/vocational-training" className="hover:text-foreground">Vocational Training</Link></li>
            <li><Link href="/bachpan" className="hover:text-foreground">Bachpan</Link></li>
            <li><Link href="/higher-ed-partnerships" className="hover:text-foreground">Higher-Ed Partnerships</Link></li>
            <li><Link href="/community-camps" className="hover:text-foreground">Community Camps</Link></li>
            <li><Link href="/disaster-relief" className="hover:text-foreground">Disaster Relief</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">More</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about-us" className="hover:text-foreground">About</Link></li>
            <li><Link href="/digital-pahel" className="hover:text-foreground">Digital Pahel</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /><a href="tel:+916377730336" className="hover:text-foreground">+91-6377730336</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /><a href="mailto:hello@starkfoundation.in" className="hover:text-foreground">hello@starkfoundation.in</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" />Bikaner, Rajasthan, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            <span className="font-semibold text-foreground">S.T.A.R.K. Foundation</span>
            <span className="ml-2">© {new Date().getFullYear()} · Registered Section-8 Non-Profit · Bikaner</span>
          </div>
          <div className="flex gap-2">
            <a aria-label="Facebook" href="https://www.facebook.com/starkfndn" target="_blank" rel="noreferrer" className="rounded-md border border-border p-1.5 hover:bg-muted">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/starkfndn/" target="_blank" rel="noreferrer" className="rounded-md border border-border p-1.5 hover:bg-muted">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a aria-label="Twitter" href="https://twitter.com/starkfndn" target="_blank" rel="noreferrer" className="rounded-md border border-border p-1.5 hover:bg-muted">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/starkfndn" target="_blank" rel="noreferrer" className="rounded-md border border-border p-1.5 hover:bg-muted">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
