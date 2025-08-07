"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Trainings', href: '#training' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleSectionChange = () => {
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5"
          : "bg-transparent"
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-primary/5 to-transparent"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-secondary/5 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center group"
          >
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl p-2 transition-all duration-300"
              aria-label="Go to homepage"
            >
              <div className="relative">
                <img 
                  src="/assets/MelmaatechLogo.PNG" 
                  alt="Melmaa Tech - Software Development Company" 
                  className="h-16 lg:h-20 w-auto transition-all duration-300 group-hover:drop-shadow-2xl"
                  loading="eager"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            </button>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center" role="navigation" aria-label="Main navigation">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={cn(
                    "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden group",
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId={activeSection === item.href.substring(1) ? "activeTab" : undefined}
                  />
                  
                  {/* Text with sparkle effect */}
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles className="w-3 h-3" />
                      </motion.div>
                    )}
                  </span>
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                aria-label="Contact us to get started"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Get Started
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="relative bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                  aria-label="Open mobile menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-80 bg-gradient-to-br from-white via-white to-primary/5 backdrop-blur-xl border-l border-primary/10" 
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col space-y-8 mt-12">
                {/* Mobile Logo */}
                <div className="flex items-center gap-3 pb-6 border-b border-primary/10">
                  <img 
                    src="/assets/MelmaatechLogo.PNG" 
                    alt="Melmaa Tech Logo" 
                    className="h-12 w-auto"
                  />
                  <div>
                    <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Melmaa Tech
                    </h2>
                    <p className="text-xs text-muted-foreground">Digital Transformation</p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={cn(
                      "text-left px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 group relative overflow-hidden",
                      activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    )}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-current={activeSection === item.href.substring(1) ? 'page' : undefined}
                  >
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={activeSection === item.href.substring(1) ? "activeMobileTab" : undefined}
                    />
                    
                    <span className="relative z-10 flex items-center justify-between">
                      {item.name}
                      {activeSection === item.href.substring(1) && (
                        <Sparkles className="w-4 h-4" />
                      )}
                    </span>
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-6"
                >
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-4 rounded-xl font-semibold shadow-lg"
                    size="lg"
                    aria-label="Contact us to get started"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}