import { ShoppingCart, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: <ShoppingCart className="h-8 w-8 text-[#22c55e]" />,
    title: "Virtual Shopping",
    description: "Experience a realistic shopping environment with a wide selection of virtual groceries.",
  },
  {
    icon: <Users className="h-8 w-8 text-[#22c55e]" />,
    title: "Meet Friends",
    description: "Shop with friends and make new ones in our social shopping environment.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-[#22c55e]" />,
    title: "Special Events",
    description: "Join our regular events and seasonal sales for exclusive deals and fun activities.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience Harvesta</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-[#22c55e] transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

