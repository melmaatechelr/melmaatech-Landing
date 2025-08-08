import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowRight, Heart, ExternalLink } from 'lucide-react';
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
      color: 'hover:text-pink-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/company/melmaa-tech',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/OOSBDBV3X7ZNM1',
      icon: MessageCircle,
      color: 'hover:text-green-500'
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
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Logo and Company Name */}
                <div className="flex items-center gap-3 mb-6">
                  <img 
                    src="/assets/MelmaatechLogo.PNG" 
                    alt="Melmaa Tech" 
                    className="h-22 w-auto"
                    loading="lazy"
                  />

                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                  Transforming businesses through innovative software solutions, 
                  cutting-edge technology, and exceptional digital experiences.
                </p>

                {/* Contact Info - Compact */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:support@melmaa.com" className="hover:text-primary transition-colors">
                      support@melmaa.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+917997280049" className="hover:text-primary transition-colors">
                      +91 7997280049
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Eluru, West Godavari, AP</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-100 text-gray-600 ${social.color} transition-all duration-300 hover:bg-gray-200`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
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
              >
                <h4 className="font-semibold text-gray-900 mb-6">Quick Links</h4>
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
                        className="text-gray-600 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-semibold text-gray-900 mb-6">Services</h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <a
                        href="#services"
                        className="text-gray-600 hover:text-primary transition-colors duration-300"
                      >
                        {service}
                      </a>
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
              >
                <h4 className="font-semibold text-gray-900 mb-6">Stay Updated</h4>
                <p className="text-gray-600 mb-4">
                  Get the latest updates on our services and tech insights.
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Melmaa Tech. Made with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> in India.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;