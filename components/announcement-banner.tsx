"use client"

import Link from "next/link"

export interface Announcement {
  id: string
  title: string
  message: string
  link?: {
    text: string
    url: string
  }
}

interface AnnouncementBannerProps {
  announcement?: Announcement
  variant?: "default" | "emerald" | "dark"
}

export function AnnouncementBanner({ announcement, variant = "emerald" }: AnnouncementBannerProps) {
  // If no announcement, don't render anything
  if (!announcement) return null

  // Variant styles
  const variantStyles = {
    default: {
      bg: "bg-gray-50",
      text: "text-gray-900",
      button: "bg-gray-900 text-white hover:bg-gray-700",
      blur: "from-[#ff80b5] to-[#9089fc]",
    },
    emerald: {
      bg: "bg-emerald-900/80",
      text: "text-white",
      button: "bg-emerald-500 text-white hover:bg-emerald-600",
      blur: "from-emerald-400 to-emerald-600",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-white",
      button: "bg-white text-gray-900 hover:bg-gray-200",
      blur: "from-gray-700 to-gray-900",
    },
  }

  const styles = variantStyles[variant]

  return (
    <div className={`relative isolate flex items-center gap-x-6 overflow-hidden ${styles.bg} px-6 py-2.5 sm:px-3.5`}>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${styles.blur} opacity-30`}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
          }}
          className={`aspect-[577/310] w-[36.0625rem] bg-gradient-to-r ${styles.blur} opacity-30`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 flex-1">
        <p className={`text-sm leading-6 ${styles.text}`}>
          <strong className="font-semibold">{announcement.title}</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle cx={1} cy={1} r={1} />
          </svg>
          {announcement.message}
        </p>
        {announcement.link && (
          <Link
            href={announcement.link.url}
            className={`flex-none rounded-full ${styles.button} px-3.5 py-1 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {announcement.link.text} <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  )
}
