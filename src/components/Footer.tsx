
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">OUR PROPERTIES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">ACTIVE LISTINGS</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">RECENT SALES</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">INTERACTIVE MAP</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">BUYERS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">BUY WITH US</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">NEIGHBORHOOD GUIDES</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">SEARCH MLS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">SELLERS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">LIST WITH US</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">CONCIERGE</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">MARKETING</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">OFFICES</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">LOS ANGELES</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">NEWPORT BEACH</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">SAN DIEGO</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">CABO SAN LUCAS</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">ABOUT US</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">THE PREMIUM GROUP</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">OUR AGENTS</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">JASON PREMIUM</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-sm tracking-wider mb-4">ADVANCED MLS SEARCH</h3>
            <p className="text-sm mb-4">DOWNLOAD OUR MOBILE HOME SEARCH APP</p>
            <div className="space-y-2">
              <div className="bg-black text-white px-3 py-2 text-xs">App Store</div>
              <div className="bg-black text-white px-3 py-2 text-xs">Google Play</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              Copyright© 2025. The Premium Group. All rights reserved. | Sitemap Real Estate Internet Marketing by Agent Image
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-xs">CUSTOM WEBSITE DESIGN BY</span>
              <span className="font-bold text-sm">AGENT IMAGE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
