
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Training from '../components/Training';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Home } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Home />
        <Services />
        <About />
        <Solutions />
        <Training />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
