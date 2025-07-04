
import React, { useState } from 'react';
import { Menu, X, Facebook, Youtube, Linkedin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'OUR PROPERTIES', path: '/properties' },
    { name: 'BUYERS', path: '/buyers' },
    { name: 'SELLERS', path: '/sellers' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PHILANTHROPY', path: '/philanthropy' },
    { name: 'CONTACT US', path: '/contact' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <span className="text-white font-light tracking-widest text-sm">
                THE PREMIUM GROUP
              </span>
              <span className="text-red-500 text-xs font-light">REAL ESTATE</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-xs font-light tracking-wider transition-colors duration-300 ${
                    location.pathname === item.path 
                      ? 'text-red-500' 
                      : 'text-white hover:text-red-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 transition-colors lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-light tracking-wider transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'text-red-500' 
                    : 'text-white hover:text-red-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Social Media Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4">
        {[Facebook, Youtube, Linkedin, Instagram].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
