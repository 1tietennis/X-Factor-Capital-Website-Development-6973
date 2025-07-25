import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiShield, FiTrendingUp, FiPhone } = FiIcons;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="relative z-50 glass-effect border-b border-electric-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-neon-green rounded-lg flex items-center justify-center">
                <span className="text-black font-cyber font-bold text-xl">X</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black text-xs">👑</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-cyber font-bold">
                <span className="text-cyber-green">X</span> Factor Capital
              </h1>
              <p className="text-xs text-gray-400">Dominant Marketing Systems & Data Protection</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-electric-blue ${
                  location.pathname === item.path 
                    ? 'text-electric-blue neon-text' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover-glow"
            >
              <SafeIcon icon={FiPhone} className="inline mr-2" />
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-electric-blue transition-colors"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-electric-blue/20"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === item.path 
                    ? 'text-electric-blue' 
                    : 'text-gray-300 hover:text-electric-blue'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;