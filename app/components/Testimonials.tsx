const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. It's intuitive and powerful!",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
  },
  {
    quote: "The analytics feature alone has saved us countless hours of manual reporting.",
    author: "John Smith",
    company: "Data Driven Co.",
  },
  {
    quote: "Customer support is top-notch. They're always there when we need them.",
    author: "Emily Brown",
    company: "Startup Ventures",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

