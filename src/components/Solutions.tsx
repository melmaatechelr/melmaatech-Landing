
import React from 'react';
import { BarChart3, CreditCard, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    icon: BarChart3,
    title: "Business Analysis & Strategy",
    description: "Our expert analysts help you identify opportunities, define goals, and create clear roadmaps that align technology with your business strategy for sustainable growth and success."
  },
  {
    icon: CreditCard,
    title: "Billing & Software Solutions",
    description: "Simplify your operations with our billing software and business management tools. Designed for efficiency, accuracy, and ease of use—our solutions help you focus on what matters most."
  },
  {
    icon: Settings,
    title: "Collaborative Product Development",
    description: "Having an idea you want to transform into an innovative software solution? We collaborate with you from idea analysis to product launch, ensuring your vision becomes reality."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 gradient-bg">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Solutions</h2>
          <p className="text-gray-600">
            We provide comprehensive business solutions tailored to your unique needs and challenges.
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
