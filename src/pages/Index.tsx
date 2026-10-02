
import React, { useEffect } from 'react';
import { applyPageMetadata } from '@/lib/seo';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import About from '../components/About';
import Training from '../components/Training';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => applyPageMetadata({
    title: 'Software Development & Digital Solutions | Melmaa Tech',
    description: 'Melmaa Tech provides custom software, web and mobile app development, enterprise solutions, and digital marketing. Contact our team in Eluru, India.',
    canonical: 'https://www.melmaa.tech/',
  }), []);
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <div className="flagship-content">
        <ServicesSection />
        <About />
        <Training />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
