"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"
import { ExternalLink } from "lucide-react"
import { useScrollDirection } from "../hooks/useScrollDirection"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const scrollDirection = useScrollDirection()

  const handleStoreClick = () => {
    window.open("https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store", "_blank")
  }

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: scrollDirection === "down" ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-white hover:text-[#22c55e] transition-colors">
              harvesta
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button
                onClick={handleStoreClick}
                className="text-gray-400 hover:text-[#22c55e] transition-colors inline-flex items-center gap-1"
              >
                Store
                <ExternalLink className="h-3 w-3" />
              </button>
              <Link href="/about" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                Contact
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}

