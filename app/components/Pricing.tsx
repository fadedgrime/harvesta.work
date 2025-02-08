import { Check } from "lucide-react"
import { Button } from "./ui/button"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 team members", "10 projects", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited team members", "Unlimited projects", "Advanced analytics", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom features", "Dedicated account manager", "On-premise deployment", "24/7 phone support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-base font-normal text-gray-600">/month</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">{plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

