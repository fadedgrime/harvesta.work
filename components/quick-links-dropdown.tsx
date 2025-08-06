"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ExternalLink, Building2, MessageSquare } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface QuickLink {
  label: string
  href: string
  description?: string
  type?: "internal" | "external"
  showOnMediumOnly?: boolean
  icon?: "building" | "discord"
}

const quickLinks: QuickLink[] = [
  {
    label: "Departments",
    href: "/departments",
    description: "Explore our various departments and divisions",
    type: "internal",
    showOnMediumOnly: true, // Only show on medium screens
    icon: "building",
  },
  {
    label: "Discord Server",
    href: "https://discord.gg/kxghmttvY9",
    description: "Join our Discord community for support and updates",
    type: "external",
    icon: "discord",
  },
  {
    label: "Harvesta Discipline",
    href: "https://portal.harvesta.work",
    description: "Discipline portal and resources",
    type: "external",
  },
  {
    label: "Arvo Stores Discipline",
    href: "https://arvodiscipline.harvesta.work",
    description: "Arvo Stores Discipline portal",
    type: "external",
  },
]

export function QuickLinksDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setIsOpen(!isOpen)
    } else if (e.key === "Escape") {
      setIsOpen(false)
    }
  }

  const getIcon = (link: QuickLink) => {
    if (link.icon === "building") {
      return <Building2 className="h-3 w-3 text-emerald-600 flex-shrink-0" />
    }
    if (link.icon === "discord") {
      return <MessageSquare className="h-3 w-3 text-indigo-600 flex-shrink-0" />
    }
    if (link.type === "internal") {
      return <Building2 className="h-3 w-3 text-emerald-600 flex-shrink-0" />
    }
    return null
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={dropdownRef}>
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
          isOpen && "text-gray-900 bg-gray-50",
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onKeyDown={handleKeyDown}
        onClick={() => setIsOpen(!isOpen)}
      >
        Quick Links
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3 w-3" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-2">
              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Quick Access</h3>
                <div className="space-y-1">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-start justify-between px-3 py-3 text-sm hover:bg-gray-50 rounded transition-colors group focus:outline-none focus:bg-gray-50",
                        // Hide Departments link on large screens (lg and above)
                        link.showOnMediumOnly && "lg:hidden",
                      )}
                      target={link.type === "external" ? "_blank" : undefined}
                      rel={link.type === "external" ? "noopener noreferrer" : undefined}
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getIcon(link)}
                          <span className="font-medium text-gray-900 group-hover:text-emerald-600">{link.label}</span>
                          {link.type === "external" && (
                            <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-emerald-600" />
                          )}
                        </div>
                        {link.description && (
                          <p className="text-xs text-gray-500 leading-relaxed">{link.description}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
