"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  number: number
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1a1a] rounded-lg p-6 border border-gray-800 hover:border-[#22c55e] transition-colors"
    >
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <span className="text-[#22c55e] text-sm">#{post.number}</span>
          <span className="text-[#22c55e] text-sm">{post.category}</span>
        </div>
        <h2 className="text-xl font-bold text-white mt-2">{post.title}</h2>
      </div>
      <p className="text-gray-400 mb-6">{post.excerpt}</p>
      <div className="flex justify-between items-center text-sm text-gray-400">
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
      <Link 
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-[#22c55e] hover:text-[#22c55e]/90 transition-colors"
      >
        Read More →
      </Link>
    </motion.div>
  )
} 