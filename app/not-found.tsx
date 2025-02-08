'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"
import { Button } from "./components/ui/button"
import Footer from "./components/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold text-white mb-6 font-dm-sans">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-[#22c55e] hover:bg-[#22c55e]/90">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 