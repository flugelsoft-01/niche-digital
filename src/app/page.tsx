'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, DollarSign, Users, BarChart4, Lightbulb } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Niche Digital Handbook Business Ideas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Low-Competition, High-Demand PDF Guides for USA, India, and Europe Markets
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/categories" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Explore Niches <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/implementation" 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Implementation Guide <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Create Profitable Digital Handbooks with Minimal Effort
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover evergreen topics with high demand but low creation complexity. 
              Our comprehensive guide helps you build a sustainable passive income stream 
              through a simple 1-page website with PDF delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Low-Competition Niches</h3>
              <p className="text-gray-600">
                Carefully researched business ideas across 8 categories with specific audience targeting 
                and content examples.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Monetization Strategies</h3>
              <p className="text-gray-600">
                Proven pricing models and strategies tailored for USA, India, and European markets to 
                maximize your revenue.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation Guide</h3>
              <p className="text-gray-600">
                Step-by-step execution tips covering tech stack, marketing, customer experience, and scaling 
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Niche Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our carefully researched categories to find the perfect 
              niche for your digital handbook business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Health & Wellness', icon: '🧘‍♀️', color: 'bg-green-100 text-green-800' },
              { name: 'Personal Finance', icon: '💰', color: 'bg-yellow-100 text-yellow-800' },
              { name: 'Career Development', icon: '💼', color: 'bg-blue-100 text-blue-800' },
              { name: 'Digital Skills', icon: '💻', color: 'bg-purple-100 text-purple-800' },
              { name: 'Lifestyle & Relationships', icon: '❤️', color: 'bg-pink-100 text-pink-800' },
              { name: 'Creative Pursuits', icon: '🎨', color: 'bg-orange-100 text-orange-800' },
              { name: 'Legal & Business', icon: '⚖️', color: 'bg-indigo-100 text-indigo-800' },
              { name: 'Specialized Knowledge', icon: '🔍', color: 'bg-red-100 text-red-800' },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className={`p-4 ${category.color}`}>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
                <div className="p-4">
                  <Link 
                    href={`/categories#${category.name.toLowerCase().replace(/[&\s]+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    View Niches <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Digital Handbook Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our comprehensive guide and launch your profitable digital product business today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/categories" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Explore Niches <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/monetization" 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 px-6 py-3 rounded-md font-medium flex items-center justify-center"
            >
              Monetization Strategies <DollarSign className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright Banner */}
      <div className="bg-gray-900 text-white py-3 text-center text-sm">
        <p>Copyright © {new Date().getFullYear()} Flugelsoft Lab | Author: Kalyanjit Hatibaruah</p>
      </div>
    </div>
  )
}
