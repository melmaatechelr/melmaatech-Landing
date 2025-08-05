"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Code, ArrowRight, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ServiceCardSkeleton } from "@/components/ui/loading-states";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional web applications and responsive websites built with modern technologies. From corporate sites to complex SaaS platforms.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "React/Next.js development",
      "Progressive Web Apps (PWA)",
      "E-commerce platforms",
      "Content management systems"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications with seamless performance. iOS and Android apps that enhance user engagement.",
    features: ["iOS & Android", "Cross-platform", "Native Performance", "User-friendly"],
    color: "from-purple-500 to-pink-500",
    benefits: [
      "React Native development",
      "Flutter applications",
      "Native iOS & Android",
      "API integrations"
    ]
  },
  {
    icon: Code,
    title: "Enterprise Software Development",
    description: "End-to-end software product development from concept to deployment. Scalable, maintainable software that solves real business problems.",
    features: ["Custom Solutions", "Scalable Architecture", "API Integration", "Cloud Ready"],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Full-stack development",
      "Microservices architecture",
      "DevOps & deployment",
      "Database design"
    ]
  },
];

export default function ServicesSection() {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-muted rounded-lg mx-auto mb-4" />
            <div className="h-6 w-96 bg-muted rounded-lg mx-auto" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4" />
            Our Services
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Software Development Services
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We deliver cutting-edge software solutions tailored to your business needs and objectives.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Benefits - Expandable */}
                  <div className="space-y-3">
                    <Button
                      variant="ghost"
                      onClick={() => handleServiceClick(index)}
                      className="w-full justify-between p-0 h-auto font-medium text-primary hover:text-primary/80"
                    >
                      Key Benefits
                      <ArrowRight className={`w-4 h-4 transition-transform ${selectedService === index ? 'rotate-90' : ''}`} />
                    </Button>
                    
                    {selectedService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2"
                      >
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {benefit}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help transform your business with our digital solutions.
              </p>
              <Button
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}