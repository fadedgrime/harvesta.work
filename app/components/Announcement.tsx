"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { announcements } from "../config/announcements"
import Link from "next/link"

export default function Announcement() {
  const [dismissedAnnouncements, setDismissedAnnouncements] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)
  
  // Initialize dismissed announcements from localStorage
  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem('dismissedAnnouncements')
    if (stored) {
      setDismissedAnnouncements(JSON.parse(stored))
    }
  }, [])

  // Filter for enabled and non-dismissed announcements
  const activeAnnouncement = announcements.find(
    announcement => announcement.enabled && !dismissedAnnouncements.includes(announcement.id)
  )

  const handleDismiss = () => {
    if (activeAnnouncement) {
      const newDismissed = [...dismissedAnnouncements, activeAnnouncement.id]
      setDismissedAnnouncements(newDismissed)
      localStorage.setItem('dismissedAnnouncements', JSON.stringify(newDismissed))
    }
  }

  // Prevent hydration mismatch
  if (!isClient) return null

  return (
    <AnimatePresence mode="wait">
      {activeAnnouncement && (
        <motion.div
          key={activeAnnouncement.id}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-[#22c55e]/10 border-b border-[#22c55e]/20 mt-[72px]"
        >
          <div className="container mx-auto px-4 py-3 relative">
            <div className="flex items-center justify-center text-[#22c55e] text-sm">
              <span>
                {activeAnnouncement.emoji && `${activeAnnouncement.emoji} `}
                {activeAnnouncement.message}
                {activeAnnouncement.link && (
                  <>
                    {" "}
                    <Link 
                      href={activeAnnouncement.link.url}
                      target="_blank"
                      className="underline hover:text-white transition-colors"
                    >
                      {activeAnnouncement.link.text}
                    </Link>
                  </>
                )}
              </span>
              <button
                onClick={handleDismiss}
                className="absolute right-4 hover:text-white transition-colors"
                aria-label="Dismiss announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}