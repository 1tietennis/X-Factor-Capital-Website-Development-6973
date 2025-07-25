import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiLinkedin, FiInstagram, FiYoutube, FiZap } = FiIcons;

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'CyberShield Protection',
    'Marketing Automation',
    'Lead Generation',
    'Social Media Management',
    'Content Creation',
    'Analytics & Reporting'
  ];

  const socialLinks = [
    { icon: FiFacebook, name: 'Facebook', url: '#' },
    { icon: FiLinkedin, name: 'LinkedIn', url: '#' },
    { icon: FiInstagram, name: 'Instagram', url: '#' },
    { icon: FiYoutube, name: 'YouTube', url: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-dark-bg to-black border-t border-electric-blue/20">
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-gradient-to-r from-electric-blue to-cyan-500 text-black py-4"
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SafeIcon icon={FiZap} className="text-2xl mr-3" />
            </motion.div>
            <div>
              <div className="font-bold text-lg">🔒 Lock In the Bundle – Save Before Timer Hits Zero</div>
              <div className="text-sm opacity-80">Limited time offer - Don't miss out!</div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-electric-blue px-6 py-2 rounded-lg font-bold hover:bg-gray-900 transition-colors"
          >
            Claim Now
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-neon-green rounded-lg flex items-center justify-center">
                  <span className="text-black font-cyber font-bold text-xl">X</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs">👑</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-cyber font-bold">
                  <span className="text-cyber-green">X</span> Factor Capital
                </h3>
                <p className="text-xs text-gray-400">Dominant Marketing Systems & Data Protection</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elite cybersecurity and digital marketing systems for time-strapped entrepreneurs 
              who demand premium performance without agency pricing.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gradient-to-br from-electric-blue/20 to-cyan-500/20 rounded-lg flex items-center justify-center text-electric-blue hover:bg-gradient-to-br hover:from-electric-blue hover:to-cyan-500 hover:text-black transition-all duration-300"
                >
                  <SafeIcon icon={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-electric-blue transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 hover:text-electric-blue transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiPhone} className="mr-3 text-electric-blue" />
                <a href="tel:1-301-409-5550" className="hover:text-electric-blue transition-colors">
                  1-301-409-5550
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <SafeIcon icon={FiMail} className="mr-3 text-electric-blue" />
                <a href="mailto:contact@xfactorcapital.info" className="hover:text-electric-blue transition-colors">
                  contact@xfactorcapital.info
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <SafeIcon icon={FiMapPin} className="mr-3 text-electric-blue mt-1" />
                <div>
                  Columbia, Maryland 21045
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198059.49240416192!2d-76.79495286718749!3d39.20729284374676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f5b3ba9c4db%3A0x5c1c1e72e2b7a8b8!2sColumbia%2C%20MD!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                      width="200"
                      height="150"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategy Call Form */}
            <div className="mt-8 p-4 glass-effect rounded-lg">
              <h5 className="font-semibold text-white mb-4">Request Strategy Call</h5>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-blue to-cyan-500 text-black py-2 rounded font-semibold hover-glow"
                >
                  Request Call
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 X Factor Capital. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-2">🔒</span>
            Secured by SSL encryption
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;