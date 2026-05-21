'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { navItems } from '@/lib/nav'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null)
  const desktopNavRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!desktopOpen) return
    const onDocClick = (e: MouseEvent) => {
      if (!desktopNavRef.current?.contains(e.target as Node)) setDesktopOpen(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopOpen(null)
    }
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [desktopOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 print:hidden">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/ebeb61_602706572e3e4b1f9343ca4d617325fb_mv2.png"
            alt="STARK Foundation"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-base sm:text-lg font-semibold tracking-tight text-primary">
            STARK Foundation
          </span>
        </Link>

        {/* desktop nav */}
        <nav ref={desktopNavRef} className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(item.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button
                  aria-expanded={desktopOpen === item.label}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopOpen((s) => (s === item.label ? null : item.label))
                  }
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      desktopOpen === item.label && 'rotate-180'
                    )}
                  />
                </button>
                {desktopOpen === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-lg border border-border bg-popover p-2 shadow-lg">
                      {item.href && item.href !== '#' && (
                        <Link
                          href={item.href}
                          onClick={() => setDesktopOpen(null)}
                          className="block rounded-md px-3 py-2 hover:bg-muted border-b border-border mb-1"
                        >
                          <div className="text-sm font-medium">Overview</div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            All ways to {item.label.toLowerCase()}
                          </div>
                        </Link>
                      )}
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDesktopOpen(null)}
                          className="block rounded-md px-3 py-2 hover:bg-muted"
                        >
                          <div className="text-sm font-medium">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/donate-now"
            className="ml-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:bg-accent/90"
          >
            Donate
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden rounded-md p-2 hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenSub((s) => (s === item.label ? null : item.label))
                    }
                    className="w-full flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        openSub === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                  {openSub === item.label && (
                    <div className="ml-3 border-l border-border pl-3 flex flex-col gap-1 py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/donate-now"
              className="mt-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground text-center"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
