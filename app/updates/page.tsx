"use client"

import { motion } from "framer-motion"
import Footer from "../components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Update {
  date: string
  title: string
  content: string
}

const robloxUpdates: Update[] = [
  {
    date: "February 2025",
    title: "Staff Applications Open",
    content: "We are now accepting staff applications for various positions. Join our team and help create an amazing shopping experience!",
  }
]

const discordUpdates: Update[] = [
  {
    date: "February 2025",
    title: "New Support System",
    content: "We've implemented a new ticket system to better handle customer support requests.",
  }
]

const otherUpdates: Update[] = [
  {
    date: "February 2025",
    title: "Website Launch",
    content: "Welcome to our new website! Stay tuned for more updates and features.",
  }
]

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 font-dm-sans text-center">Updates</h1>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="roblox" className="border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#22c55e] text-xl">
                  Roblox Updates
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {robloxUpdates.map((update, index) => (
                      <div key={index} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-semibold">{update.title}</h3>
                          <span className="text-gray-400 text-sm">{update.date}</span>
                        </div>
                        <p className="text-gray-400">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="discord" className="border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#22c55e] text-xl">
                  Discord Updates
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {discordUpdates.map((update, index) => (
                      <div key={index} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-semibold">{update.title}</h3>
                          <span className="text-gray-400 text-sm">{update.date}</span>
                        </div>
                        <p className="text-gray-400">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="other" className="border-gray-800">
                <AccordionTrigger className="text-white hover:text-[#22c55e] text-xl">
                  Other Updates
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    {otherUpdates.map((update, index) => (
                      <div key={index} className="bg-[#1a1a1a] rounded-lg p-4 border border-gray-800">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-white font-semibold">{update.title}</h3>
                          <span className="text-gray-400 text-sm">{update.date}</span>
                        </div>
                        <p className="text-gray-400">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 