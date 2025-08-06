"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SearchResult {
  title: string
  description: string
  url: string
  type: "page" | "external"
}

const searchData: SearchResult[] = [
  {
    title: "About Us",
    description: "Learn about Harvesta's mission, values, and history",
    url: "/about",
    type: "page",
  },
  {
    title: "Foundation",
    description: "Harvesta Foundation's commitment to giving back",
    url: "/foundation",
    type: "page",
  },
  {
    title: "Departments",
    description: "Explore our various departments and divisions",
    url: "/departments",
    type: "page",
  },
  {
    title: "Contact Us",
    description: "Get in touch with the Harvesta team",
    url: "/contact",
    type: "page",
  },
  {
    title: "Announcements",
    description: "Latest updates and news from Harvesta",
    url: "/announcements",
    type: "page",
  },
  {
    title: "Harvesta Store",
    description: "Visit our virtual store on Roblox",
    url: "https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store",
    type: "external",
  },
  {
    title: "Roblox Community",
    description: "Join our Roblox community group",
    url: "https://www.roblox.com/communities/9018942/Harvesta",
    type: "external",
  },
  {
    title: "Discord Server",
    description: "Join our Discord community for support",
    url: "https://discord.gg/krhm35cUtZ",
    type: "external",
  },
  {
    title: "Terms of Service",
    description: "Read our terms and conditions",
    url: "/terms",
    type: "page",
  },
  {
    title: "Privacy Policy",
    description: "Learn about our privacy practices",
    url: "/privacy",
    type: "page",
  },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )
    setResults(filtered)
  }, [query])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const handleResultClick = (result: SearchResult) => {
    if (result.type === "external") {
      window.open(result.url, "_blank", "noopener,noreferrer")
    } else {
      window.location.href = result.url
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 51,
            }}
            className="w-[90vw] max-w-2xl"
          >
            <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden max-h-[70vh] flex flex-col w-full">
              <div className="flex items-center p-3 border-b border-gray-100 flex-shrink-0 bg-white">
                <Search className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="Search Harvesta..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 border-0 focus:ring-0 focus:outline-none text-lg placeholder:text-gray-400 bg-transparent"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="ml-2 p-2 hover:bg-gray-100 rounded-md flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto min-h-0">
                {query.trim() === "" ? (
                  <div className="p-6 text-center text-gray-500">
                    <Search className="h-10 w-10 mx-auto mb-3 text-gray-300" />
                    <p className="text-lg font-medium mb-1">Search Harvesta</p>
                    <p className="text-sm">Find pages, departments, and resources</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-6 text-center text-gray-500">
                    <p className="text-lg font-medium mb-1">No results found</p>
                    <p className="text-sm">Try searching for something else</p>
                  </div>
                ) : (
                  <div className="py-1">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 mb-1">{result.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">{result.description}</p>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            {result.type === "external" ? (
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                External
                              </div>
                            ) : (
                              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                Page
                              </div>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-4 py-3 bg-white border-t border-gray-100 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
                      alt="Harvesta"
                      className="h-5 w-auto"
                    />
                    <span className="text-sm font-medium text-gray-700">Harvesta Search</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="hidden sm:inline">Press ESC to close</span>
                    <span>
                      {results.length} result{results.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
