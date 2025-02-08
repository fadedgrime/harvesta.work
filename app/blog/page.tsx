"use client"

import { motion } from "framer-motion"
import Footer from "../components/Footer"
import BlogCard from "../components/BlogCard"
import { useState } from "react"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: "News" | "Updates" | "Community"
}

// This would typically come from a database or CMS
const blogPosts: BlogPost[] = [
  {
    slug: "welcome-to-harvesta",
    title: "Welcome to Harvesta's Blog",
    excerpt: "Introducing our new blog where we'll share updates, news, and community stories.",
    content: "Full blog post content here...",
    date: "March 15, 2024",
    author: "Harvesta Team",
    category: "News"
  },
  // Add more blog posts here
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  // Add post numbers in reverse chronological order
  const numberedPosts = filteredPosts.map((post, index) => ({
    ...post,
    number: filteredPosts.length - index
  }))

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 font-dm-sans text-center">Blog</h1>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedCategory ? 'bg-[#22c55e] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            {["News", "Updates", "Community"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category ? 'bg-[#22c55e] text-white' : 'bg-[#1a1a1a] text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {numberedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
} 