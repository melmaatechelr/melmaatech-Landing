
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="public\lovable-uploads\MelmaatechLogo.PNG" 
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
        <a href="#home" className="font-medium hover:text-primary transition-colors">Home</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors">Services</a>
          <a href="#solutions" className="font-medium hover:text-primary transition-colors">Solutions</a>
          <a href="#training" className="font-medium hover:text-primary transition-colors">Trainings</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">About Us</a>
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-40">
          <nav className="container py-8 flex flex-col gap-6">
            <a 
              href="#services" 
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#solutions" 
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#training" 
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Training
            </a>
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block"
            >
              <Button className="w-full bg-primary hover:bg-primary/90">Contact Us</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
