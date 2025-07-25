import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiTrendingUp, FiInstagram, FiCheck, FiZap } = FiIcons;

const PricingTiers = () => {
  const cyberTiers = [
    {
      name: 'CyberShield Kickoff',
      price: '$1,250',
      period: 'One-Time',
      icon: FiShield,
      features: ['Basic Threat Detection', 'Email Security', 'Password Management', '24/7 Monitoring'],
      popular: false
    },
    {
      name: 'CyberShield Core',
      price: '$349',
      period: '/month',
      icon: FiShield,
      features: ['Advanced Threat Protection', 'Firewall Management', 'Data Backup', 'Compliance Reporting'],
      popular: false
    },
    {
      name: 'CyberShield Pro',
      price: '$1,750 Down + $495',
      period: '/month',
      icon: FiShield,
      features: ['Enterprise Security', 'Incident Response', 'Security Training', 'Custom Solutions'],
      popular: true
    },
    {
      name: 'CyberShield Enterprise',
      price: '$3,500 Down + $695',
      period: '/month',
      icon: FiShield,
      features: ['Full Security Suite', 'Dedicated Security Team', 'Custom Integrations', 'Priority Support'],
      popular: false
    }
  ];

  const marketingTiers = [
    {
      name: 'Marketing Momentum',
      price: '$1,250 Down + $295',
      period: '/month',
      icon: FiTrendingUp,
      features: ['Lead Generation Setup', 'Email Marketing', 'Basic Analytics', 'Landing Pages'],
      popular: false
    },
    {
      name: 'Marketing Amplifier',
      price: '$2,500 Down + $445',
      period: '/month',
      icon: FiTrendingUp,
      features: ['Advanced Funnels', 'CRM Integration', 'A/B Testing', 'Conversion Optimization'],
      popular: false
    },
    {
      name: 'Client Magnet Elite',
      price: '$3,750 Down + $645',
      period: '/month',
      icon: FiTrendingUp,
      features: ['Full Marketing Suite', 'Custom Funnels', 'Advanced Analytics', 'Dedicated Strategist'],
      popular: true
    },
    {
      name: 'Conversion Engine Pro',
      price: '$5,250 Down + $995',
      period: '/month',
      icon: FiTrendingUp,
      features: ['Enterprise Marketing', 'Multi-Channel Campaigns', 'AI Optimization', 'White-Label Solutions'],
      popular: false
    }
  ];

  const socialPlans = [
    {
      name: 'Social Storm',
      price: '$495',
      period: '/month',
      type: 'Add-On',
      icon: FiInstagram,
      features: ['Content Creation', 'Social Media Management', 'Engagement Tracking', 'Brand Monitoring'],
      popular: false
    },
    {
      name: 'InstaMagnet',
      price: '$1,750 Setup + $595',
      period: '/month',
      type: 'Standalone',
      icon: FiInstagram,
      features: ['Premium Content', 'Influencer Outreach', 'Advanced Analytics', 'Growth Strategies'],
      popular: true
    }
  ];

  const TierCard = ({ tier, category }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative glass-effect rounded-2xl p-8 ${
        tier.popular 
          ? 'border-2 border-electric-blue ring-2 ring-electric-blue/20' 
          : 'border border-gray-700'
      }`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <SafeIcon 
          icon={tier.icon} 
          className={`text-4xl mx-auto mb-4 ${
            category === 'cyber' ? 'text-cyber-green' : 
            category === 'marketing' ? 'text-electric-blue' : 
            'text-purple-400'
          }`} 
        />
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        {tier.type && (
          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
            {tier.type}
          </span>
        )}
      </div>

      <div className="text-center mb-8">
        <div className="text-3xl font-cyber font-bold text-white">
          {tier.price}
        </div>
        <div className="text-gray-400">{tier.period}</div>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <SafeIcon icon={FiCheck} className="text-cyber-green mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
          tier.popular
            ? 'bg-gradient-to-r from-electric-blue to-cyan-500 text-black hover-glow'
            : 'bg-gray-800 text-white border border-gray-600 hover:border-electric-blue'
        }`}
      >
        {category === 'cyber' ? '🛡️ Get Secured' : 
         category === 'marketing' ? '📈 Start Growing' : 
         '📲 Start With InstaMagnet'}
      </motion.button>
    </motion.div>
  );

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
            <span className="text-electric-blue neon-text">Elite Systems</span>
            <br />
            <span className="text-white">Built For</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
              Domination
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path to digital supremacy. Scale from startup to enterprise 
            with our battle-tested systems.
          </p>
        </motion.div>

        {/* Cybersecurity Tiers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <SafeIcon icon={FiShield} className="inline mr-3 text-cyber-green" />
            🛡️ CYBERSECURITY TIERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cyberTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TierCard tier={tier} category="cyber" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketing Tiers */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <SafeIcon icon={FiTrendingUp} className="inline mr-3 text-electric-blue" />
            📈 MARKETING TIERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TierCard tier={tier} category="marketing" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Plans */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <SafeIcon icon={FiInstagram} className="inline mr-3 text-purple-400" />
            📲 SOCIAL PLANS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialPlans.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TierCard tier={tier} category="social" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
        >
          <button className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover-glow">
            👉 Compare Plans
          </button>
          <button className="bg-gradient-to-r from-cyber-green to-green-500 text-black px-8 py-3 rounded-lg font-bold hover-glow">
            👉 Get Secured
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover-glow">
            👉 Start With InstaMagnet
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;