'use client'
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Scroll, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-[#1a1a1a]/80 rounded-lg shadow-2xl border border-gray-800"
        >
          {/* Document Header */}
          <div className="p-8 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-[#22c55e]" />
              <h1 className="text-4xl font-bold text-white font-dm-sans">Terms of Service</h1>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Scroll className="h-4 w-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Content sections with hover effects and animations */}
              {[
                {
                  title: "1. Introduction",
                  content: "Welcome to Harvesta. By accessing our Roblox experience and related services, you agree to be bound by these Terms of Service. Please read them carefully before using our services."
                },
                {
                  title: "2. Definitions",
                  list: [
                    "Service: The Harvesta Roblox experience and related platforms",
                    "User: Any individual accessing or using our Service",
                    "Content: All materials, features, and functionality within our Service"
                  ]
                },
                // ... other sections
              ].map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-[#111111]/50 rounded-lg border border-gray-800/50 hover:border-[#22c55e]/20 transition-all hover:shadow-[#22c55e]/5 hover:shadow-lg"
                >
                  <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
                  {section.content && (
                    <p className="text-gray-300 leading-relaxed">{section.content}</p>
                  )}
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </motion.section>
              ))}
            </div>
          </div>

          {/* Document Footer */}
          <div className="p-8 border-t border-gray-800 bg-[#111111]/50">
            <p className="text-gray-400 text-sm text-center">
              By using our service, you acknowledge that you have read and understood these terms.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}