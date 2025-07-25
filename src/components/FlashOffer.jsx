import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiMapPin, FiClock } = FiIcons;

const FlashOffer = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [userLocation, setUserLocation] = useState('');
  const [isExclusive, setIsExclusive] = useState(false);

  useEffect(() => {
    // Simulate visitor count
    const baseCount = 1247;
    const randomAddition = Math.floor(Math.random() * 50);
    setVisitorCount(baseCount + randomAddition);

    // Simulate location detection
    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    setUserLocation(randomLocation);

    // Determine exclusivity based on "IP" (simulated)
    const isUserExclusive = Math.random() > 0.7; // 30% chance of exclusive offer
    setIsExclusive(isUserExclusive);

    // Update visitor count periodically
    const interval = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const exclusiveOffer = {
    title: 'EXCLUSIVE: Location-Based Flash Offer',
    discount: '40% OFF',
    description: 'Limited to visitors from your region',
    originalPrice: '$7,500',
    flashPrice: '$4,500',
    savings: '$3,000'
  };

  const standardOffer = {
    title: 'LIMITED TIME: Flash Offer',
    discount: '25% OFF',
    description: 'Available for the next 24 hours only',
    originalPrice: '$7,500',
    flashPrice: '$5,625',
    savings: '$1,875'
  };

  const currentOffer = isExclusive ? exclusiveOffer : standardOffer;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 100%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 0%, rgba(255, 193, 7, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-yellow-400 relative overflow-hidden"
        >
          {/* Flash Effect */}
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
          />

          {/* Live Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center bg-red-500/20 text-red-400 px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
              <span className="font-semibold">{visitorCount} visitors online</span>
            </motion.div>
            
            <div className="flex items-center bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
              <SafeIcon icon={FiMapPin} className="mr-2" />
              <span>Detected: {userLocation}</span>
            </div>
            
            <div className="flex items-center bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full">
              <SafeIcon icon={FiClock} className="mr-2" />
              <span>Offer resets in 24h</span>
            </div>
          </div>

          <div className="text-center mb-8">
            {isExclusive && (
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4"
              >
                🎯 EXCLUSIVE FOR YOUR LOCATION
              </motion.div>
            )}

            <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              <motion.span
                animate={{ color: ['#FFD700', '#FF6B35', '#FFD700'] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl"
              >
                ⚡
              </motion.span>
              <br />
              <span className="text-yellow-400 neon-text">{currentOffer.discount}</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Flash Offer
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6">
              {currentOffer.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            {/* Pricing */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="text-2xl text-gray-400 line-through mb-2">
                  Was: {currentOffer.originalPrice}
                </div>
                <div className="text-6xl font-cyber font-bold text-yellow-400 mb-2">
                  {currentOffer.flashPrice}
                </div>
                <div className="text-lg text-green-400 font-semibold">
                  You Save: {currentOffer.savings}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-4 rounded-xl text-xl font-bold hover-glow mb-6"
              >
                <SafeIcon icon={FiZap} className="inline mr-3 text-2xl" />
                ⚡ CLAIM FLASH OFFER NOW
              </motion.button>

              <div className="text-sm text-gray-400">
                * Offer valid for {userLocation} visitors only
                <br />
                * Limited quantity available
                <br />
                * Cannot be combined with other offers
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center">
              <CountdownTimer title="⏰ Flash Offer Expires In" resetWeekly={false} />
              
              <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-red-400 font-semibold mb-2">⚠️ URGENT NOTICE</div>
                <div className="text-sm text-gray-300">
                  This exclusive pricing is only available to the first 50 customers 
                  from your location. {Math.floor(Math.random() * 15) + 5} spots remaining.
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-white">Secure Payment</div>
              <div className="text-sm text-gray-400">256-bit SSL encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-white">Instant Access</div>
              <div className="text-sm text-gray-400">Setup begins immediately</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <div className="font-semibold text-white">Money-Back Guarantee</div>
              <div className="text-sm text-gray-400">90-day full refund</div>
            </div>
          </div>

          {/* Scarcity Indicator */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center bg-yellow-400/20 text-yellow-400 px-6 py-3 rounded-full">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
              <span className="font-semibold">
                {Math.floor(Math.random() * 12) + 3} people are viewing this offer right now
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlashOffer;