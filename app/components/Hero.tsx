"use client"

import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden animate-fadeIn">
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#22c55e 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-dm-sans">harvesta</h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Harvesta offers a premier and affordable shopping experience on Roblox. We are committed to providing fresh
          food at great prices, and customer and staff satisfaction are among our top priorities.
        </p>
        <Button
          className="bg-[#22c55e] hover:bg-[#22c55e]/90 text-white text-lg px-8 py-6"
          onClick={() => window.open("https://www.roblox.com/communities/9018942/Harvesta#!/about", "_blank")}
        >
          Roblox Group
        </Button>
      </div>
    </section>
  )
}

