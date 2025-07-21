"use client";

import { Globe, Smartphone, Code } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Responsive, fast-loading websites designed to engage visitors and drive conversions. From corporate sites to complex web applications, we deliver solutions tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that provide seamless user experiences. Our mobile solutions help businesses extend their reach and engage customers on any device.",
  },
  {
    icon: Code,
    title: "Custom Product Development",
    description:
      "Tailor-made software solutions designed to address your unique business challenges. We transform your ideas into innovative software products that streamline operations and drive growth.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions to elevate your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="p-8 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-2xl hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col items-center gap-y-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-primary to-purple-400 flex items-center justify-center shadow-lg">
                    <service.icon className="text-white w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-center text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-center text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
