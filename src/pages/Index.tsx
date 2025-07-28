
import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import About from '../components/About';
import Solutions from '../components/Solutions';
import Training from '../components/Training';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <About />
        <Solutions />
        <ContactSection />
        <Training />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
