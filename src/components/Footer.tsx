import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowRight, Heart, ExternalLink, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/melmaatech?igsh=YmJwaHRiZHJrcXBt',
      icon: Instagram,
      color: 'hover:bg-pink-500 hover:text-white'
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/company/melmaa-tech',
      icon: Linkedin,
      color: 'hover:bg-blue-500 hover:text-white'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/OOSBDBV3X7ZNM1',
      icon: MessageCircle,
      color: 'hover:bg-green-500 hover:text-white'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Training', href: '/#training' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'Enterprise Software',
    'Digital Marketing',
    'Logo Design'
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Logo and Company Name */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="/assets/MelmaatechLogo.PNG" 
                      alt="Melmaa Tech" 
                      className="h-20 w-auto drop-shadow-lg mx-auto"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-50" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed">
                  Empowering businesses with cutting-edge software solutions, innovative technology, 
                  and exceptional digital experiences that drive sustainable growth.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:support@melmaa.com" className="hover:text-primary transition-colors">
                      support@melmaa.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 hover:text-secondary transition-colors group">
                    <div className="p-2 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:+917997280049" className="hover:text-secondary transition-colors">
                      +91 7997280049
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="leading-relaxed">
                      Eluru, West Godavari,<br />
                      Andhra Pradesh, 534001, India
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/10 backdrop-blur-sm text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-bold text-white relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.href.startsWith('/#')) {
                            e.preventDefault();
                            const sectionId = link.href.substring(2);
                            const element = document.getElementById(sectionId);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }
                        }}
                        className="text-slate-300 hover:text-primary transition-all duration-300 flex items-center gap-2 group hover:translate-x-1"
                      >
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-bold text-white relative">
                  Our Services
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={service}>
                      <motion.a
                        href="#services"
                        className="text-slate-300 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
                        <span>{service}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h4 className="text-xl font-bold text-white relative">
                  Stay Connected
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Subscribe to get the latest updates on our services, tech insights, and exclusive offers.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary/20"
                    />
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 px-4">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-slate-400 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="pt-4">
                  <p className="text-sm text-slate-400 mb-3">Trusted by 56+ clients worldwide</p>
                  <div className="flex items-center gap-4">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      ISO Certified
                    </div>
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-slate-300">
                      6+ Years
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-slate-300 text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              © {currentYear} Melmaa Tech. Made with 
              <Heart className="w-4 h-4 text-red-400 animate-pulse mx-1" /> 
              in India. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;