"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { toast } from "@/lib/toast";
import { ContactFormSkeleton } from "@/components/ui/loading-states";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "support@melmaa.com",
    description: "For general inquiries",
    href: "mailto:support@melmaa.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 7997280049",
    description: "Mon-Fri from 9am to 6pm",
    href: "tel:+917997280049",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "3D-5-1/6, Western Street, Near LBC School",
    description: "Eluru, West Godavari, AP, India",
    href: "https://maps.google.com/?q=Eluru,West+Godavari,Andhra+Pradesh,India",
    color: "from-purple-500 to-pink-500"
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      toast.success("Thank you for your message! We'll get back to you soon.");
      form.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 w-64 bg-muted rounded-lg mx-auto mb-4" />
            <div className="h-6 w-96 bg-muted rounded-lg mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-muted rounded-lg" />
            ))}
          </div>
          <ContactFormSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
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
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Start Your Project
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Ready to transform your business? Get in touch with our team and let's discuss how we can help you achieve your goals.
          </motion.p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              variants={fadeInUp}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/50 backdrop-blur-sm group-hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {method.title}
                  </h3>
                  
                  <p className="font-semibold text-foreground mb-2">
                    {method.details}
                  </p>
                  
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl text-center">
                  {isSubmitted ? "Message Sent!" : "Send us a message"}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  className="h-12"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="How can we help you?"
                                {...field}
                                className="h-12"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or query..."
                                rows={6}
                                {...field}
                                className="resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Choose Melmaa Tech?</h3>
              <div className="space-y-4">
                {[
                  "Expert team with 5+ years of experience",
                  "Custom solutions tailored to your needs",
                  "24/7 support and maintenance",
                  "Agile development methodology",
                  "Competitive pricing and timely delivery"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-semibold">Response Time</h4>
                </div>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}