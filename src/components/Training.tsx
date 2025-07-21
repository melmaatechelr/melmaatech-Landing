import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
  Star,
  Laptop,
  FileCode,
  Building2,
  School,
  UsersRound,
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
  description: "Our trusted training partner, ShiftEduTech, brings industry expertise and practical knowledge to our programs.",
  website: "https://shift.melmaa.tech/"
};

const additionalPrograms = [
  {
    title: "IT Courses Training",
    icon: Laptop,
    description:
      "Gain expertise in high-demand IT skills with our structured courses. We offer hands-on training in programming, web development, cloud computing, cybersecurity, and more, designed by industry experts."
  },
  {
    title: "Long-Term & Short-Term Internships",
    icon: FileCode,
    description:
      "Enhance your resume with real-world experience. Work on live projects under professional mentorship, learn industry best practices, and boost your career potential with our internship programs."
  },
  {
    title: "Industrial Training",
    icon: Building2,
    description:
      "Bridge the gap between academia and the industry with our immersive training programs. Gain exposure to real-world challenges and develop technical proficiency through expert-led mentorship."
  },
  {
    title: "Campus Recruitment Training",
    icon: School,
    description:
      "Ace your campus placements with our specialized training. Get comprehensive coaching in aptitude, technical subjects, group discussions, resume building, and interview preparation."
  },
  {
    title: "Soft Skill Development",
    icon: UsersRound,
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
      students: 500,
      courses: 15,
      successRate: 95
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
              At Melmaa Tech, in partnership with {partnerInfo.name}, we empower students 
              with industry-relevant training and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[{ label: "Active Students", value: stats.students, icon: Users }, { label: "Available Courses", value: stats.courses, icon: BookOpen }, { label: "Success Rate", value: `${stats.successRate}%`, icon: Star }].map((stat, index) => (
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
            <div>
              <Tabs defaultValue="fundamentals" className="mb-8">
                <TabsList className="mb-6">
                  {trainingCategories.map(category => (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                      <category.icon className="w-4 h-4" />
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {trainingCategories.map(category => (
                  <TabsContent key={category.id} value={category.id}>
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-gray-600 mb-4">{category.content}</p>
                        <ul className="space-y-2">
                          {category.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <ArrowRight className="w-4 h-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gap-2" asChild>
                  <a href={partnerInfo.website} target="_blank" rel="noopener noreferrer">
                    Visit {partnerInfo.name} <ArrowRight size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="#contact">Contact for Training</a>
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Partner with {partnerInfo.name}</h3>
                <p className="text-slate-600 mb-6">{partnerInfo.description}</p>
                <div className="relative w-full aspect-video overflow-hidden rounded-xl group">
                  <img src={`/assets/${images[currentSlide]}`} alt={`Slide ${currentSlide + 1}`} className="w-full h-full object-cover transition-opacity duration-500" loading="lazy" />
                  <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1">
                    <ChevronLeft />
                  </button>
                  <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1">
                    <ChevronRight />
                  </button>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, idx) => (
                      <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}></div>
                    ))}
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
            <img src="https://nirudyogabruthi.in/wp-content/uploads/2024/07/National-Internship-Portal-2024.jpg" alt="NIP" className="h-16 object-contain" />
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