
import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/melmaatech?igsh=YmJwaHRiZHJrcXBt',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://in.linkedin.com/company/melmaa-tech',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/message/OOSBDBV3X7ZNM1',
      icon: MessageCircle,
      color: 'hover:text-green-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/assets/MelmaatechLogo.PNG" 
                alt="Melmaa Tech Logo" 
                className="h-16 w-auto"
              />
              <h3 className="text-3xl font-bold text-white">Melmaa Tech</h3>
            </div>
            <p className="mb-4 max-w-md">
              Professional software development company specializing in custom applications, 
              enterprise solutions, and digital transformation services.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm font-medium text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 bg-gray-800 rounded-full transition-all duration-300 hover:bg-gray-700 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <nav aria-label="Services navigation">
              <ul className="space-y-2" role="list">
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">Custom Software Development</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">Web Application Development</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary transition-colors">Mobile App Development</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <nav aria-label="Company navigation">
              <ul className="space-y-2" role="list">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#training" className="hover:text-primary transition-colors">Training Programs</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} Melmaa Tech. All rights reserved.</p>
          
          <div className="mt-4 sm:mt-0">
            <nav aria-label="Legal navigation">
              <ul className="flex space-x-6" role="list">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
