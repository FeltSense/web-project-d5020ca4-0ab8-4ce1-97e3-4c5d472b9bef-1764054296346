'use client';

import { Sparkles, Grid3x3, BookOpen, User } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Seasonal Collections',
    description: 'Discover our curated seasonal showcase featuring the latest trends from Paris, Milan, and beyond.',
    features: ['Hero Lookbooks', 'Trend Reports', 'New Arrivals']
  },
  {
    icon: Grid3x3,
    title: 'Smart Filtering',
    description: 'Navigate effortlessly through our categories with advanced filtering for women\'s wear, accessories, shoes, and bags.',
    features: ['Quick Search', 'Style Filters', 'Price Ranges']
  },
  {
    icon: BookOpen,
    title: 'Designer Gallery',
    description: 'Explore exclusive designer collections and immersive lookbook galleries curated by fashion experts.',
    features: ['Featured Designers', 'Editorial Shoots', 'Style Stories']
  },
  {
    icon: User,
    title: 'Personal Styling',
    description: 'Access comprehensive size guides, expert styling tips, and create your personalized style profile.',
    features: ['Size Assistant', 'Style Quiz', 'Saved Favorites']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-rose-600 font-semibold tracking-wider uppercase text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Elevated Shopping Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every detail crafted to bring you closer to the fashion you love
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-rose-200"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center group-hover:bg-rose-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-rose-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Element */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors cursor-pointer group">
            <span className="text-sm font-medium">Explore all features</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
