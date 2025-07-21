
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pb-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-8">
            
            </div>
            
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="block">Empowering Digital</span> 
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in">
            Innovate. Build. Transform.
          </p>
          
          <p className="text-gray-600 mb-10 animate-fade-in">
            Your trusted technology partner for building future-ready digital solutions. We specialize in crafting high-performance websites, mobile applications, and custom software products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
