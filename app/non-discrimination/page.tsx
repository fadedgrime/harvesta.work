import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Non-Discrimination Statement | Harvesta",
  description: "Non-Discrimination Statement for Harvesta's virtual shopping experience on Roblox.",
}

export default function NonDiscriminationPage() {
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
              Non-Discrimination{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Statement
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Our commitment to providing an inclusive, welcoming environment for all users, staff members, and
              partners.
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Equality</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At Harvesta, we are committed to providing an inclusive, welcoming environment for all users, staff
                    members, and partners, regardless of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Race, color, or ethnicity</li>
                    <li>National origin</li>
                    <li>Religion or creed</li>
                    <li>Sex, gender identity, or gender expression</li>
                    <li>Sexual orientation</li>
                    <li>Age</li>
                    <li>Disability or medical condition</li>
                    <li>Veteran status</li>
                    <li>Socioeconomic status</li>
                    <li>Any other characteristic protected by applicable law</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Application of This Policy</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This Non-Discrimination Statement applies to all aspects of our operations, including but not
                    limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>User access to our virtual shopping experience</li>
                    <li>Customer service and support</li>
                    <li>Staff recruitment, hiring, training, and advancement</li>
                    <li>Selection of partners and contractors</li>
                    <li>Development and implementation of policies and procedures</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Zero Tolerance for Discrimination</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Harvesta has a zero-tolerance policy for discrimination, harassment, or bullying of any kind. We are
                    committed to taking prompt action to address any incidents that may occur within our virtual
                    environment or among our staff.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Users who engage in discriminatory behavior may face consequences including temporary or permanent
                    removal from our Service, in accordance with our Terms of Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Inclusive Design</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We strive to make our virtual shopping experience accessible and enjoyable for all users. This
                    includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Designing our virtual spaces with accessibility in mind</li>
                    <li>Offering diverse representation in our virtual products and environments</li>
                    <li>Providing clear communication and support options for users with different needs</li>
                    <li>Continuously improving our Service based on user feedback</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Discrimination</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you experience or witness discrimination, harassment, or any behavior that violates this policy
                    while using our Service, we encourage you to report it. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Contact a Harvesta staff member within the Roblox experience</li>
                    <li>Email us at support@harvestaremote.com</li>
                    <li>Report the behavior through our Discord server</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    All reports will be taken seriously and investigated promptly. We are committed to handling all
                    complaints with sensitivity and respect for the privacy of all involved.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Commitment</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our commitment to non-discrimination and inclusion is ongoing. We regularly review and update our
                    policies, practices, and training to ensure they reflect our values and meet the needs of our
                    diverse community.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We welcome feedback and suggestions on how we can continue to improve our efforts to create an
                    inclusive environment for all.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have questions about this Non-Discrimination Statement or would like to provide feedback,
                    please contact us at support@harvestaremote.com.
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
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Inclusive Community</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Experience a welcoming virtual shopping environment where everyone belongs.
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
