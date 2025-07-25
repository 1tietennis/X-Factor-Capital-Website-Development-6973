import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiShield, FiTrendingUp, FiCheck, FiStar } = FiIcons;

const BundleOffer = () => {
  const bundleFeatures = [
    'CyberShield Pro + Client Magnet Elite',
    '72-hour setup guarantee',
    'Dedicated Strategist assigned',
    'Custom Funnel development',
    '90-Day ROI Guarantee',
    'Priority 24/7 support',
    'Monthly strategy calls',
    'Performance dashboard access'
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            background: [
              'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-electric-blue relative overflow-hidden"
        >
          {/* Fuse Animation */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          />

          <div className="text-center mb-8">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-6xl mb-4"
            >
              💣
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
              <span className="text-yellow-400">💥</span>
              <span className="text-electric-blue neon-text"> Digital Fortress</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
                Growth Pack
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-6">
              The ultimate combination for total digital domination
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            {/* Pricing */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="text-5xl font-cyber font-bold text-white mb-2">
                  $7,500 <span className="text-xl text-gray-400">Down</span>
                </div>
                <div className="text-3xl font-bold text-electric-blue">
                  + $1,295<span className="text-lg text-gray-400">/month</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Save $2,000+ vs. individual plans
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-8 py-4 rounded-xl text-xl font-bold hover-glow mb-6"
              >
                <SafeIcon icon={FiZap} className="inline mr-3 text-2xl" />
                💣 Tap to Launch – Lock In Your Digital Fortress Now
              </motion.button>

              <CountdownTimer title="⏰ Bundle Expires In" resetWeekly={false} />
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-electric-blue mb-6 flex items-center">
                <SafeIcon icon={FiStar} className="mr-3 text-yellow-400" />
                What's Included:
              </h3>
              {bundleFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <SafeIcon icon={FiCheck} className="text-cyber-green mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
            <div className="text-center">
              <SafeIcon icon={FiShield} className="text-3xl text-cyber-green mx-auto mb-2" />
              <div className="font-semibold text-white">72-Hour Setup</div>
              <div className="text-sm text-gray-400">Lightning fast deployment</div>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiTrendingUp} className="text-3xl text-electric-blue mx-auto mb-2" />
              <div className="font-semibold text-white">90-Day ROI</div>
              <div className="text-sm text-gray-400">Guaranteed returns</div>
            </div>
            <div className="text-center">
              <span className="text-3xl block mb-2">🔒</span>
              <div className="font-semibold text-white">No Performance</div>
              <div className="text-sm text-gray-400">No pay guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BundleOffer;