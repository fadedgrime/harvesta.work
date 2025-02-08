"use client"

import { motion } from "framer-motion"
import { Users, ShoppingBag, Trophy, Heart } from "lucide-react"
import Footer from "../components/Footer"

const stats = [
  { icon: <Users className="h-6 w-6 text-[#22c55e]" />, value: "1000+", label: "Daily Shoppers" },
  { icon: <ShoppingBag className="h-6 w-6 text-[#22c55e]" />, value: "50+", label: "Store Items" },
  { icon: <Trophy className="h-6 w-6 text-[#22c55e]" />, value: "10k+", label: "Group Members" },
  { icon: <Heart className="h-6 w-6 text-[#22c55e]" />, value: "100%", label: "Customer Satisfaction" },
]

const teamMembers = [
  {
    name: "Alex",
    role: "Founder & CEO",
    description: "Leading Harvesta's mission to revolutionize virtual shopping.",
  },
  {
    name: "Sarah",
    role: "Store Manager",
    description: "Ensuring smooth operations and customer satisfaction.",
  },
  {
    name: "Michael",
    role: "Community Manager",
    description: "Building and nurturing our amazing community.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-dm-sans">Our Story</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Founded with a vision to create the most immersive and enjoyable shopping experience on Roblox, 
                Harvesta has grown from a simple store into a thriving community of shoppers and staff members.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-dm-sans">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Harvesta, we're committed to providing an exceptional virtual shopping experience 
                that combines convenience, quality, and community. Our goal is to create a space where 
                players can enjoy shopping while connecting with others.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center font-dm-sans">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#22c55e] transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[#22c55e] mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 