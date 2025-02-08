'use client'
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import type { ReactElement } from 'react'

export default function ContactPage(): ReactElement {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8 font-dm-sans text-center">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

