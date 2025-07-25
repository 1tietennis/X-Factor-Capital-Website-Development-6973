import React from 'react';
import Navbar from '../components/Navbar';
import BlogSection from '../components/Blog';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog;