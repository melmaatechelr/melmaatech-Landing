import React from 'react';
import { CheckCircle, Users, Linkedin, Twitter, Facebook, Instagram, ArrowRight, MapPin, Code2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const aboutPoints = [
  "Custom software and web application development",
  "Mobile app development and enterprise solutions",
  "Digital marketing and brand design services",
  "Modern development using technologies such as React, Node.js and Python",
  "Professional training and hands-on technology programs",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          
          {/* Image / Visual Side */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-square relative" role="img" aria-label="Melmaa Tech about us">
              <img 
                src="/assets/aboutbgm.jpeg" 
                alt="Melmaa Tech - About Us" 
                className="w-full h-full object-cover"
                loading="lazy"
                width="600"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-secondary/60 to-primary/80 flex items-center justify-center">
                <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight drop-shadow-2xl text-center px-4">
                  Melmaa Tech
                  <div className="text-sm sm:text-base md:text-lg font-medium mt-1 sm:mt-2 opacity-90">
                    Building Digital Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="block sm:hidden">Building Software That Powers Your Business</span>
              <span className="hidden sm:block">Building Software That <br className="hidden lg:block" /> Powers Your Business</span>
            </h2>

            <ul className="space-y-4" role="list">
              {aboutPoints.map((point, index) => (
                <li key={index} className="flex items-start group" role="listitem">
                  <CheckCircle size={20} className="text-primary mt-1 mr-3 group-hover:scale-110 transition-transform flex-shrink-0 sm:w-6 sm:h-6" aria-hidden="true" />
                  <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>


    {/* Services and training */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Software, Digital Services and Training</h2>
              <p className="text-gray-600 leading-relaxed">Melmaa Tech brings technology services and practical learning together for businesses and students.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
              <div className="rounded-2xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm">
                <Code2 className="w-9 h-9 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Technology Services</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Custom software, web and mobile application development, enterprise solutions and digital services tailored to project needs.</p>
              </div>
              <div className="rounded-2xl border border-secondary/15 bg-white p-6 sm:p-8 shadow-sm">
                <GraduationCap className="w-9 h-9 text-secondary mb-4" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Professional Training</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Industrial and IT training, internships, campus recruitment preparation and career development programs for learners.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Founder's Corner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 relative"
        >
          {/* Background Glow Effects */}
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-2xl opacity-30 animate-pulse" />
          
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 p-6 sm:p-8 lg:p-12">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-8 sm:mb-12"
              >
               
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  Founder's Vision
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-8 sm:gap-12 items-start">
                {/* Enhanced Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto lg:mx-0 relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                    <img 
                      src="/assets/shaikcharuk.jpg" 
                      alt="Shaik Charuk - Founder, Melmaa Group" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                
                </motion.div>

                {/* Enhanced Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center lg:text-left space-y-4 sm:space-y-6"
                >
                  {/* Name and Title */}
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      Shaik Charuk
                    </h4>
                    <p className="text-lg sm:text-xl text-sky-400 font-semibold">
                      Founder & CEO, Melmaa Group
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>Eluru, Andhra Pradesh, India</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-3 sm:space-y-4">
                    <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed">
                      I'm <strong className="text-white">Shaik Charuk</strong>, founder of the Melmaa Group. My journey spans multiple ventures, all driven by one core principle — doing business with <strong className="text-primary">integrity and purpose</strong>.
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      I believe technology is a tool, not a solution in itself. My focus is on identifying the right problems and creating innovative, process-driven solutions — using whatever technology best fits the need.
                    </p>
                  </div>

                  {/* Enhanced Quote */}
                  <motion.blockquote 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-l-4 border-gradient-to-b from-sky-400 to-blue-500"
                  >
                    <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      "
                    </div>
                    <p className="text-slate-300 italic text-sm sm:text-base md:text-lg leading-relaxed pl-3 sm:pl-4">
                      We don't chase the newest tool — we focus on solving the right problem with the right process, then pick the technology that fits.
                    </p>
                  </motion.blockquote>

                  {/* Enhanced Social Links */}
                  <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-3 sm:pt-4">
                    {[
                      { icon: Linkedin, href: "https://linkedin.com/in/shaik-charuk-637376146", color: "hover:bg-blue-600", label: "LinkedIn" },
                      { icon: Twitter, href: "https://twitter.com/shaikcharuk", color: "hover:bg-sky-500", label: "Twitter" },
                      { icon: Facebook, href: "https://www.facebook.com/shaikcharuk", color: "hover:bg-blue-700", label: "Facebook" },
                      { icon: Instagram, href: "https://www.instagram.com/shaikcharuk", color: "hover:bg-pink-600", label: "Instagram" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} Profile`}
                        className={`group relative p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-slate-300 ${social.color} transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg min-w-[44px] min-h-[44px] flex items-center justify-center`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          {social.label}
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
    
      
    </section>
  );
};

export default About;
