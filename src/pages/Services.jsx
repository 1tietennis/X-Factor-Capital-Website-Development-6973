import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiTrendingUp, FiInstagram, FiCheck, FiZap, FiEye, FiLock, FiTarget } = FiIcons;

const Services = () => {
  const cyberServices = [
    {
      icon: FiShield,
      title: 'Threat Detection & Prevention',
      description: 'Advanced AI-powered threat detection with real-time monitoring and automated response systems.',
      features: ['24/7 Network Monitoring', 'Malware Protection', 'Intrusion Detection', 'Automated Responses']
    },
    {
      icon: FiLock,
      title: 'Data Protection & Encryption',
      description: 'Military-grade encryption and secure data storage solutions to protect your business assets.',
      features: ['256-bit Encryption', 'Secure Backups', 'Access Controls', 'Compliance Management']
    },
    {
      icon: FiEye,
      title: 'Security Audits & Assessment',
      description: 'Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Risk Assessment', 'Compliance Audits']
    }
  ];

  const marketingServices = [
    {
      icon: FiTarget,
      title: 'Lead Generation Systems',
      description: 'Automated lead generation funnels that attract and convert qualified prospects 24/7.',
      features: ['Landing Page Optimization', 'Email Automation', 'Lead Scoring', 'CRM Integration']
    },
    {
      icon: FiTrendingUp,
      title: 'Marketing Automation',
      description: 'Sophisticated automation workflows that nurture leads and drive conversions.',
      features: ['Drip Campaigns', 'Behavioral Triggers', 'A/B Testing', 'Performance Analytics']
    },
    {
      icon: FiInstagram,
      title: 'Social Media Management',
      description: 'Professional social media management that builds brand authority and engages your audience.',
      features: ['Content Creation', 'Community Management', 'Influencer Outreach', 'Social Analytics']
    }
  ];

  const ServiceCard = ({ service, category }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-effect rounded-2xl p-8 hover-glow"
    >
      <SafeIcon 
        icon={service.icon} 
        className={`text-5xl mb-6 ${
          category === 'cyber' ? 'text-cyber-green' : 'text-electric-blue'
        }`} 
      />
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <SafeIcon icon={FiCheck} className="text-cyber-green mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="lightning-bg"></div>
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-cyber font-bold mb-6">
              <span className="text-electric-blue neon-text">Elite Systems</span>
              <br />
              <span className="text-white">For Digital</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
                Domination
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive cybersecurity and digital marketing solutions designed for 
              entrepreneurs who refuse to compromise on performance or security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cybersecurity Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <SafeIcon icon={FiShield} className="inline mr-4 text-cyber-green" />
              <span className="text-cyber-green neon-text">Cybersecurity</span>
              <br />
              <span className="text-white">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with enterprise-grade security solutions that scale with your growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cyberServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} category="cyber" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-6">
              <SafeIcon icon={FiTrendingUp} className="inline mr-4 text-electric-blue" />
              <span className="text-electric-blue neon-text">Marketing</span>
              <br />
              <span className="text-white">Systems</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automated marketing systems that generate leads and drive revenue while you sleep.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} category="marketing" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-cyber font-bold mb-8">
              <span className="text-electric-blue neon-text">Why Integration</span>
              <br />
              <span className="text-white">Is Your</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
                Competitive Edge
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyber-green to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiShield} className="text-3xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Unified Protection</h3>
                <p className="text-gray-300">
                  Seamless integration between security and marketing ensures your growth doesn't compromise your safety.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-electric-blue to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiZap} className="text-3xl text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Accelerated Growth</h3>
                <p className="text-gray-300">
                  Secure systems enable faster scaling without the fear of security breaches slowing you down.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiTarget} className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cost Efficiency</h3>
                <p className="text-gray-300">
                  One integrated solution costs less than multiple vendors while delivering superior results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-cyber font-bold text-white mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build your digital fortress and revenue engine today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-12 py-4 rounded-xl text-xl font-bold hover-glow"
            >
              <SafeIcon icon={FiZap} className="inline mr-3 text-2xl" />
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;