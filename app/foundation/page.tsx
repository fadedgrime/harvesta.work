import Link from "next/link"
import { ArrowRight, Heart, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Harvesta Foundation | Harvesta",
  description:
    "Learn about Harvesta Foundation's commitment to giving back to the community and supporting long-term sustainability.",
}

export default function FoundationPage() {
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
            <Link href="/foundation" className="text-sm font-medium text-emerald-600">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Harvesta{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Foundation
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Dedicated to giving back to the community and supporting the long-term sustainability of Harvesta's
              operations through meaningful initiatives and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Mission */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Our Foundation</h2>
              <Card className="border-emerald-200 bg-emerald-50">
                <CardContent className="p-12">
                  <p className="text-xl leading-relaxed text-gray-700">
                    The Harvesta Foundation is dedicated to giving back to the community and supporting the long-term
                    sustainability of Harvesta's operations. Through strategic funding efforts, the Foundation helps
                    strengthen our mission to serve, uplift, and inspire those we reach.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Mission Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Heart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Serve</h3>
                  <p className="text-gray-600">
                    We serve our community by providing resources and support where they are needed most, creating
                    lasting positive impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Uplift</h3>
                  <p className="text-gray-600">
                    We uplift individuals and communities by creating opportunities for growth, learning, and
                    development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Inspire</h3>
                  <p className="text-gray-600">
                    We inspire positive change by leading through example and encouraging others to make a meaningful
                    difference.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
              Our Impact Areas
            </h2>
            <div className="space-y-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Development</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Supporting initiatives that strengthen our virtual and real-world communities through education,
                    mentorship, and resource sharing programs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Literacy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Promoting digital literacy and safe online practices, especially within gaming communities and
                    virtual commerce environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring the long-term sustainability of our operations while maintaining our commitment to
                    environmental and social responsibility.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-emerald-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Be part of our commitment to creating positive change in virtual commerce and community building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8" asChild>
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
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
