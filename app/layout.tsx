import type React from "react"
import "@/app/globals.css"
import { DM_Sans } from "next/font/google"
import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/scroll-to-top"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata = {
  title: {
    default: "Harvesta | Premier Virtual Shopping on Roblox",
    template: "%s | Harvesta",
  },
  description:
    "Experience the future of virtual shopping with Harvesta on Roblox. Quality products, exceptional service, and a thriving community of 700+ members.",
  keywords: ["Roblox", "virtual shopping", "grocery store", "online community", "gaming", "virtual commerce"],
  authors: [{ name: "Harvesta Team" }],
  creator: "Harvesta",
  publisher: "Harvesta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://harvesta.work"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harvesta.work",
    siteName: "Harvesta",
    title: "Harvesta | Premier Virtual Shopping on Roblox",
    description:
      "Experience the future of virtual shopping with Harvesta on Roblox. Quality products, exceptional service, and a thriving community.",
    images: [
      {
        url: "/images/harvesta-hero-background.png",
        width: 1200,
        height: 630,
        alt: "Harvesta - Premier Virtual Shopping on Roblox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvesta | Premier Virtual Shopping on Roblox",
    description: "Experience the future of virtual shopping with Harvesta on Roblox.",
    images: ["/images/harvesta-hero-background.png"],
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
    google: "your-google-verification-code", // Replace with actual verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#059669" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", dmSans.variable)}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
