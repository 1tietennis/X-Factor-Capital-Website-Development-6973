import React from 'react';
import Navbar from '../components/Navbar';
import PricingTiers from '../components/PricingTiers';
import BundleOffer from '../components/BundleOffer';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <PricingTiers />
        <BundleOffer />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;