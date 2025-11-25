'use client';

import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-rose-600" />
            <span className="text-sm font-medium text-rose-600">Limited Time Pre-Order</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Launch Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Be among the first to experience refined elegance. Lock in your special pre-order rate today.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative group">
            {/* Decorative border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-rose-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Main card */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-rose-100 overflow-hidden">
              {/* Premium badge */}
              <div className="bg-gradient-to-r from-rose-600 to-rose-500 py-3 px-6 text-center">
                <p className="text-white font-semibold text-sm tracking-wide uppercase">
                  Founder's Edition
                </p>
              </div>

              <div className="p-8 md:p-10">
                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl text-gray-400 line-through">$49</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-600 text-sm font-semibold rounded-full">
                      Save $20
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold text-gray-900">$29</span>
                    <span className="text-xl text-gray-500">USD</span>
                  </div>
                  <p className="text-gray-600 mt-2">One-time payment • Lifetime access</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {[
                    'Lifetime premium access',
                    'Priority customer support',
                    'Exclusive founder updates',
                    'Early access to new features',
                    'Behind-the-scenes content',
                    'Limited edition digital badge'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Pre-Order Now - $29
                </button>

                {/* Trust indicators */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span>Money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Pre-order price valid for the first 100 customers only. Price increases to $49 after launch.
          </p>
        </div>
      </div>
    </section>
  );
}
