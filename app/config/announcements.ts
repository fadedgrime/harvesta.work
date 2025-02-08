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
    id: "staff-applications",
    message: "Staff applications are now open!",
    enabled: false,
    emoji: "🎉",
    link: {
      text: "Join our Discord server to apply",
      url: "https://discord.gg/harvesta"
    }
  }
  // Add more announcements here
] 