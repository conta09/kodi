import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Building2,
  Users,
  ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const districts = [
    { name: 'Kicukiro', properties: 45, color: 'bg-blue-100' },
    { name: 'Gasabo', properties: 78, color: 'bg-green-100' },
    { name: 'Nyarugenge', properties: 32, color: 'bg-purple-100' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
    { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-50"></div>
      <div className="absolute -top-20 -left-20 w-48 h-48 bg-gradient-to-tr from-gray-50 to-transparent rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand & Tagline */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src="/kodi.png"
                  alt="Kodi Logo"
                  width={80}
                  height={80}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {/* Logo image replaces text */}
                </h2>
                <p className="text-gray-600 font-medium">Redefining Real Estate</p>
              </div>
            </div>
            <p className="text-gray-500 max-w-md text-lg">
              A modern platform connecting Rwanda's property market with innovation and simplicity.
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Join as an Agent</h3>
                <p className="text-gray-600">Partner with Rwanda's fastest growing real estate platform</p>
              </div>
            </div>
            <a 
              href="mailto:partners@kodi.rw"
              className="inline-flex items-center space-x-2 group px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Become a Partner</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Districts */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-700" />
              Featured Districts
            </h3>
            <div className="space-y-3">
              {districts.map((district, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${district.color} rounded-lg flex items-center justify-center`}>
                      <span className="text-gray-700 font-semibold">{district.name.charAt(0)}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{district.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                    {district.properties}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">For inquiries</p>
                    <a 
                      href="mailto:info@kodi.rw" 
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                    >
                      info@kodi.rw
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us</p>
                    <a 
                      href="tel:+250788123456" 
                      className="text-gray-900 font-medium hover:text-green-600 transition-colors"
                    >
                      +250 788 123 456
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">For agents</p>
                    <a 
                      href="mailto:agents@kodi.rw" 
                      className="text-gray-900 font-medium hover:text-purple-600 transition-colors"
                    >
                      agents@kodi.rw
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links */}
          <div>
            <h3 className="text-gray-900 font-bold mb-6">Connect With Us</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center space-x-2 p-3 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all duration-300"
                >
                  {social.icon}
                  <span className="text-gray-700 text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center space-x-4">
                <Image
                  src="/kodi.png"
                  alt="Kodi Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <p className="text-gray-500">
                  © {new Date().getFullYear()} Kodi Real Estate. All rights reserved.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Kigali, Rwanda</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">Live Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;