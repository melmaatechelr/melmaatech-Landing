import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, Target, Lightbulb, Shield, Zap, Globe, Code, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const aboutPoints = [
  "15+ Expert Software development team with 6+ years experience",
  "10+ SEO & SMM team for branding and marketing",
  "Agile development methodology with continuous delivery",
  "Modern tech stack: React, Node.js, Python, Cloud platforms",
  "End-to-end development from MVP to enterprise scale",
  "24/7 support and maintenance services",
  "ISO certified quality assurance processes"
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "56+", color: "text-blue-600" },
  { icon: Award, label: "Software Projects", value: "109+", color: "text-green-600" },
  { icon: Clock, label: "Years Experience", value: "6+", color: "text-purple-600" },
  { icon: Target, label: "On Time Delivery", value: "97%", color: "text-orange-600" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Every line of code is crafted with precision, following industry best practices and rigorous testing.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships through transparent communication.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "Streamlined processes and agile methodologies ensure faster delivery without compromising quality.",
    color: "from-blue-500 to-cyan-500"
  }
];

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "React Native", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "TypeScript", category: "Language" },
  { name: "Next.js", category: "Framework" },
  { name: "Flutter", category: "Mobile" }
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology"
  },
  {
    year: "2020",
    title: "50+ Projects Milestone",
    description: "Reached our first major project milestone with diverse clientele"
  },
  {
    year: "2022",
    title: "Training Division Launch",
    description: "Launched ShiftEduTech to empower the next generation of developers"
  },
  {
    year: "2024",
    title: "100+ Projects Completed",
    description: "Celebrated delivering 100+ successful software solutions"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
              role="group"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
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
                  <div className="text-white text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-4xl font-bold tracking-tight drop-shadow-2xl mb-2"
                    >
                      Melmaa Tech
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-lg font-medium opacity-90"
                    >
                      Building Digital Excellence
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg"
            >
              <Globe className="w-8 h-8 text-primary" />
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
            >
              <Code className="w-8 h-8 text-secondary" />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              About Melmaa Tech
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Building Software That <br className="hidden sm:block" /> 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Powers Your Business
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Since 2018, Melmaa Tech has been at the forefront of digital transformation, 
              helping businesses leverage technology to achieve unprecedented growth. We combine 
              technical expertise with creative innovation to deliver solutions that matter.
            </p>

            <ul className="space-y-4 mb-8" role="list">
              {aboutPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start group"
                  role="listitem"
                >
                  <CheckCircle size={24} className="text-primary mt-1 mr-3 group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Master</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks that power our innovative solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
                >
                  {tech.name}
                  <span className="ml-2 text-xs text-gray-500">({tech.category})</span>
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped our growth and success story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;