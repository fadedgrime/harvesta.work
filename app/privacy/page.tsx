 'use client'
import Footer from "../components/Footer"
import { motion } from "framer-motion"
import { Shield, FileText } from "lucide-react"

export default function PrivacyPage() {
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
              <Shield className="h-6 w-6 text-[#22c55e]" />
              <h1 className="text-4xl font-bold text-white font-dm-sans">Privacy Policy</h1>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FileText className="h-4 w-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-8">
            <div className="prose prose-invert max-w-none space-y-8">
              {[
                {
                  title: "1. Data Collection",
                  content: "We collect minimal data necessary to provide our services. This includes basic Roblox profile information and gameplay statistics."
                },
                {
                  title: "2. Data Usage",
                  list: [
                    "Improve user experience",
                    "Maintain service functionality",
                    "Provide customer support",
                    "Analytics and performance monitoring"
                  ]
                },
                {
                  title: "3. Data Protection",
                  content: "We implement industry-standard security measures to protect your data. All information is handled in accordance with Roblox's privacy guidelines."
                }
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
              Contact us if you have any questions about our privacy practices.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}