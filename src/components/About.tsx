import React from 'react';
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react";

const aboutPoints = [
  "Expert software development team with 6+ years experience",
  "Custom software solutions for startups to enterprises",
  "Agile development methodology with continuous delivery",
  "Modern tech stack: React, Node.js, Python, Cloud platforms",
  "End-to-end development from MVP to enterprise scale",
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "56+" },
  { icon: Award, label: "Software Projects", value: "109+" },
  { icon: Clock, label: "Years Experience", value: "6+" },
  { icon: Target, label: "Project Success", value: "99%" },
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
          <div className="relative p-6 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-tr from-purple-600 via-purple-500 to-primary/90">
            <div className="aspect-square flex items-center justify-center" role="img" aria-label="Melmaa Tech brand visualization">
              <div className="text-white text-4xl font-bold tracking-tight drop-shadow-lg">
                Melmaa Tech
              </div>
            </div>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-3xl" />
          </div>

          {/* Content Side */}
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building Software That <br className="hidden sm:block" /> Powers Your Business
            </h2>

            <p className="text-gray-700 text-lg mb-8">
              At <span className="font-semibold text-primary">Melmaa Tech</span>, we transform businesses through innovative software development. 
              We specialize in building custom applications, enterprise software, and digital platforms that solve complex business challenges. 
              Our expert team delivers scalable, secure, and maintainable solutions using cutting-edge technologies.
            </p>

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
