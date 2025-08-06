import Link from "next/link"
import { ArrowRight, Building2, Users, Briefcase, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Departments | Harvesta",
  description: "Explore Harvesta's various departments and organizational divisions.",
}

export default function DepartmentsPage() {
  const coreDepartments = [
    {
      name: "Harvesta Department of Human Resources (HDHR)",
      description: "Manages staff recruitment, training, development, and employee relations across all divisions.",
      link: "https://dhr.harvesta.work",
      icon: Users,
      external: true,
    },
    {
      name: "Harvesta Department of Subsidiaries (HDOS)",
      description:
        "Subsidiary management and oversight division responsible for coordinating our various business units.",
      link: "https://subsidiaries.harvesta.work",
      icon: Building2,
      external: true,
    },
    {
      name: "Harvesta Department of Public Affairs (HDPA)",
      description: "Handles public relations, communications, and maintains our public image and community engagement.",
      link: "https://dpa.harvesta.work",
      icon: Users,
      external: true,
    },
    {
      name: "Harvesta Department of Partnerships (HDOP)",
      description: "Manages strategic partnerships, collaborations, and external business relationships.",
      link: "https://dop.harvesta.work",
      icon: Briefcase,
      external: true,
    },
    {
      name: "Harvesta Department of Corporate Sales (HDCS)",
      description: "Oversees corporate sales strategies, business development, and revenue generation initiatives.",
      link: "https://dcs.harvesta.work",
      icon: Briefcase,
      external: true,
    },
    {
      name: "Harvesta Department of Regulation Enforcement (HDRE)",
      description:
        "Ensures compliance with regulations, policies, and maintains operational standards across all departments.",
      link: "https://dre.harvesta.work",
      icon: Building2,
      external: true,
    },
  ]

  const storeDepartments = [
    {
      name: "Harvesta Department of Store Security (HDSS)",
      description:
        "Responsible for maintaining security and safety within all Harvesta store locations and operations.",
      icon: Users,
      internal: true,
    },
    {
      name: "Harvesta Department of Headquarter Security (HDHS)",
      description: "Manages security operations at Harvesta headquarters and administrative facilities.",
      icon: Building2,
      internal: true,
    },
  ]

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
              Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                Departments
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Discover the various departments and divisions that make Harvesta a leading virtual commerce platform.
              Each department plays a crucial role in delivering exceptional experiences to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Departments */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Core Departments</h2>
              <p className="text-lg text-gray-600">
                Our core departments handle the essential business functions and strategic operations of Harvesta.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coreDepartments.map((department, index) => {
                const IconComponent = department.icon
                return (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                          <IconComponent className="h-5 w-5 text-emerald-600" />
                        </div>
                        <CardTitle className="text-xl">{department.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{department.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                        <Link
                          href={department.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Access Website
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Store Departments</h2>
              <p className="text-lg text-gray-600">
                Our store departments focus on operational security and maintaining safe shopping environments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {storeDepartments.map((department, index) => {
                const IconComponent = department.icon
                return (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                          <IconComponent className="h-5 w-5 text-gray-600" />
                        </div>
                        <CardTitle className="text-xl">{department.name}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">{department.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button variant="outline" className="bg-transparent" disabled>
                        Internal Department
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Organizational Structure
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our departments work collaboratively to ensure Harvesta maintains its position as a premier virtual
              shopping destination. Each division brings specialized expertise and dedication to serving our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
                <div className="text-sm font-medium text-gray-600">Total Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
                <div className="text-sm font-medium text-gray-600">Core Departments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2</div>
                <div className="text-sm font-medium text-gray-600">Store Departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-emerald-600">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Joining Our Team?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our various departments and help shape the future of
            virtual commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8" asChild>
              <Link href="/contact">
                Contact Us
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
                href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Our Store
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
