"use client"

import { Inter } from "next/font/google"
import Link from "next/link"
import { Home, RefreshCcw } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
          <div className="space-y-8 max-w-2xl">
            <div className="relative">
              <div className="absolute -inset-1 -z-10 rounded-full bg-red-500/20 blur-3xl"></div>
              <h1 className="text-8xl font-bold text-white">500</h1>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Critical Error</h2>
            <p className="text-lg text-gray-400">
              We're sorry, but a critical error has occurred. Our team has been notified and is working to fix the
              issue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md flex items-center justify-center"
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try again
              </button>

              <Link
                href="/"
                className="px-4 py-2 border border-gray-700 hover:bg-gray-800 rounded-md flex items-center justify-center"
              >
                <Home className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
