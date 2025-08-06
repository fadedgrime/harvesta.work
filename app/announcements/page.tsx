import Link from "next/link"
import { ArrowRight, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ANNOUNCEMENTS } from "@/components/announcements"

export const metadata = {
  title: "Announcements | Harvesta",
  description: "Latest announcements and updates from Harvesta.",
}

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
              alt="Harvesta - Food Solutions Company"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/foundation" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Foundation
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link
              href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Store
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white py-16 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Announcements
              </span>
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Stay informed with the latest updates and important information from Harvesta.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Content - Moved up and made prominent */}
      <section className="py-8 sm:py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {ANNOUNCEMENTS.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-12 w-12 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No announcements at this time</h3>
                <p className="text-gray-500">Check back later for updates and news from Harvesta.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {ANNOUNCEMENTS.map((announcement, index) => (
                  <Card
                    key={announcement.id}
                    className="border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-emerald-25 shadow-lg hover:shadow-xl transition-all duration-200 hover:border-emerald-300"
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-600 text-white">
                              📢 ANNOUNCEMENT
                            </span>
                            <time className="text-sm text-emerald-700 font-medium" dateTime="2025-06-18">
                              June 18, 2025
                            </time>
                          </div>
                          <h2 className="text-2xl font-bold text-emerald-900 mb-4">{announcement.title}</h2>
                        </div>
                      </div>

                      <div className="bg-white/70 rounded-lg p-6 mb-6 border border-emerald-100">
                        <p className="text-gray-700 leading-relaxed text-lg">{announcement.message}</p>
                      </div>

                      {announcement.link && (
                        <div className="flex justify-start">
                          <Button
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                            asChild
                          >
                            <Link href={announcement.link.url} target="_blank" rel="noopener noreferrer">
                              {announcement.link.text}
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-emerald-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Connected</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join our community to get the latest updates and be part of the Harvesta experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8" asChild>
              <Link
                href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Store
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 bg-transparent"
              asChild
            >
              <Link
                href="https://www.roblox.com/communities/9018942/Harvesta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Roblox Community
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-emerald-600">Harvesta</span>
              </Link>
              <p className="mt-4 text-gray-600 max-w-md">
                The premier virtual shopping experience on Roblox. Quality products, exceptional service, and a thriving
                community.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Contact us:{" "}
                  <Link href="mailto:support@harvestaremote.com" className="text-emerald-600 hover:text-emerald-700">
                    support@harvestaremote.com
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/foundation" className="text-sm text-gray-600 hover:text-gray-900">
                    Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/non-discrimination" className="text-sm text-gray-600 hover:text-gray-900">
                    Non-Discrimination
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Harvesta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
