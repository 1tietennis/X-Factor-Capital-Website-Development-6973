import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser, FiEye, FiShare, FiMessageCircle, FiTrendingUp } = FiIcons;

const BlogSection = () => {
  const featuredArticles = [
    {
      id: 1,
      category: 'CYBERSECURITY',
      title: '5 Critical Cybersecurity Measures Every Small Business Needs',
      excerpt: 'Protect your business from the most common cyber threats with these essential security measures that won\'t break your budget but will safeguard your valuable data.',
      author: 'John Davis',
      authorInitials: 'JD',
      date: 'May 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'text-cyber-green bg-cyber-green/10'
    },
    {
      id: 2,
      category: 'MARKETING',
      title: 'How to Build a Lead Generation System That Actually Works',
      excerpt: 'Discover the proven framework for creating a reliable lead generation system that consistently attracts qualified prospects to your small business without requiring constant attention.',
      author: 'Sarah Reynolds',
      authorInitials: 'SR',
      date: 'May 8, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'text-electric-blue bg-electric-blue/10'
    },
    {
      id: 3,
      category: 'STRATEGY',
      title: 'Why Integrating Security and Marketing Is Your Competitive Edge',
      excerpt: 'Learn how the strategic integration of cybersecurity and digital marketing creates a powerful competitive advantage for small businesses in today\'s digital landscape.',
      author: 'Michael Johnson',
      authorInitials: 'MJ',
      date: 'April 29, 2023',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      categoryColor: 'text-purple-400 bg-purple-400/10'
    }
  ];

  const topArticles = [
    {
      title: '10 Warning Signs Your Business Is About to Be Hacked',
      date: 'April 12, 2023',
      views: 8742,
      shares: 1253,
      comments: 87,
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: '7 Low-Cost Marketing Tactics That Deliver High ROI',
      date: 'March 28, 2023',
      views: 7891,
      shares: 1105,
      comments: 62,
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'The Small Business Guide to Data Breach Recovery',
      date: 'March 15, 2023',
      views: 6543,
      shares: 987,
      comments: 73,
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'How to Create Content That Converts Visitors to Clients',
      date: 'March 5, 2023',
      views: 5987,
      shares: 876,
      comments: 54,
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'The Hidden Costs of DIY Cybersecurity',
      date: 'February 22, 2023',
      views: 5432,
      shares: 765,
      comments: 48,
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const categories = [
    { name: 'Cybersecurity', count: 24, color: 'text-cyber-green' },
    { name: 'Digital Marketing', count: 19, color: 'text-electric-blue' },
    { name: 'Business Strategy', count: 12, color: 'text-purple-400' },
    { name: 'Technology Trends', count: 8, color: 'text-orange-400' },
    { name: 'Case Studies', count: 6, color: 'text-pink-400' }
  ];

  const tags = [
    '#cybersecurity', '#smallbusiness', '#digitalmarketing', '#leadgeneration',
    '#dataprotection', '#ransomware', '#seo', '#contentmarketing', '#socialmedia',
    '#phishing', '#databackup', '#conversion', '#emailmarketing', '#remotework',
    '#cloudcomputing', '#businessgrowth'
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
            <span className="text-electric-blue neon-text">Expert Insights</span>
            <br />
            <span className="text-white">For Digital</span>
            <br />
            <span className="bg-gradient-to-r from-cyber-green to-electric-blue bg-clip-text text-transparent">
              Dominance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with cutting-edge cybersecurity and digital marketing insights 
            for small businesses and entrepreneurs
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <SafeIcon icon={FiTrendingUp} className="mr-3 text-electric-blue" />
            Latest Articles
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden hover-glow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${article.categoryColor}`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-electric-blue to-cyan-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-black text-xs font-bold">{article.authorInitials}</span>
                      </div>
                      <div>
                        <div className="text-sm text-white">{article.author}</div>
                        <div className="text-xs text-gray-400">{article.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs">
                      <SafeIcon icon={FiClock} className="mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-gradient-to-r from-electric-blue/20 to-cyan-500/20 text-electric-blue border border-electric-blue/30 py-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-electric-blue hover:to-cyan-500 hover:text-black transition-all duration-300">
                    Read More
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Top Performing Articles */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">Top Performing Articles</h3>
            <div className="space-y-6">
              {topArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-lg p-6 hover-glow group"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-electric-blue transition-colors">
                        {article.title}
                      </h4>
                      <div className="text-sm text-gray-400 mb-3">{article.date}</div>
                      <div className="flex items-center space-x-6 text-xs text-gray-500">
                        <div className="flex items-center">
                          <SafeIcon icon={FiEye} className="mr-1" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiShare} className="mr-1" />
                          {article.shares.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiMessageCircle} className="mr-1" />
                          {article.comments}
                        </div>
                        <span className="text-electric-blue">{article.category}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`font-medium ${category.color}`}>{category.name}</span>
                    <span className="text-gray-400 text-sm">{category.count} articles</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs hover:bg-electric-blue hover:text-black transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
            className="bg-gradient-to-r from-electric-blue to-cyan-500 text-black px-8 py-3 rounded-lg font-bold hover-glow"
          >
            📚 View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;