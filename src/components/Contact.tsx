
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    details: "support@melmaa.com",
    description: "For general inquiries",
    href: "mailto:support@melmaa.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 7997280049",
    description: "Mon-Fri from 9am to 6pm",
    href: "tel:+917997280049"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "3D-5-1/6,Western Street,Near LBC School,Eluru,West Godavari",
    description: "Andhra Pradesh,534001,India",
    href: "https://maps.google.com/?q=Eluru,West+Godavari,Andhra+Pradesh,India"
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
    alert("Thank you for your message! We'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            Have questions or ready to start your next project? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow group"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <method.icon size={24} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-bold text-lg mb-2">{method.title}</h3>
              <p className="font-medium">{method.details}</p>
              <p className="text-sm text-gray-500">{method.description}</p>
            </a>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Send us a message</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" placeholder="yourname@example.com" required />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <Input id="subject" name="subject" placeholder="How can we help you?" required />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Tell us about your project or query..."
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full gap-2">
              <Send size={16} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
