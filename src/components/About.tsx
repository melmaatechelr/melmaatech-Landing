import React from 'react';
import { CheckCircle, Users, Award, Clock, Target, Linkedin, Twitter, Facebook, Instagram, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const aboutPoints = [
  "15+ Expert Software development team with 6+ years experience",
  "10 + SEO & SMM team for branding and marketing",
  "Agile development methodology with continuous delivery",
  "Modern tech stack: React, Node.js, Python, Cloud platforms",
  "End-to-end development from MVP to enterprise scale",
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "56+" },
  { icon: Award, label: "Software Projects", value: "109+" },
  { icon: Clock, label: "Years Experience", value: "6+" },
  { icon: Target, label: "On Time Delivery", value: "97%" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" role="group" aria-label={`${stat.label}: ${stat.value}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image / Visual Side */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
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
                <div className="text-white text-4xl font-bold tracking-tight drop-shadow-2xl text-center">
                  Melmaa Tech
                  <div className="text-lg font-medium mt-2 opacity-90">
                    Building Digital Excellence
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building Software That <br className="hidden sm:block" /> Powers Your Business
            </h2>

            <ul className="space-y-4" role="list">
              {aboutPoints.map((point, index) => (
                <li key={index} className="flex items-start group" role="listitem">
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>


    {/* Journey Section */}
        <div className="relative mb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-3xl" />
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 text-center py-16 px-8">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Story
            </motion.div>

            {/* Main Heading with Gradient */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="block text-gray-900 mb-4">Our Journey</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient-x">
                From Nature to Nation
              </span>
              <span className="block text-gray-900 text-4xl sm:text-5xl lg:text-6xl mt-4">
                through Innovation
              </span>
            </motion.h1>

            {/* Journey Timeline */}
            <div className="max-w-5xl mx-auto mt-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* 2019 - Herbal Cosmetics */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-primary/10 hover:shadow-2xl transition-all duration-500 group">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-600 font-bold text-lg">2019 - Present</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      Herbal Cosmetics Excellence
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Since 2019, we've proudly built our presence in the <strong className="text-green-600">herbal cosmetics industry</strong>, backed by our own manufacturing unit.
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">94%</span>
                        </div>
                        <span className="text-sm text-gray-600">Customer Satisfaction</span>
                      </div>
                    </div>
                    <a 
                      href="https://www.melmaa.com/shop" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    >
                      Visit Our Shop
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Digital Transformation */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-secondary/10 hover:shadow-2xl transition-all duration-500 group">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-primary font-bold text-lg">Digital Evolution</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors">
                      Melmaa Tech Launch
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Driven by a vision to serve customers across the nation, we embraced <strong className="text-primary">digital transformation</strong> and launched <strong className="text-secondary">Melmaa Tech</strong>.
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-xs text-gray-600">Developers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">6+</div>
                        <div className="text-xs text-gray-600">SaaS Apps</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">50+</div>
                        <div className="text-xs text-gray-600">Clients</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Corner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative"
        >
          {/* Background Glow Effects */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-30 animate-pulse" />
          
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 p-10 lg:p-12">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-primary text-sm font-semibold mb-6">
                  <Users className="w-4 h-4" />
                  Leadership
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  Founder's Vision
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-12 items-start">
                {/* Enhanced Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mx-auto lg:mx-0 relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
                  <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                    <img 
                      src="/assets/shaikcharuk.jpg" 
                      alt="Shaik Charuk - Founder, Melmaa Group" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Founder & CEO
                  </div>
                </motion.div>

                {/* Enhanced Content */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-center lg:text-left space-y-6"
                >
                  {/* Name and Title */}
                  <div className="space-y-2">
                    <h4 className="text-3xl lg:text-4xl font-bold text-white">
                      Shaik Charuk
                    </h4>
                    <p className="text-xl text-sky-400 font-semibold">
                      Founder & CEO, Melmaa Group
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      <span>Eluru, Andhra Pradesh, India</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="space-y-4">
                    <p className="text-slate-200 text-lg leading-relaxed">
                      I'm <strong className="text-white">Shaik Charuk</strong>, founder of the Melmaa Group. My journey spans multiple ventures, all driven by one core principle — doing business with <strong className="text-primary">integrity and purpose</strong>.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      I believe technology is a tool, not a solution in itself. My focus is on identifying the right problems and creating innovative, process-driven solutions — using whatever technology best fits the need.
                    </p>
                  </div>

                  {/* Enhanced Quote */}
                  <motion.blockquote 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-gradient-to-b from-sky-400 to-blue-500"
                  >
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      "
                    </div>
                    <p className="text-slate-300 italic text-lg leading-relaxed pl-4">
                      We don't chase the newest tool — we focus on solving the right problem with the right process, then pick the technology that fits.
                    </p>
                  </motion.blockquote>

                  {/* Enhanced Social Links */}
                  <div className="flex gap-4 justify-center lg:justify-start pt-4">
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
                        className={`group relative p-3 rounded-xl bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-slate-300 ${social.color} transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <social.icon className="w-6 h-6" />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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