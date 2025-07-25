import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiMessageCircle, FiCalendar } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      info: '1-301-409-5550',
      description: 'Call us for immediate assistance',
      link: 'tel:1-301-409-5550'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'contact@xfactorcapital.info',
      description: 'Send us a detailed message',
      link: 'mailto:contact@xfactorcapital.info'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      info: 'Columbia, Maryland 21045',
      description: 'Our headquarters location',
      link: '#'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      info: 'Mon-Fri: 9AM-6PM EST',
      description: '24/7 emergency support available',
      link: '#'
    }
  ];

  const services = [
    'CyberShield Protection',
    'Marketing Automation',
    'Lead Generation',
    'Social Media Management',
    'Full Digital Fortress Package',
    'Custom Solution'
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
              <span className="text-electric-blue neon-text">Get In</span>
              <br />
              <span className="text-white">Touch With</span>
              <br />
              <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
                The Experts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Ready to transform your business? Let's discuss how our elite systems 
              can secure and scale your operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center hover-glow"
              >
                <SafeIcon 
                  icon={item.icon} 
                  className="text-4xl text-electric-blue mx-auto mb-4" 
                />
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.link !== '#' ? (
                  <a 
                    href={item.link} 
                    className="text-cyber-green font-semibold hover:text-electric-blue transition-colors"
                  >
                    {item.info}
                  </a>
                ) : (
                  <div className="text-cyber-green font-semibold">{item.info}</div>
                )}
                <p className="text-gray-400 text-sm mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              <h2 className="text-3xl font-cyber font-bold text-white mb-8">
                <SafeIcon icon={FiMessageCircle} className="inline mr-3 text-electric-blue" />
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-electric-blue to-cyan-500 text-black py-4 rounded-lg font-bold hover-glow transition-all duration-300"
                >
                  <SafeIcon icon={FiSend} className="inline mr-3" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  <SafeIcon icon={FiMapPin} className="inline mr-3 text-electric-blue" />
                  Our Location
                </h3>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198059.49240416192!2d-76.79495286718749!3d39.20729284374676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81f5b3ba9c4db%3A0x5c1c1e72e2b7a8b8!2sColumbia%2C%20MD!5e0!3m2!1sen!2sus!4v1641234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  <SafeIcon icon={FiCalendar} className="inline mr-3 text-electric-blue" />
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyber-green to-green-500 text-black py-3 rounded-lg font-semibold hover-glow"
                  >
                    📅 Schedule Strategy Call
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover-glow"
                  >
                    📊 Request Free Audit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover-glow"
                  >
                    🚨 Emergency Support
                  </motion.button>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-effect rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <div className="text-3xl font-cyber font-bold text-electric-blue mb-2">
                  &lt; 2 Hours
                </div>
                <p className="text-gray-300 text-sm">
                  Average response time during business hours
                </p>
                <div className="mt-4 text-cyber-green text-sm">
                  🟢 Currently online and ready to help
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
            <p className="text-xl text-gray-300">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly can you implement our systems?",
                answer: "Our standard implementation is guaranteed within 72 hours. For complex enterprise solutions, we typically complete setup within 5-7 business days."
              },
              {
                question: "Do you offer 24/7 support?",
                answer: "Yes, we provide 24/7 monitoring and emergency support for all our cybersecurity clients. Marketing support is available during business hours with emergency escalation options."
              },
              {
                question: "What makes your approach different from other agencies?",
                answer: "We're the only company that integrates elite cybersecurity with high-performance marketing systems. This unique combination ensures your growth is both rapid and secure."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We specialize in seamless integrations and can work with virtually any existing infrastructure while enhancing security and performance."
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

export default Contact;