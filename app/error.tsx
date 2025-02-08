'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { RefreshCcw } from "lucide-react"
import { Button } from "./components/ui/button"
import Footer from "./components/Footer"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6 font-dm-sans">Oops!</h1>
          <p className="text-xl text-gray-400 mb-8">
            Something went wrong. Please try again.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button 
              onClick={reset}
              className="bg-[#22c55e] hover:bg-[#22c55e]/90 inline-flex items-center gap-2"
            >
              <RefreshCcw className="h-4 w-4" />
              Try Again
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 