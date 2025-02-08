import type { Metadata } from "next"
import { Inter, DM_Sans } from "next/font/google"
import "./globals.css"
import type React from "react"
import Header from "./components/Header"
import Announcement from "./components/Announcement"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"], // This imports the bold weight
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://harvesta.work'),
  title: {
    default: "Harvesta - Virtual Grocery Shopping on Roblox",
    template: "%s | Harvesta"
  },
  description: "Experience a unique virtual grocery shopping adventure in Roblox with Harvesta. Shop, explore, and have fun!",
  keywords: ["Roblox", "shopping", "virtual store", "grocery", "game", "Harvesta"],
  authors: [{ name: "Harvesta Team" }],
  openGraph: {
    title: "Harvesta - Virtual Grocery Shopping on Roblox",
    description: "Experience premier virtual grocery shopping on Roblox with quality products and exceptional service.",
    url: "https://harvesta.com",
    siteName: "Harvesta",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harvesta - Virtual Grocery Shopping"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvesta - Virtual Grocery Shopping on Roblox",
    description: "Experience premier virtual grocery shopping on Roblox with quality products and exceptional service.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable}`}>
      <body className={`${inter.className} bg-[#111111]`}>
        <div className="flex flex-col min-h-screen bg-[#111111]">
          <Header />
          <Announcement />
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

