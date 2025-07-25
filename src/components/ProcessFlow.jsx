import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiClipboard, FiSettings, FiRocket, FiTrendingUp } = FiIcons;

const ProcessFlow = () => {
  const steps = [
    {
      number: 1,
      icon: FiPhone,
      title: "Strategy Call",
      description: "15-minute consultation to understand your business goals and current challenges",
      duration: "15 min",
      color: "from-electric-blue to-cyan-500"
    },
    {
      number: 2,
      icon: FiClipboard,
      title: "Custom Plan",
      description: "We create a tailored cybersecurity and marketing blueprint specific to your industry",
      duration: "24 hours",
      color: "from-cyber-green to-green-500"
    },
    {
      number: 3,
      icon: FiSettings,
      title: "Rapid Setup",
      description: "Our team deploys your systems with our guaranteed 72-hour implementation process",
      duration: "72 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 4,
      icon: FiRocket,
      title: "Go Live",
      description: "Systems activated, monitoring begins, and your marketing funnels start capturing leads",
      duration: "Immediate",
      color: "from-orange-500 to-red-500"
    },
    {
      number: 5,
      icon: FiTrendingUp,
      title: "Scale & Optimize",
      description: "Continuous monitoring, optimization, and scaling based on performance data",
      duration: "Ongoing",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
            <span className="text-electric-blue neon-text">How We Get</span>
            <br />
            <span className="text-white">You Started in</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
              Five Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial consultation to full deployment, here's exactly what happens 
            when you join the X Factor Capital ecosystem
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-cyber-green to-electric-blue transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-effect rounded-2xl p-6 text-center hover-glow relative z-10">
                  {/* Step Number */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30`}
                    />
                  </div>

                  {/* Icon */}
                  <SafeIcon 
                    icon={step.icon} 
                    className="text-3xl text-electric-blue mx-auto mb-4" 
                  />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>

                  {/* Duration Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${step.color} text-white`}>
                    {step.duration}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 text-electric-blue"
                    >
                      ➤
                    </motion.div>
                  </div>
                )}

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 text-electric-blue transform rotate-90"
                    >
                      ➤
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* What Happens After Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="text-electric-blue neon-text">What to Expect</span>
              <span className="text-white"> After You Sign Up</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyber-green rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Immediate Confirmation</h4>
                    <p className="text-gray-300 text-sm">Instant email confirmation with your dedicated strategist contact info</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Welcome Call Scheduled</h4>
                    <p className="text-gray-300 text-sm">Calendar link sent within 2 hours to book your strategy session</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Account Setup Begins</h4>
                    <p className="text-gray-300 text-sm">Technical team starts building your custom infrastructure</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Dashboard Access</h4>
                    <p className="text-gray-300 text-sm">Login credentials provided to monitor your progress in real-time</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-black font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">72-Hour Deployment</h4>
                    <p className="text-gray-300 text-sm">All systems live and generating results within our guaranteed timeframe</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Ongoing Support</h4>
                    <p className="text-gray-300 text-sm">24/7 monitoring, monthly optimization calls, and priority support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-12 py-4 rounded-xl text-xl font-bold hover-glow"
          >
            🚀 Start Your Transformation Now
          </motion.button>
          <p className="text-gray-400 mt-4">
            Join 500+ entrepreneurs who've already transformed their digital presence
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessFlow;