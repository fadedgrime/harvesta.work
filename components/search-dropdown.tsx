"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, ExternalLink, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"

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

export function SearchDropdown() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter results based on query with debouncing
  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    const timeoutId = setTimeout(() => {
      const filtered = searchData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()),
      )
      setResults(filtered.slice(0, 6)) // Limit to 6 results
      setIsLoading(false)
    }, 150) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [query])

  // Show dropdown when focused and has query or results
  useEffect(() => {
    setIsOpen(isFocused && (query.trim() !== "" || results.length > 0))
  }, [isFocused, query, results])

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false)
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFocused(false)
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  const handleResultClick = (result: SearchResult) => {
    if (result.type === "external") {
      window.open(result.url, "_blank", "noopener,noreferrer")
    } else {
      window.location.href = result.url
    }
    setQuery("")
    setIsFocused(false)
    setIsOpen(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" && results.length > 0) {
      e.preventDefault()
      // Focus first result
      const firstResult = containerRef.current?.querySelector('[role="option"]') as HTMLElement
      firstResult?.focus()
    }
  }

  return (
    <div ref={containerRef} className="relative w-64">
      {/* Search Input */}
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
          aria-label="Search Harvesta website"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          role="combobox"
          aria-autocomplete="list"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {isLoading ? (
            <Loader2 className="h-4 w-4 text-gray-400 animate-spin" aria-hidden="true" />
          ) : (
            <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Dropdown Results */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
            role="listbox"
            aria-label="Search results"
          >
            {query.trim() === "" ? (
              <div className="p-4 text-center text-gray-500">
                <Search className="h-8 w-8 mx-auto mb-2 text-gray-300" aria-hidden="true" />
                <p className="text-sm">Start typing to search...</p>
              </div>
            ) : isLoading ? (
              <div className="p-4 text-center text-gray-500">
                <Loader2 className="h-8 w-8 mx-auto mb-2 text-gray-300 animate-spin" aria-hidden="true" />
                <p className="text-sm">Searching...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                <p className="text-sm font-medium mb-1">No results found</p>
                <p className="text-xs">Try searching for something else</p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0 focus:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                    role="option"
                    aria-selected={false}
                    tabIndex={-1}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-gray-900 text-sm">{result.title}</h3>
                          {result.type === "external" && (
                            <ExternalLink className="h-3 w-3 text-gray-400 flex-shrink-0" aria-hidden="true" />
                          )}
                        </div>
                        <p className="text-xs text-gray-500 line-clamp-2">{result.description}</p>
                      </div>
                      <div className="ml-3 flex-shrink-0">
                        {result.type === "external" ? (
                          <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            External
                          </div>
                        ) : (
                          <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                            Page
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}

                {results.length === 6 && (
                  <div className="px-4 py-2 text-center border-t border-gray-100">
                    <p className="text-xs text-gray-500">Showing first 6 results</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
