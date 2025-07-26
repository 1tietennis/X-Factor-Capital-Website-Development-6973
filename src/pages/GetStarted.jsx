import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuickStartForm from '../components/QuickStartForm';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiCheckCircle, FiShield, FiTrendingUp } = FiIcons;

const GetStarted = () => {
  const benefits = [
    {
      icon: FiClock,
      title: 'Fast Implementation',
      description: 'Systems deployed and operational within 72 hours guaranteed.',
      color: 'from-electric-blue to-cyan-500'
    },
    {
      icon: FiCheckCircle,
      title: 'Expert Consultation',
      description: 'One-on-one strategy session with a dedicated digital specialist.',
      color: 'from-cyber-green to-green-500'
    },
    {
      icon: FiShield,
      title: 'Elite Protection',
      description: 'Military-grade security protocols customized for your business.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Proven Results',
      description: '90-day ROI guarantee or your money back, no questions asked.',
      color: 'from-orange-500 to-red-500'
    }
  ];

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
              <span className="text-electric-blue neon-text">Begin Your</span>
              <br />
              <span className="text-white">Digital</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Take the first step toward unparalleled cybersecurity and 
              revenue growth with X Factor Capital's elite systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-cyber font-bold">
                <span className="text-white">Why</span>
                <span className="text-electric-blue neon-text"> Join Now</span>
              </h2>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-xl p-6 hover-glow"
                  >
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <SafeIcon icon={benefit.icon} className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 border border-electric-blue/30"
              >
                <div className="flex items-start">
                  <div className="text-4xl mr-4">💬</div>
                  <div>
                    <p className="text-gray-300 italic mb-4">
                      "X Factor Capital transformed our entire digital presence in less than a week. 
                      Our conversions increased by 215% while our security incidents dropped to zero."
                    </p>
                    <div className="font-semibold text-white">Michael R.</div>
                    <div className="text-sm text-gray-400">CEO, TechSolutions Inc.</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <QuickStartForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-bg/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-cyber font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What happens after I submit the form?",
                answer: "Within 24 hours, a dedicated specialist will contact you to schedule your strategy call. During this call, we'll discuss your specific needs and create a tailored implementation plan."
              },
              {
                question: "How quickly can you implement the systems?",
                answer: "Our standard implementation is completed within 72 hours after your strategy call. For more complex enterprise solutions, we typically complete setup within 5-7 business days."
              },
              {
                question: "Is there a minimum contract length?",
                answer: "No long-term contracts required. Our services operate on a month-to-month basis, though we do offer significant discounts for quarterly and annual commitments."
              },
              {
                question: "What if I'm not satisfied with the results?",
                answer: "We offer a 90-day ROI guarantee. If you don't see a measurable return on your investment within 90 days, we'll refund your setup fee and waive all monthly charges."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-electric-blue mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;