'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 font-bold text-xl">
              Digital Handbook Business
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:bg-opacity-75">
                Home
              </Link>
              <Link href="/categories" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:bg-opacity-75">
                Categories
              </Link>
              <Link href="/audience" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:bg-opacity-75">
                Audience Targeting
              </Link>
              <Link href="/monetization" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:bg-opacity-75">
                Monetization
              </Link>
              <Link href="/implementation" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 hover:bg-opacity-75">
                Implementation
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 hover:bg-opacity-75 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:bg-opacity-75"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:bg-opacity-75"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link 
              href="/audience" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:bg-opacity-75"
              onClick={toggleMenu}
            >
              Audience Targeting
            </Link>
            <Link 
              href="/monetization" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:bg-opacity-75"
              onClick={toggleMenu}
            >
              Monetization
            </Link>
            <Link 
              href="/implementation" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 hover:bg-opacity-75"
              onClick={toggleMenu}
            >
              Implementation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
