
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12" role="contentinfo">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Melmaa Tech</h3>
            <p className="mb-4 max-w-md">
              Professional software development company specializing in custom applications, 
              enterprise solutions, and digital transformation services.
            </p>
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
                <li>
                  <a href="#solutions" className="hover:text-primary transition-colors">Enterprise Solutions</a>
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
          <p>© {currentYear} Melmaa Tech. All rights reserved.</p>
          
          <div className="mt-4 sm:mt-0">
            <nav aria-label="Legal navigation">
              <ul className="flex space-x-6" role="list">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
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
