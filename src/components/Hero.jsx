import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiTrendingUp } = FiIcons;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lightning Background */}
      <div className="lightning-bg"></div>
      <div className="cyber-grid absolute inset-0 opacity-20"></div>
      
      {/* Video Background Simulation */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-dark-bg opacity-90"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 w-4 h-4 bg-electric-blue rounded-full blur-sm"
      ></motion.div>
      
      <motion.div
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-6 h-6 bg-cyber-green rounded-full blur-sm"
      ></motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6">
            <span className="neon-text text-electric-blue">Claim Your</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
              Cyber-Defense &
            </span>
            <br />
            <span className="text-white">Revenue Engine</span>
            <br />
            <span className="text-electric-blue neon-text">Today</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Elite cybersecurity & digital marketing systems for time-strapped entrepreneurs 
            who demand <span className="text-cyber-green font-semibold">elite performance</span> without 
            bloated agency pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <CountdownTimer title="🔥 Offer Ends In" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-6"
        >
          <Link to="/get-started">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-12 py-4 rounded-xl text-xl font-bold hover-glow transition-all duration-300"
            >
              <SafeIcon icon={FiZap} className="inline mr-3 text-2xl" />
              💥 Start Now – Offer Ends In...
            </motion.button>
          </Link>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <div className="flex items-center">
              <SafeIcon icon={FiShield} className="mr-2 text-cyber-green" />
              72-Hour Setup Guarantee
            </div>
            <div className="flex items-center">
              <SafeIcon icon={FiTrendingUp} className="mr-2 text-electric-blue" />
              90-Day ROI Promise
            </div>
            <div className="flex items-center">
              <span className="mr-2">🔒</span>
              No Performance, No Pay
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;