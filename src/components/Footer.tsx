
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Melmaa Tech</h3>
            <p className="mb-4 max-w-md">
              Empowering businesses through innovative technology solutions.
              We help transform ideas into powerful digital products.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">App Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary transition-colors">Business Analysis</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#training" className="hover:text-primary transition-colors">Training</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p>© {currentYear} Melmaa Tech. All rights reserved.</p>
          
          <div className="mt-4 sm:mt-0">
            <ul className="flex space-x-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
