"use client"

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Propitious Properties</h3>
            <p className="text-sm">
              Welcome to Propitious Properties Pvt. Ltd., a RERA-registered real estate consultant firm, is dedicated to connecting people with thier dream properties since 2020. Our experience, integrity and commitment to transparancy make us a trusted partner in your pursuit of perfect spaces.
            </p>
            <p className="text-xs mt-2">
              MahaRERA No. A52100040012
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>4th Floor, Anubhuti Apartment</li>
              <li>Office no, 402, Lane 1, Bavdhan</li>
              <li>Pune, Maharashtra 411021</li>
              <li>Phone: +91 89564 66791</li>
              <li>Email: propitiousprop@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Propitious Properties Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}