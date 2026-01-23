"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Heart, 
  User, 
  Menu, 
  X,
  Home,
  DollarSign,
  Building2,
  ChevronDown
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { 
      label: 'Buy', 
      href: '/buy',
      icon: <Home className="w-4 h-4" />
    },
    { 
      label: 'Sell', 
      href: '/sell',
      icon: <DollarSign className="w-4 h-4" />
    },
    { 
      label: 'Commercial', 
      href: '/commercial',
      icon: <Building2 className="w-4 h-4" />
    }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative ">
                <Image
                  src="/kodi.png"
                  alt="Kodi Logo"
                  width={80}
                  height={80}
                  className="relative rounded-xl"
                />
              </div>
              
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium group transition-colors"
                >
                  <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
            

              {/* Favorites */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </div>
                <Heart className="w-5 h-5 group-hover:fill-red-500 group-hover:text-red-500 transition-all duration-300" />
              </button>

              {/* Desktop Profile Dropdown */}
              <div className="hidden md:block relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r bg-black  rounded-3xl flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-light">Login/Sign Up</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm text-gray-500">Welcome back</p>
                      <p className="font-medium text-gray-900">Sign in to your account</p>
                    </div>
                    <div className="py-1">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/register"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Create Account
                      </Link>
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link
                          href="/agent/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Agent Login
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 py-4">
              
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      {link.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Auth Links */}
              <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
                <Link
                  href="/favorites"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700 font-medium">Favorites</span>
                  </div>
                  <div className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </div>
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Sign In</span>
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full py-3 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;