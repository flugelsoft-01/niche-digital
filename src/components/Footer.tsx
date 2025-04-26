'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital Handbook Business</h3>
            <p className="text-gray-400">
              Your guide to creating profitable digital handbooks with low competition and high demand.
            </p>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                <strong>Copyright © Flugelsoft Lab</strong>
              </p>
              <p className="text-gray-400 text-sm">
                <strong>Author: Kalyanjit Hatibaruah</strong>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
                  Niche Categories
                </Link>
              </li>
              <li>
                <Link href="/audience" className="text-gray-400 hover:text-white transition-colors">
                  Audience Targeting
                </Link>
              </li>
              <li>
                <Link href="/monetization" className="text-gray-400 hover:text-white transition-colors">
                  Monetization Strategies
                </Link>
              </li>
              <li>
                <Link href="/implementation" className="text-gray-400 hover:text-white transition-colors">
                  Implementation Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  PDF Creation Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Marketing Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Website Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Payment Processors
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Digital Handbook Business Guide. All rights reserved.
            <br />
            <span className="font-medium">Copyright © Flugelsoft Lab | Author: Kalyanjit Hatibaruah</span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
