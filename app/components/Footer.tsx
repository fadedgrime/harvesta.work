"use client"

import Link from "next/link"
import { Twitter, Youtube, MessagesSquare, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank")
  }

  const handleStoreClick = () => {
    window.open("https://www.roblox.com/games/140720090495456/Harvesta-Greenwich-Store", "_blank")
  }

  return (
    <footer className="bg-[#0a0a0a] text-white mt-auto">
      {/* Top Border with Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#22c55e]/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white hover:text-[#22c55e] transition-colors inline-flex items-center gap-2">
              harvesta
              <ExternalLink className="h-4 w-4" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience premier virtual grocery shopping on Roblox with quality products and exceptional service.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium text-sm text-gray-300 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Store', action: handleStoreClick, external: true },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <button 
                      onClick={item.action}
                      className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {item.label}
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  ) : (
                    <Link 
                      href={item.href!}
                      className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium text-sm text-gray-300 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Updates', 'Events', 'Terms', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#22c55e] transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-medium text-sm text-gray-300 uppercase tracking-wider mb-4">Join Community</h3>
            <div className="space-y-4">
              <Button 
                className="w-full bg-[#22c55e] hover:bg-[#22c55e]/90 text-white"
                onClick={() => handleSocialClick("https://discord.gg/krhm35cUtZ")}
              >
                Join Discord
              </Button>
              <div className="flex items-center gap-2">
                {[
                  { icon: <Twitter className="h-4 w-4" />, url: "https://twitter.com/harvesta" },
                  { icon: <Youtube className="h-4 w-4" />, url: "https://youtube.com/harvesta" },
                  { icon: <MessagesSquare className="h-4 w-4" />, url: "https://discord.gg/harvesta" }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="flex-1 rounded-md hover:bg-[#22c55e]/10 hover:text-[#22c55e]"
                    onClick={() => handleSocialClick(social.url)}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Harvesta. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

