import Link from "next/link"
import { ArrowRight, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Harvesta",
  description:
    "Learn about Harvesta's mission, values, and history in creating exceptional virtual shopping experiences on Roblox.",
}

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-emerald-600">
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
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Harvesta
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Pioneering the future of virtual commerce through innovative shopping experiences, community building, and
              meaningful connections on the Roblox platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To create exceptional virtual shopping experiences that bring people together, foster learning, and
                provide accessible, enjoyable commerce within the Roblox ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Community First</h3>
                  <p className="text-gray-600">
                    We prioritize building strong, inclusive communities where every member feels valued and heard.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously push boundaries to create new and exciting virtual commerce experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 mx-auto mb-6">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in every aspect of our platform and continuously improve our services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded with a vision to revolutionize virtual shopping, Harvesta began as a simple idea: to create the
                most immersive and enjoyable grocery shopping experience on Roblox. What started as a small virtual
                store has evolved into a thriving ecosystem that serves hundreds of players daily.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our journey began when our founders recognized the untapped potential of virtual commerce within gaming
                platforms. They envisioned a space where players could not only shop for virtual goods but also build
                meaningful connections, learn about real-world commerce, and participate in a vibrant community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Harvesta stands as a testament to innovation in virtual retail, combining cutting-edge technology
                with human-centered design to create experiences that are both entertaining and educational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16 text-center">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{"N"}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">drevmourn (Nevaeh)</h3>
                  <div className="text-sm font-medium text-emerald-600 mb-4">Executive Director</div>
                  <p className="text-gray-600 text-sm">
                    Visionary leader and founder of Harvesta, dedicated to creating innovative virtual shopping
                    experiences and building strong communities within the Roblox ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 mx-auto w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">C</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">convxors (Connor) </h3>
                  <div className="text-sm font-medium text-emerald-600 mb-4">Operations Director</div>
                  <p className="text-gray-600 text-sm">
                    Ensures smooth day-to-day operations and exceptional customer satisfaction through strategic
                    oversight and continuous process improvement.
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
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Experience the future of virtual shopping and become part of our growing community.
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
              <Link href="/contact">Contact Us</Link>
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
