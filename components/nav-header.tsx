"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { NavDropdown } from "@/components/nav-dropdown"
import { Button } from "@/components/ui/button"

export function NavHeader() {
  const aboutDropdownSections = [
    {
      title: "About",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Foundation", href: "/foundation" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Roblox Group", href: "https://www.roblox.com/communities/9018942/Harvesta", external: true },
        {
          label: "Store",
          href: "https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store",
          external: true,
        },
        { label: "Contact", href: "/contact" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Non-Discrimination Statement", href: "/non-discrimination" },
      ],
    },
  ]

  return (
    <header className="container py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          harvesta
        </Link>
        <nav className="hidden space-x-8 md:flex items-center">
          <Link
            href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
            className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
            <ExternalLink className="h-3 w-3" />
          </Link>
          <NavDropdown trigger="About" sections={aboutDropdownSections} />
          <Link href="/contact" className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
            Contact
          </Link>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full border-emerald-700 text-emerald-400 hover:bg-emerald-950 px-4"
            asChild
          >
            <Link href="/announcements">Announcements</Link>
          </Button>
        </nav>
        <MobileNav />
      </div>
    </header>
  )
}
