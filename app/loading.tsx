"use client"
import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-16 h-16 rounded-full border-4 border-[#22c55e] border-t-transparent animate-spin"
      />
    </div>
  )
} 