import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative mr-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full absolute -top-1 left-4"></div>
                <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full absolute top-2 left-3"></div>
                <div className="w-2 h-2 bg-emerald-300 rounded-full absolute top-3 left-1"></div>
                <div className="w-1.5 h-1.5 bg-emerald-700 rounded-full absolute top-1 left-6"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-400">Harvesta</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide">THE VIRTUAL SHOPPING COMPANY</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Experience premier virtual grocery shopping on Roblox with quality products and exceptional service.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <Link href="mailto:support@harvestaremote.com" className="hover:text-white transition-colors">
                support@harvestaremote.com
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/foundation" className="text-gray-400 hover:text-white transition-colors">
                  Foundation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/announcements" className="text-gray-400 hover:text-white transition-colors">
                  Press Room
                </Link>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Virtual Store</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.roblox.com/communities/9018942/Harvesta"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Community</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/krhm35cUtZ"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Discord</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://support.harvesta.work"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Support</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">© {currentYear} Harvesta. All rights reserved.</div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/non-discrimination" className="text-gray-500 hover:text-gray-300 transition-colors">
                Non-Discrimination Statement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
