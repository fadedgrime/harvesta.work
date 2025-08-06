"use client"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { QuickLinksDropdown } from "@/components/quick-links-dropdown"
import { SearchDropdown } from "@/components/search-dropdown"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Top Header */}
      <header className="bg-white border-b border-gray-200" role="banner">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0" aria-label="Harvesta Home">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
                alt="Harvesta - Premier Virtual Shopping Company"
                className="h-12 w-auto"
                width="120"
                height="48"
              />
            </Link>

            {/* Top Navigation & Search - Show on larger screens */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                asChild
              >
                <Link href="/announcements">Announcements</Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-md px-4 py-2 bg-transparent focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                asChild
              >
                <Link href="/departments">Departments</Link>
              </Button>
              <QuickLinksDropdown />
              <SearchDropdown />
            </div>

            {/* Medium Screen Navigation - Show announcements and quick links */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                asChild
              >
                <Link href="/announcements">News</Link>
              </Button>
              <QuickLinksDropdown />
              <SearchDropdown />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-emerald-600" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="hidden md:flex">
            <Link
              href="/about"
              className="flex items-center justify-center px-8 py-4 text-white font-medium hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors border-r border-emerald-500 min-h-[60px]"
            >
              About
            </Link>
            <Link
              href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-white font-medium hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors border-r border-emerald-500 min-h-[60px] gap-2"
              aria-label="Visit Harvesta Store on Roblox (opens in new tab)"
            >
              Store <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/foundation"
              className="flex items-center justify-center px-8 py-4 text-white font-medium hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors border-r border-emerald-500 min-h-[60px]"
            >
              Foundation
            </Link>
            <Link
              href="https://www.roblox.com/communities/9018942/Harvesta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-white font-medium hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors border-r border-emerald-500 min-h-[60px] gap-2"
              aria-label="Join Harvesta Roblox Community (opens in new tab)"
            >
              Roblox Community <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-4 text-white font-medium hover:bg-emerald-700 focus:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors min-h-[60px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative" aria-labelledby="hero-heading">
          {/* Hero Image with Text Overlay */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fMRkBUYKtmf4aqkNI5NpmTotNKYeAG.png"
              alt="Interior view of Harvesta virtual store showing modern electronics section with organized displays and bright lighting"
              className="w-full h-full object-cover"
              loading="eager"
              width="1200"
              height="600"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"
              aria-hidden="true"
            ></div>

            {/* Hero Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <h1
                  id="hero-heading"
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                >
                  We are{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                    Harvesta
                  </span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed mb-8">
                  Your premier destination for <span className="text-yellow-400 font-medium">grocery shopping</span> on
                  Roblox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    asChild
                  >
                    <Link
                      href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Start shopping at Harvesta store on Roblox (opens in new tab)"
                    >
                      Start Shopping Now
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm focus:ring-2 focus:ring-white focus:ring-offset-2"
                    asChild
                  >
                    <Link
                      href="https://www.roblox.com/communities/9018942/Harvesta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Join Harvesta Roblox community (opens in new tab)"
                    >
                      Join Community
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-gray-50" aria-labelledby="stats-heading">
          <div className="container">
            <h2 id="stats-heading" className="sr-only">
              Harvesta Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600" aria-label="700 plus">
                  700+
                </div>
                <div className="text-lg text-gray-600 font-medium">Community Members</div>
                <p className="text-sm text-gray-500">With a potential to be active</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600" aria-label="50 plus">
                  50+
                </div>
                <div className="text-lg text-gray-600 font-medium">Products</div>
                <p className="text-sm text-gray-500">Carefully curated selection</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600" aria-label="99 percent">
                  99%
                </div>
                <div className="text-lg text-gray-600 font-medium">Customer Satisfaction</div>
                <p className="text-sm text-gray-500">Based on community feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24" aria-labelledby="features-heading">
          <div className="container">
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Why Choose Harvesta for Virtual Shopping
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're committed to delivering the most authentic and enjoyable virtual grocery shopping experience on
                Roblox.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Immersive Experience</h3>
                <p className="text-gray-600">
                  Realistic virtual shopping environment with products and features that make you feel like you're really there.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Community Focused</h3>
                <p className="text-gray-600">
                  Join a vibrant community of shoppers and staff who share your passion for retail and social interaction.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Premium Quality</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in customer service and product quality, ensuring every visit exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-600" aria-labelledby="cta-heading">
          <div className="container text-center">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-light text-white mb-6">
              Ready to Experience the Future of Virtual Shopping?
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of players who have made Harvesta their preferred shopping destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 font-semibold focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                asChild
              >
                <Link
                  href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Harvesta store on Roblox (opens in new tab)"
                >
                  Visit Our Store
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 bg-transparent font-semibold focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                asChild
              >
                <Link
                  href="https://www.roblox.com/communities/9018942/Harvesta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Harvesta Roblox community (opens in new tab)"
                >
                  Join Roblox Community
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200" role="contentinfo">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
                  alt="Harvesta Logo"
                  className="h-10 w-auto mr-3"
                  width="40"
                  height="40"
                />
              </div>
              <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
                The premier shopping experience on Roblox. Quality products, exceptional service, and a thriving community of supportive members.
              </p>
              <div className="text-sm text-gray-600">
                <p>
                  Contact us:{" "}
                  <Link
                    href="mailto:support@harvestaremote.com"
                    className="text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    support@harvestaremote.com
                  </Link>
                </p>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/foundation"
                    className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    Foundation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Harvesta store on Roblox (opens in new tab)"
                  >
                    <span>Store</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.roblox.com/communities/9018942/Harvesta"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join Harvesta Roblox community (opens in new tab)"
                  >
                    <span>Roblox Community</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/krhm35cUtZ"
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join Harvesta Discord server (opens in new tab)"
                  >
                    <span>Discord</span>
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Harvesta. All rights reserved.</p>
              <div className="flex gap-6 text-sm">
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/non-discrimination"
                  className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                >
                  Non-Discrimination Statement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
