import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PricingTiers from '../components/PricingTiers';
import BundleOffer from '../components/BundleOffer';
import Reviews from '../components/Reviews';
import ProcessFlow from '../components/ProcessFlow';
import BlogSection from '../components/Blog';
import FlashOffer from '../components/FlashOffer';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PricingTiers />
      <BundleOffer />
      <Reviews />
      <ProcessFlow />
      <BlogSection />
      <FlashOffer />
      <Footer />
    </div>
  );
};

export default Home;