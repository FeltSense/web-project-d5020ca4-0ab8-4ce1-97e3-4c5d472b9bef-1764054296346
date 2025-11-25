'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [activeCollection, setActiveCollection] = useState(0)

  const collections = [
    {
      id: 0,
      season: 'Spring',
      year: '2024',
      title: 'Jardin de Paris',
      description: 'Delicate florals meet timeless elegance',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80',
      accent: 'from-rose-400 to-pink-300'
    },
    {
      id: 1,
      season: 'Summer',
      year: '2024',
      title: 'Riviera Luxe',
      description: 'Effortless sophistication for warm days',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
      accent: 'from-amber-400 to-rose-300'
    },
    {
      id: 2,
      season: 'Autumn',
      year: '2024',
      title: 'Couture Noir',
      description: 'Bold statements in refined silhouettes',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1920&q=80',
      accent: 'from-rose-500 to-rose-400'
    }
  ]

  const active = collections[activeCollection]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-rose-50 to-white overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Collection Label */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${active.accent} animate-pulse`}></div>
              <span className="text-sm font-medium text-gray-600 tracking-wider uppercase">
                New Collection
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                <span className="block text-gray-900">{active.season}</span>
                <span className={`block bg-gradient-to-r ${active.accent} bg-clip-text text-transparent`}>
                  {active.year}
                </span>
              </h1>
              <h2 className="text-3xl sm:text-4xl font-light text-gray-800 italic">
                {active.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-md">
                {active.description}
              </p>
            </div>

            {/* Collection Selector */}
            <div className="flex items-center space-x-4">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setActiveCollection(collection.id)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCollection === collection.id
                      ? 'bg-rose-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  {collection.season}
                  {activeCollection === collection.id && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-400 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-rose-600 text-white rounded-full font-semibold hover:bg-rose-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-md border border-gray-200">
                Book Consultation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-rose-200">
              <div>
                <div className="text-3xl font-bold text-rose-600">150+</div>
                <div className="text-sm text-gray-600 mt-1">Exclusive Pieces</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rose-600">24h</div>
                <div className="text-sm text-gray-600 mt-1">Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Main Image */}
            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
              
              {/* Image Overlay Label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{active.title}</h3>
                      <p className="text-gray-600 mt-1">Limited Edition</p>
                    </div>
                    <button className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center hover:bg-rose-700 hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-6 shadow-xl border-4 border-rose-50 z-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">NEW</div>
                <div className="text-xs text-gray-600 mt-1">Season</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-rose-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
