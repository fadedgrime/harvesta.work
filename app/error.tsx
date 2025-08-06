"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCcw } from "lucide-react"
import { Suspense } from "react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { NavHeader } from "@/components/nav-header"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header with Suspense boundary */}
      <Suspense
        fallback={
          <header className="container py-6">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-medium tracking-tight">harvesta</div>
              <div className="h-8 w-8"></div>
            </div>
          </header>
        }
      >
        <NavHeader />
      </Suspense>

      {/* Error Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="space-y-8 max-w-2xl">
          <div className="relative">
            <div className="absolute -inset-1 -z-10 rounded-full bg-red-500/20 blur-3xl"></div>
            <h1 className="text-8xl font-bold text-white">500</h1>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight">Something went wrong</h2>
          <p className="text-lg text-gray-400">
            We're sorry, but we encountered an error while processing your request. Our team has been notified and is
            working to fix the issue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset} className="bg-emerald-500 hover:bg-emerald-600 text-white">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try again
            </Button>

            <Button variant="outline" className="border-gray-700 hover:bg-gray-800" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer with Suspense boundary */}
      <Suspense fallback={<div className="h-20 bg-black border-t border-gray-800"></div>}>
        <SiteFooter />
      </Suspense>
    </div>
  )
}
