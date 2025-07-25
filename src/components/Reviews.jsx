import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiUser, FiMapPin, FiFilter } = FiIcons;

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');

  const reviewsData = {
    average: 4.3,
    total: 128,
    distribution: {
      5: 62,
      4: 22,
      3: 10,
      2: 4,
      1: 2
    }
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      title: "Elite results from Day One.",
      content: "We scaled our funnel 3x in the first 90 days. Cyber protection setup was freakishly fast and well-documented. The 72-hour setup bonus is no joke!",
      author: "A. Delgado",
      role: "SaaS Founder",
      location: "Miami, FL",
      date: "2 weeks ago"
    },
    {
      id: 2,
      rating: 4,
      title: "Very solid – minor delays, still worth it.",
      content: "Had a 1-day delay on funnel revisions, but the strategist handled it well. The security team is top-tier. Great value for the price.",
      author: "B. Matthews",
      role: "Online Coach",
      location: "LA, CA",
      date: "1 month ago"
    },
    {
      id: 3,
      rating: 3.5,
      title: "Marketing team solid, but onboarding had hiccups.",
      content: "I expected the onboarding call sooner and didn't get it until day 4, but once things started moving, it was impressive. Suggest tightening the initial communication.",
      author: "J. Simmons",
      role: "Ecom Owner",
      location: "Austin, TX",
      date: "3 weeks ago"
    },
    {
      id: 4,
      rating: 4,
      title: "Client Magnet lives up to the name.",
      content: "Was skeptical at first, but within 60 days my calendar started filling with leads. Some minor tracking issues but got resolved quickly.",
      author: "L. Tien",
      role: "Local Agency Owner",
      location: "Boston, MA",
      date: "2 months ago"
    },
    {
      id: 5,
      rating: 5,
      title: "A full digital army behind my business.",
      content: "Between the cybersecurity and their InstaMagnet posts, I finally feel like my business looks AND acts like a premium brand.",
      author: "D. Kane",
      role: "Consultant",
      location: "Chicago, IL",
      date: "1 month ago"
    },
    {
      id: 6,
      rating: 4.5,
      title: "Exceeded expectations in most areas.",
      content: "The conversion optimization was incredible - saw 40% improvement in just 6 weeks. Only minor issue was some confusion during setup, but support was responsive.",
      author: "M. Rodriguez",
      role: "E-commerce Owner",
      location: "Phoenix, AZ",
      date: "3 weeks ago"
    }
  ];

  const StarRating = ({ rating, size = "text-base" }) => {
    return (
      <div className={`flex items-center ${size}`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <SafeIcon
            key={star}
            icon={FiStar}
            className={`${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : star - 0.5 <= rating
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(review => Math.floor(review.rating) === parseInt(filterRating));

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
            <span className="text-electric-blue neon-text">Real Results</span>
            <br />
            <span className="text-white">From Real</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
              Entrepreneurs
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our clients are saying about their digital transformation journey
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Average Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <div className="text-5xl font-bold text-white mr-4">{reviewsData.average}</div>
                <div>
                  <StarRating rating={reviewsData.average} size="text-2xl" />
                  <div className="text-gray-400">Based on {reviewsData.total} reviews</div>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center">
                  <span className="text-sm text-gray-400 w-8">{stars}</span>
                  <SafeIcon icon={FiStar} className="text-yellow-400 mx-2" />
                  <div className="flex-1 bg-gray-700 rounded-full h-2 mx-2">
                    <div
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${reviewsData.distribution[stars]}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 w-8">{reviewsData.distribution[stars]}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 glass-effect rounded-lg p-4">
            <SafeIcon icon={FiFilter} className="text-electric-blue" />
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="bg-transparent text-white border border-gray-600 rounded px-3 py-1 focus:border-electric-blue focus:outline-none"
            >
              <option value="all" className="bg-gray-800">All Reviews</option>
              <option value="5" className="bg-gray-800">5 Stars</option>
              <option value="4" className="bg-gray-800">4 Stars</option>
              <option value="3" className="bg-gray-800">3 Stars</option>
              <option value="2" className="bg-gray-800">2 Stars</option>
              <option value="1" className="bg-gray-800">1 Star</option>
            </select>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{review.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{review.content}</p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <SafeIcon icon={FiUser} className="text-black" />
                </div>
                <div>
                  <div className="font-semibold text-white">{review.author}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <SafeIcon icon={FiMapPin} className="mr-1" />
                    {review.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover-glow"
          >
            💬 Submit Your Review
          </motion.button>
          <p className="text-gray-400 mt-4">
            Share your experience and help other entrepreneurs make informed decisions
          </p>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center glass-effect rounded-full px-8 py-4">
            <span className="text-3xl mr-3">🔒</span>
            <div>
              <div className="font-bold text-electric-blue">If We Don't Perform, You Don't Pay</div>
              <div className="text-sm text-gray-400">Our 90-day performance guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;