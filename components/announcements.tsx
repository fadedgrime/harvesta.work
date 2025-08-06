"use client"
import type { Announcement } from "./announcement-banner"

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "harvesta-learn-unavailable-2025",
    title: "Harvesta Learn Temporarily Unavailable",
    message:
      "Harvesta Learn (harvestalearn.com) is currently unavailable due to issues with our providers. We will notify users once the service is restored.",
  },
  {
    id: "support-email-updated-2025",
    title: "Support Email Updated",
    message:
      "Our support email has been updated to support@harvestaremote.com. For quicker assistance, please submit a ticket in our Discord server.",
    link: {
      text: "Join Discord",
      url: "https://discord.gg/krhm35cUtZ",
    },
  },
]

export function Announcements() {
  // No longer automatically display announcements
  return null
}
