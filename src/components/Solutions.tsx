
import React from 'react';
import { BarChart3, CreditCard, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: BarChart3,
    title: "Software Architecture & Planning",
    description: "We analyze your business requirements and design scalable software architecture. Our technical planning ensures your software solution is built for growth and maintainability."
  },
  {
    icon: CreditCard,
    title: "Enterprise Software Development",
    description: "Custom enterprise applications that streamline operations and boost productivity. We build robust, secure software solutions tailored to your business processes."
  },
  {
    icon: Settings,
    title: "MVP to Production Development",
    description: "From initial concept to full production deployment, we guide your software through every stage. Rapid prototyping, iterative development, and scalable architecture."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 gradient-bg">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Software Solutions</h2>
          <p className="text-gray-600">
            We provide comprehensive software development services tailored to your technical requirements and business goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="card-hover bg-white border-0 shadow-md">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {solution.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
