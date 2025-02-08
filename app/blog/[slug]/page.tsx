"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Footer from "../../components/Footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    slug: "welcome-to-harvesta",
    title: "Welcome to Harvesta's Blog",
    content: `
      <div class="space-y-6 text-gray-300">
        <p>
          Welcome to the official Harvesta blog! We're excited to launch this new platform where we'll be sharing updates, 
          news, and stories from our vibrant Roblox shopping community.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">What to Expect</h2>
        <p>
          Our blog will be your go-to source for everything Harvesta-related:
        </p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Latest store updates and new features</li>
          <li>Staff recruitment announcements</li>
          <li>Community spotlights and success stories</li>
          <li>Tips for making the most of your shopping experience</li>
          <li>Behind-the-scenes looks at our development process</li>
        </ul>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Our Community</h2>
        <p>
          At Harvesta, we're more than just a virtual grocery store – we're a community of passionate players who enjoy 
          creating unique shopping experiences. Whether you're a regular shopper or a dedicated staff member, you're part 
          of what makes Harvesta special.
        </p>

        <h2 class="text-2xl font-bold text-white mt-8 mb-4">Stay Connected</h2>
        <p>
          Make sure to check back regularly for new posts and updates. You can also join our Roblox group and Discord 
          server to stay connected with the community and be the first to know about new developments.
        </p>

        <p class="mt-8 text-[#22c55e]">
          Thank you for being part of our journey. Here's to creating amazing shopping experiences together!
        </p>
      </div>
    `,
    date: "March 15, 2024",
    author: "Harvesta Team",
    category: "News",
    number: 1
  }
  // Add more blog posts here
]

export default function BlogPostPage() {
  const params = useParams()
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4 font-dm-sans">Post Not Found</h1>
        <Link 
          href="/blog"
          className="text-[#22c55e] hover:text-[#22c55e]/90 inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#22c55e] hover:text-[#22c55e]/90 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <article className="bg-[#1a1a1a] rounded-lg p-8 border border-gray-800">
            <header className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#22c55e] text-sm">#{post.number}</span>
                <span className="text-[#22c55e] text-sm">{post.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-white mt-2 font-dm-sans">{post.title}</h1>
              <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </header>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 