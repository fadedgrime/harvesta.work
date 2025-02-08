"use client"

import { Button } from "./ui/button"

export default function CTA() {
  const handleButtonClick = () => {
    window.open("https://www.roblox.com/communities/9018942/Harvesta#!/about", "_blank")
  }

  return (
    <section className="bg-[#111111] py-20 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of players already enjoying the Harvesta shopping experience on Roblox.
        </p>
        <Button
          className="bg-[#22c55e] hover:bg-[#22c55e]/90 text-white text-lg px-8 py-6"
          onClick={handleButtonClick}
        >
          Join Our Roblox Group
        </Button>
      </div>
    </section>
  )
}

