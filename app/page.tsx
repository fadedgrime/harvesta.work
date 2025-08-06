import ClientPage from "./ClientPage"

export const metadata = {
  title: "Harvesta | Premier Virtual Shopping on Roblox",
  description:
    "Experience the future of virtual shopping with Harvesta on Roblox. Quality products, exceptional service, and a thriving community of 700+ members.",
  keywords: "Roblox, virtual shopping, grocery store, online community, gaming, virtual commerce",
  openGraph: {
    title: "Harvesta | Premier Virtual Shopping on Roblox",
    description:
      "Experience the future of virtual shopping with Harvesta on Roblox. Quality products, exceptional service, and a thriving community.",
    url: "https://harvesta.work",
    siteName: "Harvesta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harvesta | Premier Virtual Shopping on Roblox",
    description: "Experience the future of virtual shopping with Harvesta on Roblox.",
  },
}

export default function Home() {
  return <ClientPage />
}
