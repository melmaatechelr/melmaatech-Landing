import React, { useState } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '../components/layout/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
  Globe,
  Calendar,
  ArrowRight,
  Building2,
  Zap,
  Shield,
  Award
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { toast } from "@/lib/toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@melmaa.com",
    description: "Send us an email anytime",
    href: "mailto:support@melmaa.com",
    color: "from-blue-500 to-cyan-500",
    available: "24/7"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91 7997280049",
    description: "Mon-Fri from 9am to 6pm",
    href: "tel:+917997280049",
    color: "from-green-500 to-emerald-500",
    available: "Business Hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "3D-5-1/6, Western Street, Near LBC School",
    description: "Eluru, West Godavari, AP, India",
    href: "https://maps.app.goo.gl/9GxTZC8V6DE4WKvM6",
    color: "from-purple-500 to-pink-500",
    available: "By Appointment"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    details: "Chat with our team",
    description: "Get instant support",
    href: "https://wa.me/message/OOSBDBV3X7ZNM1",
    color: "from-orange-500 to-red-500",
    available: "Online Now"
  }
];

const projectTypes = [
  "Website Development",
  "Mobile App Development",
  "Enterprise Software",
  "Digital Marketing",
  "Logo Design",
  "E-commerce Platform",
  "Custom Software",
  "Other"
];

const budgetRanges = [
  "Under ₹1 Lakh",
  "₹1-5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-25 Lakhs",
  "₹25+ Lakhs",
  "Let's Discuss"
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "6+ years of experience with 25+ skilled professionals"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "97% on-time delivery rate with agile methodology"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes"
  },
  {
    icon: Award,
    title: "Client Satisfaction",
    description: "98% client satisfaction rate with ongoing support"
  }
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      projectType: "",
      budget: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form submitted:', data);
      setIsSubmitted(true);
      toast.success("Thank you for your message! We'll get back to you within 24 hours.");
      form.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Let's Start Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Next Project
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your business? Get in touch with our team and let's discuss 
              how we can help you achieve your goals with cutting-edge technology solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group block"
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    
                    <p className="font-semibold text-foreground mb-2 text-sm">
                      {method.details}
                    </p>
                    
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>

                    <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {method.available}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl text-center">
                    {isSubmitted ? "Message Sent!" : "Tell Us About Your Project"}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {isSubmitted ? "We'll get back to you soon!" : "Fill out the form below and we'll get back to you within 24 hours"}
                  </CardDescription>
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
                      <p className="text-muted-foreground mb-6">
                        We've received your message and will get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Babu" {...field} className="h-12" />
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
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} className="h-12" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+91 9876543210" {...field} className="h-12" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your Company" {...field} className="h-12" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Type *</FormLabel>
                                <FormControl>
                                  <select {...field} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option value="">Select Project Type</option>
                                    {projectTypes.map((type) => (
                                      <option key={type} value={type}>{type}</option>
                                    ))}
                                  </select>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget Range *</FormLabel>
                                <FormControl>
                                  <select {...field} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                    <option value="">Select Budget</option>
                                    {budgetRanges.map((range) => (
                                      <option key={range} value={range}>{range}</option>
                                    ))}
                                  </select>
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
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help you?" {...field} className="h-12" />
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
                              <FormLabel>Project Details *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
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
              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-primary" />
                    Why Choose Melmaa Tech?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-6 h-6 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <span>We also work with international clients across different time zones</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    data-cal-namespace="30min"
                    data-cal-link="melmaatech/30min"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Schedule a Meeting
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => window.location.href = '/careers'}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      View Career Opportunities
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => window.open('https://shift.melmaa.tech', '_blank')}
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Training Programs
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;