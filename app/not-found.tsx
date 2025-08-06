import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white" role="banner">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" aria-label="Harvesta Home">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
                alt="Harvesta - Premier Virtual Shopping Company"
                className="h-12 w-auto"
                width="120"
                height="48"
              />
            </Link>
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              asChild
            >
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* 404 Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16" role="main">
        <div className="text-center max-w-2xl">
          {/* 404 Number */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 -z-10 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true"></div>
            <h1 className="text-8xl md:text-9xl font-bold text-emerald-600">404</h1>
          </div>

          {/* Error Message */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Page not found</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be
            incorrect.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 px-8 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              asChild
            >
              <Link href="/" aria-label="Go to homepage">
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Go Home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent px-8 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              asChild
            >
              <Link href="/contact">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
                  <p className="text-sm text-gray-600 mb-4">Learn about Harvesta's mission and values</p>
                  <Link
                    href="/about"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    Visit Page <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Virtual Store</h4>
                  <p className="text-sm text-gray-600 mb-4">Visit our Roblox store and start shopping</p>
                  <Link
                    href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                    aria-label="Visit Harvesta store on Roblox (opens in new tab)"
                  >
                    Visit Store <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Departments</h4>
                  <p className="text-sm text-gray-600 mb-4">Explore our various departments and divisions</p>
                  <Link
                    href="/departments"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    View Departments <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-600 mb-4">Get in touch with our support team</p>
                  <Link
                    href="/contact"
                    className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    Contact Support <ArrowRight className="ml-1 h-3 w-3" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50" role="contentinfo">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harvesta_logo_transparent%20%281%29-LYyjN4yX5MKbAageIsOhRyC8xLYpVw.png"
                alt="Harvesta Logo"
                className="h-6 w-auto"
                width="24"
                height="24"
              />
              <span className="text-sm text-gray-600">© {new Date().getFullYear()} Harvesta. All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
