import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-white overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;