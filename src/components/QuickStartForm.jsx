import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSend, FiShield, FiTrendingUp, FiCheck } = FiIcons;

const QuickStartForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    interest: 'both', // Default selection
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // For demo purposes - normally you'd send to your backend or webhook
      // Replace with your actual submission endpoint
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      // If successful
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          interest: 'both',
          message: ''
        });
      }, 5000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Something went wrong. Please try again.'
      });
    }
  };

  const businessTypes = [
    'E-commerce',
    'Service-based',
    'SaaS / Tech',
    'Agency',
    'Coaching / Consulting',
    'Local Business',
    'Other'
  ];

  return (
    <div className="glass-effect rounded-2xl p-8 md:p-10 relative overflow-hidden">
      {/* Animated background effects */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          x: [-20, 20, -20]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-electric-blue/10 to-cyber-green/5 pointer-events-none z-0"
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-3">
            <span className="text-electric-blue neon-text">Get Started</span>
            <span className="text-white"> Now</span>
          </h2>
          <p className="text-gray-300">
            Fill out the form below to begin your digital transformation journey
          </p>
        </motion.div>

        {formStatus.isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-cyber-green/20 border border-cyber-green rounded-lg p-6 text-center"
          >
            <div className="w-16 h-16 bg-cyber-green rounded-full flex items-center justify-center mx-auto mb-4">
              <SafeIcon icon={FiCheck} className="text-3xl text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
            <p className="text-gray-300">
              Your information has been received. A specialist will contact you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name*</label>
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
                <label className="block text-white font-semibold mb-2">Email*</label>
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
                <label className="block text-white font-semibold mb-2">Business Type</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-electric-blue focus:outline-none transition-colors"
                >
                  <option value="" disabled>Select business type</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">What are you interested in?</label>
              <div className="grid grid-cols-3 gap-4">
                <label className="flex items-center bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 cursor-pointer hover:border-electric-blue transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="cybersecurity"
                    checked={formData.interest === 'cybersecurity'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <div>
                    <SafeIcon icon={FiShield} className="text-cyber-green mb-1" />
                    <span className="text-white text-sm">Cybersecurity</span>
                  </div>
                </label>
                <label className="flex items-center bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 cursor-pointer hover:border-electric-blue transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="marketing"
                    checked={formData.interest === 'marketing'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <div>
                    <SafeIcon icon={FiTrendingUp} className="text-electric-blue mb-1" />
                    <span className="text-white text-sm">Marketing</span>
                  </div>
                </label>
                <label className="flex items-center bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 cursor-pointer hover:border-electric-blue transition-colors">
                  <input
                    type="radio"
                    name="interest"
                    value="both"
                    checked={formData.interest === 'both'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <div>
                    <span className="text-yellow-400 mb-1">🚀</span>
                    <span className="text-white text-sm">Both</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-electric-blue focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your specific needs..."
              />
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus.isSubmitting}
                className={`bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-12 py-4 rounded-xl text-xl font-bold hover-glow transition-all duration-300 ${
                  formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {formStatus.isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="inline mr-3" />
                    Start Your Transformation
                  </>
                )}
              </motion.button>
            </div>

            {formStatus.error && (
              <div className="text-red-400 text-center mt-4">
                {formStatus.error}
              </div>
            )}

            <div className="text-xs text-gray-400 text-center mt-4">
              By submitting this form, you agree to our <a href="#" className="text-electric-blue hover:underline">Privacy Policy</a> and <a href="#" className="text-electric-blue hover:underline">Terms of Service</a>.
            </div>
          </form>
        )}

        {/* Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-xl mb-1">🔒</div>
            <div className="text-sm text-white font-semibold">Secure Process</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">⚡</div>
            <div className="text-sm text-white font-semibold">Fast Response</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">🛡️</div>
            <div className="text-sm text-white font-semibold">Data Protected</div>
          </div>
          <div className="text-center">
            <div className="text-xl mb-1">💼</div>
            <div className="text-sm text-white font-semibold">Custom Solutions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartForm;