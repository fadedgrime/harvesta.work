import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service | Harvesta",
  description: "Terms of Service for Harvesta's virtual shopping experience on Roblox.",
}

export default function TermsPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Terms of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Please read these terms carefully before using Harvesta's virtual shopping experience on Roblox.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-500 mb-8">Last Updated: May 8, 2025</p>

              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Harvesta. These Terms of Service ("Terms") govern your use of the Harvesta experience on
                    Roblox (the "Service") operated by Harvesta ("we," "us," or "our"). By accessing or using our
                    Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may
                    not access the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      <strong className="text-gray-900">"Content"</strong> refers to all text, information, graphics,
                      audio, video, and data offered through our Service.
                    </p>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">"User"</strong> refers to individuals who access or use our
                      Service, including players, visitors, and customers.
                    </p>
                    <p className="text-gray-600">
                      <strong className="text-gray-900">"Virtual Items"</strong> refers to digital items, currency, or
                      other elements available within the Service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our Service provides a virtual shopping experience on the Roblox platform. Users may browse virtual
                    stores, interact with other users, and participate in events. The Service is intended for
                    entertainment purposes only.
                  </p>
                  <p className="text-gray-600 mb-4">
                    You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree
                    not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Use the Service in any way that violates any applicable laws or regulations</li>
                    <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                    <li>Attempt to gain unauthorized access to any portion of the Service</li>
                    <li>Use the Service for any purpose that is unlawful or prohibited by these Terms</li>
                    <li>Harass, abuse, or harm another person through your use of the Service</li>
                    <li>Impersonate or attempt to impersonate Harvesta staff or other users</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Virtual Items and Currency</h2>
                  <p className="text-gray-600 mb-4">
                    The Service may include virtual items or currency that can be acquired through gameplay or purchased
                    with real money through Roblox. Virtual items and currency:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Have no real-world value and cannot be exchanged for real money or items</li>
                    <li>Are licensed, not sold, to you for use exclusively within the Service</li>
                    <li>May be altered, removed, or discontinued at our discretion</li>
                    <li>Are subject to Roblox's terms and policies regarding virtual items and currency</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You are responsible for your conduct while using the Service. You agree to follow all Roblox
                    Community Standards and guidelines in addition to these Terms. Inappropriate behavior may result in
                    removal from the Service or other actions at our discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Service and its original content, features, and functionality are owned by Harvesta and are
                    protected by international copyright, trademark, patent, trade secret, and other intellectual
                    property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may terminate or suspend your access to the Service immediately, without prior notice or
                    liability, for any reason, including without limitation if you breach the Terms. Upon termination,
                    your right to use the Service will immediately cease.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall Harvesta, nor its directors, employees, partners, agents, suppliers, or
                    affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                    resulting from your access to or use of or inability to access or use the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify or replace these Terms at any time. If a revision is material, we
                    will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes
                    a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms, please contact us at support@harvestaremote.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-emerald-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join our community and experience the future of virtual shopping today.
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
