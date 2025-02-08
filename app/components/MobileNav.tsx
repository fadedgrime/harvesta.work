"use client"

import { useState } from "react"
import { Menu, X, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store", label: "Store", external: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/updates", label: "Updates" },
  { href: "/contact", label: "Contact" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLinkClick = (href: string, external: boolean) => {
    if (external) {
      window.open(href, "_blank")
    }
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-[#22c55e]/10"
        onClick={toggleMenu}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-gray-800 py-4"
          >
            <nav className="container mx-auto px-4">
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <button
                        onClick={() => handleLinkClick(link.href, true)}
                        className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm inline-flex items-center gap-1 w-full text-left py-2"
                      >
                        {link.label}
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href, false)}
                        className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm block py-2"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 