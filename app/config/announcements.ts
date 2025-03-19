interface Announcement {
  id: string
  message: string
  enabled: boolean
  emoji?: string
  link?: {
    text: string
    url: string
  }
}

export const announcements: Announcement[] = [
  {
    id: "emails",
    message: "harvesta.work emails are down. For assistance, please join our Discord server.",
    enabled: true,
    emoji: "🚫",
    link: {
      text: "Discord server",
      url: "https://discord.gg/harvesta"
    }
  }
  // Add more announcements here
] 