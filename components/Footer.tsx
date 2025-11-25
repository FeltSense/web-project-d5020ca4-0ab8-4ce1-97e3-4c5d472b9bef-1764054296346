'use client';

import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const collections = [
    { name: 'Evening Wear', href: '#collections' },
    { name: 'Casual Elegance', href: '#collections' },
    { name: 'Accessories', href: '#collections' },
    { name: 'Seasonal', href: '#collections' }
  ];

  const policies = [
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Size Guide', href: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif text-white mb-2">
                Join Our Exclusive Circle
              </h3>
              <p className="text-gray-400">
                Subscribe for early access to new collections and exclusive offers
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 transition-colors"
              />
              <button className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-500 transition-all duration-300 hover:scale-105 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-white mb-4">
              Élégance Boutique
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Curating timeless elegance and sophisticated style since 2010. 
              Each piece is carefully selected to bring Parisian chic to your wardrobe.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <MapPin className="w-5 h-5 text-rose-500" />
                <span className="text-sm group-hover:text-rose-400 transition-colors">
                  123 Avenue des Champs-Élysées, Paris
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-rose-500" />
                <a href="tel:+33123456789" className="text-sm hover:text-rose-400 transition-colors">
                  +33 (0)1 23 45 67 89
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-rose-500" />
                <a href="mailto:bonjour@elegance.com" className="text-sm hover:text-rose-400 transition-colors">
                  bonjour@elegance.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Collections</h3>
            <ul className="space-y-3">
              {collections.map((collection) => (
                <li key={collection.name}>
                  <a
                    href={collection.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {collection.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Customer Care</h3>
            <ul className="space-y-3">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Élégance Boutique. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-rose-600 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
