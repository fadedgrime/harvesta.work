"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"

export default function ContactForm() {
  const handleButtonClick = () => {
    window.open("https://discord.gg/krhm35cUtZ", "_blank")
  }

  return (
    <motion.div
      className="max-w-md mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-200 mb-4">
        For support, please join our Discord server.
      </p>
      <Button
        className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-white"
        onClick={handleButtonClick}
      >
        Join Discord
      </Button>
    </motion.div>
  )
}

