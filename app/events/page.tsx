"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"
import Footer from "../components/Footer"

interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  buttonText: string
  buttonLink: string
}

const events: Event[] = [
  {
    title: "Staff Recruitment",
    date: "No Date Set",
    time: "No Time Set",
    location: "Harvesta Application Center",
    description: "Looking to join our team? Join our application center to learn about available positions.",
    buttonText: "Join Application Center",
    buttonLink: "https://discord.gg/harvesta",
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 font-dm-sans text-center">Upcoming Events</h1>
          <div className="max-w-lg mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-[#22c55e] transition-colors"
              >
                <h2 className="text-xl font-bold text-white mb-4">{event.title}</h2>
                <div className="space-y-3 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#22c55e]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#22c55e]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#22c55e]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{event.description}</p>
                <Button
                  className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-white"
                  onClick={() => window.open(event.buttonLink, "_blank")}
                >
                  {event.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 