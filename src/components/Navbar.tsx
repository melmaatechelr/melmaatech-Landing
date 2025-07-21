
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/assets/MelmaatechLogo.PNG" 
            alt="Melmaa Tech Logo" 
            className="h-20 w-auto"
          />
        </a>

        {/* Mobile menu button */}
        <button 
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('home')} className="font-medium hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="font-medium hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('solutions')} className="font-medium hover:text-primary transition-colors">Solutions</button>
          <button onClick={() => scrollToSection('training')} className="font-medium hover:text-primary transition-colors">Trainings</button>
          <button onClick={() => scrollToSection('about')} className="font-medium hover:text-primary transition-colors">About Us</button>
          <button onClick={() => scrollToSection('contact')}>
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40">
          <nav className="container py-8 flex flex-col gap-6">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('training')}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              Training
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="inline-block"
            >
              <Button className="w-full bg-primary hover:bg-primary/90">Contact Us</Button>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
