'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Laurent",
      role: "Fashion Editor",
      avatar: "https://i.pravatar.cc/150?img=47",
      quote: "An exquisite collection that perfectly captures the essence of Parisian elegance. Every piece tells a story of craftsmanship and timeless beauty."
    },
    {
      id: 2,
      name: "Isabella Chen",
      role: "Style Influencer",
      avatar: "https://i.pravatar.cc/150?img=32",
      quote: "The attention to detail is remarkable. These pieces have become the cornerstone of my wardrobe—effortlessly chic and undeniably sophisticated."
    },
    {
      id: 3,
      name: "Amélie Dubois",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/150?img=38",
      quote: "A rare find in today's fashion landscape. The quality speaks for itself, and the aesthetic is pure poetry. Absolutely transformative."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-rose-600 text-sm font-semibold tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="h-[1px] w-16 bg-rose-600 mx-auto mt-3"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Beloved by Connoisseurs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from those who appreciate the art of refined elegance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-rose-200 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 italic leading-relaxed mb-8 mt-4">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-rose-100 group-hover:ring-rose-300 transition-all duration-300">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-rose-600">
            <div className="w-12 h-[1px] bg-rose-300"></div>
            <span className="text-sm tracking-widest">★</span>
            <div className="w-12 h-[1px] bg-rose-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
