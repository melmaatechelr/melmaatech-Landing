import React from 'react';
import { CheckCircle, Users, Award, Clock, Target, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

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
        {/* Journey Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Our Journey: From Nature to Nation through Innovation
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Since 2019, we've proudly built our presence in the <strong>herbal cosmetics industry</strong>, backed by our own manufacturing unit — <a href="https://www.melmaa.com/shop" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline">www.melmaa.com/shop</a>. With 94% positive customer feedback, our products speak for themselves, reflecting our deep commitment to quality and wellness.
            </p>
            <p>
              Driven by a vision to serve customers across the nation — from individuals to enterprises — we embraced <strong>digital transformation</strong> and launched <strong>Melmaa Tech</strong>. Today, we're a team of 15+ skilled full-stack developers who have successfully built 6+ SaaS applications and delivered technology solutions to over 50 satisfied clients.
            </p>
          </div>
        </div>

        {/* Founder's Corner */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[200px,1fr] gap-8 items-start">
              <div className="w-44 h-44 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-slate-700 flex items-center justify-center bg-black shadow-xl">
                <img 
                  src="/assets/shaikcharuk.jpg" 
                  alt="Shaik Charuk - Founder, Melmaa Group" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">Founder's Corner</h3>
                <p className="text-sky-400 font-medium mb-4 text-lg">Shaik Charuk — Founder, Melmaa Group</p>
                <p className="text-slate-200 mb-6 leading-relaxed">
                  I'm <strong>Shaik Charuk</strong>, founder of the Melmaa Group. My journey spans multiple ventures, all driven by one core principle — doing business with integrity and purpose. I believe technology is a tool, not a solution in itself. My focus is on identifying the right problems and creating innovative, process-driven solutions — using whatever technology best fits the need.
                </p>
                <blockquote className="border-l-4 border-sky-500/30 pl-6 text-slate-400 italic mb-6 text-lg">
                  "We don't chase the newest tool — we focus on solving the right problem with the right process, then pick the technology that fits."
                </blockquote>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.linkedin.com/in/shaikcharuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-slate-300 hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/shaikcharuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="text-slate-300 hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/shaikcharuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="text-slate-300 hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/shaikcharuk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="text-slate-300 hover:text-sky-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default About;
