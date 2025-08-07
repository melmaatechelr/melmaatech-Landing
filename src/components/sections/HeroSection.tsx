"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { fadeInUp, staggerContainer, floatingAnimation } from "@/lib/animations";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: '2s' }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full filter blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Transforming Ideas into Digital Reality
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block">Custom Software</span>
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Development
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We build innovative software solutions that drive business growth and digital transformation. 
            Specializing in custom web applications, mobile apps, enterprise software, and scalable digital platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Start your software development project"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('about')}
              className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-muted/50 transition-all duration-300 group"
              aria-label="Learn more about our software development services"
            >
              Learn More
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "56+", label: "Happy Clients" },
              { number: "109+", label: "Software Projects" },
              { number: "6+", label: "Years Experience" },
              { number: "97%", label: "On Time Delivery" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}