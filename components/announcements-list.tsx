"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { ANNOUNCEMENTS } from "./announcements"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function AnnouncementsList() {
  const [expandedAnnouncements, setExpandedAnnouncements] = useState<Record<string, boolean>>({})

  // Toggle announcement expansion
  const toggleAnnouncement = (id: string) => {
    setExpandedAnnouncements((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  if (ANNOUNCEMENTS.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No announcements at this time.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {ANNOUNCEMENTS.map((announcement, index) => {
        const isExpanded = expandedAnnouncements[announcement.id]

        return (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleAnnouncement(announcement.id)}
            >
              {/* Header - Always Visible */}
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{announcement.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <time dateTime="2025-06-18">June 18, 2025</time>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                        Active
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="flex-shrink-0 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pt-6 border-t border-gray-100 mt-6">
                        <p className="text-gray-600 leading-relaxed mb-6">{announcement.message}</p>
                        {announcement.link && (
                          <Button
                            size="sm"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            asChild
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Link href={announcement.link.url} target="_blank" rel="noopener noreferrer">
                              {announcement.link.text}
                            </Link>
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
