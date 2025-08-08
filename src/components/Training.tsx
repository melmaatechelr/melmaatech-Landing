import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const trainingCategories = [
  {
    id: "fundamentals",
    title: "Tech Fundamentals",
    icon: BookOpen,
    content: "Our fundamental courses provide a solid foundation in programming basics, web technologies, and software development methodologies. Perfect for beginners looking to start their tech journey.",
    features: [
      "Java programming, & Python programming",
      "HTML, CSS, and JavaScript basics",
      "Introduction to Programming Concepts",
      "Web Development Fundamentals"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Development",
    icon: Briefcase,
    content: "Dive deeper into specialized areas like full-stack development, mobile app development, cloud services, and DevOps practices. Designed for those looking to enhance their existing technical skills.",
    features: [
      "JAVA Full Stack & Python Full Stack",
      "Full-Stack Development (React, Node.js)",
      "Mobile App Development",
      "Cloud Services (AWS, Azure)",
      "Cyber Security",
      ".NET Full Stack",
      "Manual Testing  & Automated Testing"
    ]
  },
  {
    id: "career",
    title: "Career Development",
    icon: Star,
    content: "Beyond technical skills, we offer career-focused training including portfolio development, interview preparation, soft skills, and real-world project experience to make you job-ready.",
    features: [
      "Portfolio Development",
      "Interview Preparation",
      "Soft Skills Training",
      "Real-world Project Experience"
    ]
  }
];

const partnerInfo = {
  name: "ShiftEduTech",
  description: "At Melmaa Tech We Aim to create  Techie's so we started ShiftEduTech wing to empower NextGen Techie's to build world class products.",
  website: "https://shift.melmaa.tech/"
};

const additionalPrograms = [
  {
    title: "IT Courses Training",
    icon: BookOpen,
    description:
      "Gain expertise in high-demand IT skills with our structured courses. We offer hands-on training in programming, web development, cloud computing, cybersecurity, and more, designed by industry experts."
  },
  {
    title: "Long-Term & Short-Term Internships",
    icon: Briefcase,
    description:
      "Enhance your resume with real-world experience. Work on live projects under professional mentorship, learn industry best practices, and boost your career potential with our internship programs."
  },
  {
    title: "Industrial Training",
    icon: Star,
    description:
      "Bridge the gap between academia and the industry with our immersive training programs. Gain exposure to real-world challenges and develop technical proficiency through expert-led mentorship."
  },
  {
    title: "Campus Recruitment Training",
    icon: BookOpen,
    description:
      "Ace your campus placements with our specialized training. Get comprehensive coaching in aptitude, technical subjects, group discussions, resume building, and interview preparation."
  },
  {
    title: "Soft Skill Development",
    icon: Star,
    description:
      "Master the art of communication, leadership, and teamwork. Our soft skills training empowers you with confidence, professionalism, and interpersonal effectiveness."
  }
];

const Training = () => {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    successRate: 0
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["crr1.jpg","crr2.jpg","crr3.jpg", "gud1.jpg"];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    setStats({
      students: 730,
      courses: 22,
      successRate: 98
    });
  }, []);

  return (
    <>
      <section id="training" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Software Training & Career Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Melmaa Tech, working alongside ShiftEduTech, we empower students with industry-relevant training and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{ label: "Active Students", value: stats.students, icon: BookOpen }, { label: "Available Courses", value: stats.courses, icon: BookOpen }, { label: "Success Rate", value: `${stats.successRate}%`, icon: Star }].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <stat.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                  <p className="text-gray-600">{stat.label}</p>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              {/* Partner Info and Photos - Left Side */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">A Vision To Create The Next Generation of Techies</h3>
                <p className="text-slate-600 mb-6">{partnerInfo.description}</p>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl group">
                  <img 
                    src={`/assets/${images[currentSlide]}`} 
                    alt={`Training program showcase ${currentSlide + 1}`} 
                    className="w-full h-full object-cover transition-opacity duration-500" 
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                  <button 
                    onClick={prevSlide} 
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 touch-target focus-ring"
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>
                  <button 
                    onClick={nextSlide} 
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 touch-target focus-ring"
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-primary' : 'bg-gray-300'} focus-ring`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Training Categories - Right Side with Highlight Box */}
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-xl opacity-75 animate-pulse"></div>
              
              {/* Main Highlight Box */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-primary/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Training Categories
                  </h3>
                  
                  <Tabs defaultValue="fundamentals" className="mb-6 lg:mb-8">
                    <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-4 lg:mb-6 h-auto">
                  {trainingCategories.map(category => (
                        <TabsTrigger 
                          key={category.id} 
                          value={category.id} 
                          className="flex items-center justify-center gap-2 p-3 text-xs sm:text-sm whitespace-nowrap"
                        >
                      <category.icon className="w-4 h-4" />
                          <span className="hidden sm:inline">{category.title}</span>
                          <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  ))}
                    </TabsList>

                    {trainingCategories.map(category => (
                      <TabsContent key={category.id} value={category.id}>
                        <Card className="border-0 shadow-sm">
                          <CardContent className="p-4 lg:p-6">
                            <p className="text-gray-600 mb-4 text-sm lg:text-base leading-relaxed">{category.content}</p>
                            <ul className="space-y-2 lg:space-y-3">
                              {category.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 lg:gap-3">
                                  <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm lg:text-base">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    ))}
                  </Tabs>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 lg:mt-8">
                    <Button className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90" asChild>
                      <a href={partnerInfo.website} target="_blank" rel="noopener noreferrer">
                        Visit {partnerInfo.name} <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button variant="outline" className="gap-2 border-primary/30 hover:bg-primary/10">
                      <a href={partnerInfo.website} target="_blank" rel="noopener noreferrer">
Contact for Training</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">We Approved By</h2>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            <img src="https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/AICTE-Logo-250x250-1.png?w=250&ssl=1" alt="AICTE" className="h-16 object-contain" />
            <img src="https://apsche.smartinternz.com/assets/2023/assets/apsche_logo.png" alt="apsche" className="h-16 object-contain" />
            <img src="https://www.education.gov.in/sites/upload_files/mhrd/files/logo_2.png" alt="msme" className="h-16 object-contain" />
            <img src="https://internship.aicte-india.org//images/new_logo/logo_internship_new.jpg" alt="NIP" className="h-16 object-contain" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/595px-ISO_9001-2015.svg.png" alt="iso" className="h-16 object-contain" />
         
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Specialized Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expand your career potential with our diverse, industry-focused programs designed to equip you with practical skills.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {additionalPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center gap-4">
                  <program.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;