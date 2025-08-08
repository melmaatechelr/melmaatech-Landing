import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/melmaatech?igsh=YmJwaHRiZHJrcXBt',
      icon: Instagram,
      color: 'hover:text-pink-400',
      bgGradient: 'from-pink-500 to-purple-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/company/melmaa-tech',
      icon: Linkedin,
      color: 'hover:text-blue-400',
      bgGradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/OOSBDBV3X7ZNM1',
      icon: MessageCircle,
      color: 'hover:text-green-400',
      bgGradient: 'from-green-500 to-green-600'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@melmaa.com',
      href: 'mailto:support@melmaa.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7997280049',
      href: 'tel:+917997280049'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Eluru, West Godavari, AP',
      href: 'https://maps.google.com/?q=Eluru,West+Godavari,Andhra+Pradesh,India'
    }
  ];

  const services = [
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'Digital Marketing',
    'Logo Designing',
    'Partnership Programs'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Training Programs', href: '/#training' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-900/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-800/20 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 md:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <img 
                    src="/assets/MelmaatechLogo.PNG" 
                    alt="Melmaa Tech Logo" 
                    className="h-12 w-auto drop-shadow-2xl"
                    width="48"
                    height="48"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Melmaa Tech
                  </h3>
                  <p className="text-gray-400 text-sm">Empowering Digital Transformation</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Professional software development company specializing in custom applications, 
                enterprise solutions, and digital transformation services. Building the future, one line of code at a time.
              </p>
              
              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">Connect With Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative touch-target focus-ring"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className={`p-3 bg-gradient-to-br ${social.bgGradient} rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                        <social.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-slate-700">
                        Follow us on {social.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Contact Info
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 group touch-target focus-ring"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-blue-500/20 transition-colors flex-shrink-0 mt-1">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">{contact.label}</p>
                      <p className="text-sm leading-relaxed">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </h4>
              <nav aria-label="Services navigation">
                <ul className="space-y-3" role="list">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <a 
                        href="#services" 
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group py-2 focus-ring"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </h4>
              <nav aria-label="Quick links navigation">
                <ul className="space-y-3" role="list">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
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
                        className="text-gray-300 hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group py-2 focus-ring"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Newsletter Signup */}
              <div className="mt-6 p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-xl border border-slate-600/30 backdrop-blur-sm">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">Get the latest updates on our services and training programs.</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[44px]"
                    aria-label="Email address for newsletter"
                  />
                  <button 
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 touch-target focus-ring"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p 
                className="text-gray-400 text-center md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                © {currentYear} Melmaa Tech. Made with <Heart className="w-4 h-4 inline text-red-500 mx-1" /> in India. All rights reserved.
              </motion.p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;