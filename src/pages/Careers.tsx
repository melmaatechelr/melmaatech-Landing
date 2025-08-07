import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '../components/layout/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Code, 
  Rocket, 
  Heart, 
  Coffee,
  Zap,
  Star,
  Send,
  CheckCircle,
  Upload,
  Building2,
  Globe,
  TrendingUp,
  DollarSign,
  Calendar,
  Award,
  Target,
  Lightbulb
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { toast } from "@/lib/toast";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Eluru, AP / Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹8-15 LPA",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    description: "Join our engineering team to build scalable web applications and lead technical initiatives. Work with cutting-edge technologies and mentor junior developers.",
    responsibilities: [
      "Develop and maintain full-stack web applications using modern technologies",
      "Collaborate with cross-functional teams to deliver high-quality software",
      "Mentor junior developers and conduct code reviews",
      "Participate in technical discussions and architectural decisions",
      "Optimize application performance and ensure scalability"
    ],
    requirements: [
      "3+ years of experience in full-stack development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Knowledge of cloud platforms (AWS, Azure)",
      "Excellent problem-solving and communication skills"
    ]
  },
  {
    id: 2,
    title: "Mobile App Developer",
    department: "Engineering",
    location: "Eluru, AP / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹6-12 LPA",
    skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    description: "Create amazing mobile experiences for our clients across iOS and Android platforms. Build performant, user-friendly applications.",
    responsibilities: [
      "Develop cross-platform mobile applications using React Native/Flutter",
      "Optimize app performance and user experience",
      "Integrate with backend APIs and third-party services",
      "Publish apps to App Store and Google Play Store",
      "Collaborate with designers to implement pixel-perfect UIs"
    ],
    requirements: [
      "2+ years of mobile app development experience",
      "Proficiency in React Native or Flutter",
      "Experience with native iOS/Android development",
      "Knowledge of mobile app deployment processes",
      "Understanding of mobile UI/UX best practices"
    ]
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Eluru, AP / Remote",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹5-10 LPA",
    skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
    description: "Design intuitive and beautiful user interfaces that delight our users. Create user-centered designs that solve real problems.",
    responsibilities: [
      "Create wireframes, mockups, and interactive prototypes",
      "Conduct user research and usability testing",
      "Collaborate with developers on design implementation",
      "Maintain design systems and style guides",
      "Present design concepts to stakeholders"
    ],
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in design tools (Figma, Adobe XD, Sketch)",
      "Strong understanding of user-centered design principles",
      "Experience with prototyping and user testing",
      "Portfolio showcasing design process and outcomes"
    ]
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Eluru, AP",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹4-8 LPA",
    skills: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
    description: "Drive our digital marketing efforts and help clients grow their online presence. Create and execute comprehensive marketing strategies.",
    responsibilities: [
      "Develop and execute digital marketing strategies",
      "Manage social media accounts and advertising campaigns",
      "Create engaging content for various digital platforms",
      "Analyze campaign performance and optimize ROI",
      "Collaborate with clients to understand their marketing goals"
    ],
    requirements: [
      "1+ years of digital marketing experience",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with analytics tools (Google Analytics, etc.)",
      "Strong content creation and copywriting skills",
      "Understanding of marketing automation tools"
    ]
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Eluru, AP / Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹7-14 LPA",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Build and maintain our infrastructure and deployment pipelines. Ensure scalability, security, and reliability of our systems.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS/Azure",
      "Implement monitoring and logging solutions",
      "Ensure security and compliance standards",
      "Automate deployment and scaling processes"
    ],
    requirements: [
      "2+ years of DevOps/Infrastructure experience",
      "Experience with cloud platforms (AWS, Azure)",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Proficiency in Infrastructure as Code (Terraform, CloudFormation)",
      "Understanding of monitoring and logging tools"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance coverage for you and your family",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Clock,
    title: "Flexible Working Hours",
    description: "Work-life balance with flexible hours and remote work options",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Continuous learning opportunities and clear career advancement paths",
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: Coffee,
    title: "Great Work Culture",
    description: "Collaborative environment with amazing team members and fun activities",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Globe,
    title: "Remote Work Options",
    description: "Flexibility to work remotely or from our modern office space",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Performance Bonuses",
    description: "Competitive salary with performance-based bonuses and incentives",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Time",
    description: "Dedicated time for personal projects and skill development",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Award,
    title: "Recognition Programs",
    description: "Regular recognition and rewards for outstanding performance",
    color: "from-pink-500 to-purple-500"
  }
];

const companyStats = [
  { icon: Users, label: "Team Members", value: "25+", color: "text-blue-600" },
  { icon: Briefcase, label: "Projects Delivered", value: "109+", color: "text-green-600" },
  { icon: Building2, label: "Years in Business", value: "6+", color: "text-purple-600" },
  { icon: Star, label: "Client Satisfaction", value: "98%", color: "text-orange-600" }
];

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: "",
      portfolio: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Application submitted:', data);
      toast.success("Application submitted successfully! We'll get back to you within 48 hours.");
      form.reset();
      setSelectedJob(null);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </motion.div>
            
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Build Your Career with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Melmaa Tech
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Join a team of passionate innovators building the future of technology. 
              We offer exciting opportunities, competitive benefits, and a culture that values growth and innovation.
            </motion.p>

            {/* Company Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-all duration-300">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Why Work With Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm group-hover:bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Open Positions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Find your perfect role and start your journey with us. We're always looking for talented individuals to join our team.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {job.department}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {job.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="font-medium">Location:</span> {job.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium">Experience:</span> {job.experience}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span className="font-medium">Salary:</span> {job.salary}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="font-medium">Type:</span> {job.type}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20 hover:bg-primary/10 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3 lg:min-w-[200px]">
                        <Button
                          onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                          variant="outline"
                          className="w-full border-primary/20 hover:bg-primary/5"
                        >
                          {selectedJob === job.id ? "Hide Details" : "View Details"}
                        </Button>
                        <Button
                          onClick={() => {
                            form.setValue("position", job.title);
                            const element = document.getElementById("application-form");
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                    
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-8 pt-8 border-t border-border"
                      >
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Target className="w-5 h-5 text-primary" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed">{responsibility}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                              <Star className="w-5 h-5 text-primary" />
                              Requirements
                            </h4>
                            <ul className="space-y-3">
                              {job.requirements.map((requirement, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-3">
                                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground text-sm leading-relaxed">{requirement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Apply Now</h2>
              <p className="text-xl text-muted-foreground">
                Ready to join our team? Fill out the application form below and we'll get back to you soon.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} className="h-12 text-base" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Email Address *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} className="h-12 text-base" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+91 9876543210" {...field} className="h-12 text-base" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="position"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base font-semibold">Position Applied For *</FormLabel>
                              <FormControl>
                                <select {...field} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                  <option value="">Select Position</option>
                                  {jobOpenings.map((job) => (
                                    <option key={job.id} value={job.title}>{job.title}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Experience Level *</FormLabel>
                            <FormControl>
                              <select {...field} className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option value="">Select Experience</option>
                                <option value="0-1">0-1 years (Fresher)</option>
                                <option value="1-3">1-3 years</option>
                                <option value="3-5">3-5 years</option>
                                <option value="5+">5+ years</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="portfolio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-semibold">Portfolio/LinkedIn URL (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://your-portfolio.com" {...field} className="h-12 text-base" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                   
                      <div className="flex items-center gap-4 p-6 bg-muted/30 rounded-xl border border-muted">
                        <Upload className="w-6 h-6 text-primary" />
                        <div className="flex-1">
                          <p className="text-base font-medium">Resume Upload</p>
                          <p className="text-sm text-muted-foreground">Please email your resume to support@melmaa.com along with your application</p>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-3" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;