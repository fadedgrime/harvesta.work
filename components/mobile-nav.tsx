"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const quickLinks = [
  {
    label: "Harvesta Discipline",
    href: "https://portal.harvesta.work",
  },
  {
    label: "Arvo Stores Discipline",
    href: "https://arvodiscipline.harvesta.work",
  },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [showQuickLinks, setShowQuickLinks] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false)
    setShowQuickLinks(false)
  }, [pathname])

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        className="relative z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-xl"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-bold text-gray-900">Harvesta</span>
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-6">
                  <div className="space-y-6">
                    <Link
                      href="/about"
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald-600 min-h-[44px] flex items-center",
                        pathname === "/about" ? "text-emerald-600" : "text-gray-900",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/foundation"
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald-600 min-h-[44px] flex items-center",
                        pathname === "/foundation" ? "text-emerald-600" : "text-gray-900",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Foundation
                    </Link>
                    <Link
                      href="/departments"
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald-600 min-h-[44px] flex items-center",
                        pathname === "/departments" ? "text-emerald-600" : "text-gray-900",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Departments
                    </Link>
                    <Link
                      href="/announcements"
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald-600 min-h-[44px] flex items-center",
                        pathname === "/announcements" ? "text-emerald-600" : "text-gray-900",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Announcements
                    </Link>

                    {/* Quick Links Section */}
                    <div>
                      <button
                        onClick={() => setShowQuickLinks(!showQuickLinks)}
                        className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-emerald-600 min-h-[44px] transition-colors"
                      >
                        <span>Quick Links</span>
                        <motion.div animate={{ rotate: showQuickLinks ? 90 : 0 }} transition={{ duration: 0.2 }}>
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {showQuickLinks && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 mt-2 space-y-3"
                          >
                            {quickLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between text-sm text-gray-600 hover:text-emerald-600 py-2 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <span>{link.label}</span>
                                <ExternalLink className="h-3 w-3" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/contact"
                      className={cn(
                        "block text-lg font-medium transition-colors hover:text-emerald-600 min-h-[44px] flex items-center",
                        pathname === "/contact" ? "text-emerald-600" : "text-gray-900",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </nav>

                {/* CTA Buttons */}
                <div className="border-t px-6 py-6 space-y-4">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 min-h-[44px]" asChild>
                    <Link
                      href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Visit Store
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent min-h-[44px]" asChild>
                    <Link
                      href="https://www.roblox.com/communities/9018942/Harvesta"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Roblox Community
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
