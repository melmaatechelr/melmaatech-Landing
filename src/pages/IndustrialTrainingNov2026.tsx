import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "../components/layout/Header";
import Footer from "../components/Footer";
import { applyPageMetadata, applyStructuredData } from "@/lib/seo";
import {
  ArrowRight, BookOpen, Briefcase, CheckCircle2, Clock,
  Code2, Database, ExternalLink, Globe, GraduationCap,
  Layers, Lightbulb, Monitor, Phone, Rocket, Star,
  Users, Wrench, Bot, ChevronRight, Home,
} from "lucide-react";

const highlights = [
  { icon: Rocket, label: "Real-time Learning" },
  { icon: Layers, label: "Hands-on Projects" },
  { icon: Briefcase, label: "Industry-Relevant Skills" },
  { icon: Bot, label: "AI Tools Exposure" },
  { icon: GraduationCap, label: "Career Guidance" },
  { icon: Star, label: "Placement Support" },
  { icon: BookOpen, label: "Resume Building" },
  { icon: Globe, label: "LinkedIn Profile Optimisation" },
  { icon: Users, label: "Communication & Soft Skills" },
  { icon: Code2, label: "Practical Development Experience" },
];

const techStack = [
  { category: "Backend Programming", icon: Code2, color: "from-blue-500 to-blue-700", bg: "bg-blue-50", border: "border-blue-200", items: ["Core Java", "Advanced Java", "Java Frameworks"] },
  { category: "Database", icon: Database, color: "from-green-500 to-green-700", bg: "bg-green-50", border: "border-green-200", items: ["MySQL", "Oracle", "Supabase"] },
  { category: "Frontend Technologies", icon: Monitor, color: "from-orange-500 to-orange-700", bg: "bg-orange-50", border: "border-orange-200", items: ["HTML", "CSS", "JavaScript"] },
  { category: "Development Tools", icon: Wrench, color: "from-purple-500 to-purple-700", bg: "bg-purple-50", border: "border-purple-200", items: ["Git", "GitHub", "Visual Studio Code", "Eclipse"] },
  { category: "AI Tools", icon: Bot, color: "from-pink-500 to-pink-700", bg: "bg-pink-50", border: "border-pink-200", items: ["ChatGPT", "Claude", "Cursor", "Antigravity", "Other AI-assisted dev tools"] },
];

const projects = [
  { icon: Code2, title: "Java Application Project", desc: "Real-world use case application built end-to-end" },
  { icon: Globe, title: "Website Development Project", desc: "Using HTML, CSS, JavaScript — full frontend build" },
  { icon: Star, title: "Personal Portfolio Project", desc: "Showcase your skills with a professional portfolio" },
  { icon: Briefcase, title: "Industry-level Projects", desc: "Additional projects mirroring real industry standards" },
];

const whatYouLearn = [
  "Build applications and websites from scratch",
  "Work on hands-on real-time projects",
  "Develop professional communication skills",
  "Prepare professional resumes",
  "Optimise LinkedIn profiles",
  "Build a personal portfolio",
  "Understand AI tools for software development",
  "Learn digital marketing fundamentals",
  "Gain career and industry insights",
];

const whyMelmaa = [
  { icon: Briefcase, label: "Real-time industry-oriented training" },
  { icon: Layers, label: "Hands-on learning approach" },
  { icon: Code2, label: "Practical project experience" },
  { icon: BookOpen, label: "Training documentation provided" },
  { icon: Monitor, label: "Real-time project exposure" },
  { icon: Star, label: "Certificate for professional profile building" },
  { icon: GraduationCap, label: "Career guidance included" },
  { icon: Rocket, label: "Placement-oriented support" },
];

const sadhanaFeatures = [
  "Previous Year Papers", "Mock Tests", "Grand Tests", "AI Doubt Support",
  "Tutorial Videos", "Study Materials", "Syllabus", "Performance Analytics", "AP & TG ECET Preparation",
];

const IndustrialTrainingNov2026: React.FC = () => {
  useEffect(() => {
    const restoreMetadata = applyPageMetadata({
      title: "Industrial Training for Diploma Students | Full Stack Java | Melmaa Tech",
      description: "Join Melmaa Tech's six-month Industrial Training Program for Diploma students, starting November 2026. Learn Full Stack Java with AI through hands-on projects.",
      canonical: "https://www.melmaa.tech/trainings/industrial-training-november-2026",
      image: "https://www.melmaa.tech/assets/melmaa-tech-industrial-training-november-2026.webp",
      imageWidth: 1920,
      imageHeight: 2880,
    });

    const removeCourseSchema = applyStructuredData("course-schema", {
      "@context": "https://schema.org", "@type": "Course",
      name: "Industrial Training - November 2026",
      description: "A six-month industry-oriented training program for Diploma students covering Full Stack Java with AI, hands-on projects, career guidance and placement-oriented support.",
      provider: { "@type": "Organization", name: "Melmaa Tech", url: "https://www.melmaa.tech/" },
      url: "https://www.melmaa.tech/trainings/industrial-training-november-2026",
      courseMode: ["online", "in-person"],
      educationalCredentialAwarded: "Certificate of Completion",
      timeRequired: "P6M",
      audience: { "@type": "Audience", audienceType: "Diploma Students" },
      teaches: ["Full Stack Java", "Core Java", "Advanced Java", "Java Frameworks", "MySQL", "Oracle", "Supabase", "HTML", "CSS", "JavaScript", "AI Tools", "Git", "GitHub"],
    });

    const removeBreadcrumbSchema = applyStructuredData("breadcrumb-schema", {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.melmaa.tech/" },
        { "@type": "ListItem", position: 2, name: "Trainings", item: "https://www.melmaa.tech/trainings" },
        { "@type": "ListItem", position: 3, name: "Industrial Training - November 2026", item: "https://www.melmaa.tech/trainings/industrial-training-november-2026" },
      ],
    });

    return () => {
      restoreMetadata();
      removeCourseSchema();
      removeBreadcrumbSchema();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        {/* FLAGSHIP HERO */}
        <section className="relative overflow-hidden bg-slate-950 pt-24 pb-14 sm:pt-28 sm:pb-20" aria-label="Industrial training program introduction">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/60 via-slate-950 to-slate-950" aria-hidden="true" />
          <div className="container relative">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-slate-300 mb-8 flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors"><Home className="w-3.5 h-3.5" />Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link to="/trainings" className="hover:text-white transition-colors">Trainings</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-medium">Industrial Training · November 2026</span>
            </nav>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 sm:gap-10 lg:gap-14 items-center">
              <figure className="relative max-w-2xl lg:ml-auto w-full order-1 lg:order-2">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-violet-500/25 blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
                  <img
                    src="/assets/melmaa-tech-industrial-training-november-2026.webp"
                    srcSet="/assets/melmaa-tech-industrial-training-november-2026-480.webp 480w, /assets/melmaa-tech-industrial-training-november-2026-800.webp 800w, /assets/melmaa-tech-industrial-training-november-2026-1280.webp 1280w, /assets/melmaa-tech-industrial-training-november-2026.webp 1920w"
                    sizes="(max-width: 1023px) 1px, (max-width: 1280px) 48vw, 560px"
                    alt="Melmaa Tech Industrial Training Program for Diploma Students, November 2026"
                    className="hidden lg:block mx-auto max-h-[min(78vh,780px)] w-full object-contain"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="1920"
                    height="2880"
                  />
                  <img
                    src="/assets/melmaa-tech-industrial-training-november-2026-800.webp"
                    srcSet="/assets/melmaa-tech-industrial-training-november-2026-480.webp 480w, /assets/melmaa-tech-industrial-training-november-2026-800.webp 800w"
                    sizes="100vw"
                    alt="Melmaa Tech Industrial Training poster for Diploma Students, November 2026"
                    className="block lg:hidden w-full h-auto"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="800"
                    height="1200"
                  />
                </div>
              </figure>
              <div className="max-w-2xl order-2 lg:order-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-300/25 bg-indigo-400/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-indigo-200 mb-6">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" /> Melmaa Tech · Industry Training
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.08]">
                  Industrial Training
                  <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">November 2026</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">Build what comes next with a six-month, hands-on Full Stack Java program with AI tools, real projects and career preparation for diploma students.</p>
                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                  <Button className="gap-2 min-h-12 px-6 bg-white text-slate-950 hover:bg-cyan-50 font-bold" asChild>
                    <a href="tel:+917997280049"><Phone className="w-4 h-4" />Talk to an advisor <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                  <Button variant="outline" className="min-h-12 border-white/30 bg-white/5 text-white hover:bg-white/10" asChild>
                    <Link to="/contact">Explore the program</Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                  {[{ icon: Clock, label: "6 months" }, { icon: GraduationCap, label: "For diploma students" }, { icon: Monitor, label: "Online & offline" }].map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-2"><Icon className="w-4 h-4 text-cyan-300" />{label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* INTRODUCTION */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white" aria-label="Program introduction">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">About the Training Program</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center">
              Melmaa Tech Industrial Training Program is a <strong>6-month industry-oriented training program</strong> for Diploma students, focused on Full Stack Java development, practical projects, modern development tools, AI tools, career guidance, and hands-on learning. We do not just teach — we build real engineers.
            </p>
          </div>
        </section>

        {/* PROGRAM DETAILS */}
        <section className="py-12 sm:py-16 bg-white" aria-label="Program details">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Program Details</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { label: "Program", value: "Industrial Training Program" },
                { label: "Batch", value: "November 2026" },
                { label: "Duration", value: "6 Months" },
                { label: "Target Audience", value: "Diploma Students" },
                { label: "Training Domain", value: "Full Stack Java with AI" },
                { label: "Training Mode", value: "Online & Offline" },
                { label: "Learning Approach", value: "Real-time + Hands-on + Industry Skills", span: "lg:col-span-2" },
              ].map(({ label, value, span = "" }) => (
                <Card key={label} className={`border border-primary/15 hover:shadow-md transition-shadow ${span}`}>
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 leading-snug">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5" aria-label="Training highlights">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Training Highlights</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3 p-4 sm:p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" /></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="py-12 sm:py-16 bg-white" aria-label="Technologies you will learn">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">Technologies You Will Learn</h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm sm:text-base">A comprehensive curriculum covering backend, frontend, databases, tools, and cutting-edge AI technologies.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
              {techStack.map(({ category, icon: Icon, color, bg, border, items }) => (
                <div key={category} className={`rounded-xl border ${border} ${bg} p-4 sm:p-5 hover:shadow-md transition-shadow`}>
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${color} mb-3`}><Icon className="w-5 h-5 text-white" /></div>
                  <h3 className="text-sm font-bold text-gray-800 mb-3 leading-tight">{category}</h3>
                  <ul className="space-y-1.5">
                    {items.map(item => (
                      <li key={item} className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-600"><CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white" aria-label="Projects and practical learning">
          <div className="container">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects and Practical Learning</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">We focus on <strong>real-time project development</strong> rather than theory-only learning. You will build actual software products that demonstrate your abilities to employers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {projects.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="relative bg-white rounded-xl border border-primary/15 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><Icon className="w-6 h-6 text-white" /></div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">{title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs sm:text-sm text-gray-400 mt-6 italic">Build Real Projects - Not Just Theory!</p>
          </div>
        </section>

        {/* WHAT YOU LEARN */}
        <section className="py-12 sm:py-16 bg-white" aria-label="What students will learn">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">What Students Will Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {whatYouLearn.map(item => (
                <div key={item} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MELMAA TECH */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5" aria-label="Why choose Melmaa Tech">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Why Choose Melmaa Tech</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
              {whyMelmaa.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0"><Icon className="w-6 h-6 text-white" /></div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SADHANA ECET */}
        <section id="sadhana-ecet" className="py-12 sm:py-16 bg-gradient-to-b from-white to-yellow-50" aria-label="Sadhana ECET exclusive access">
          <div className="container">
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">Exclusive Student Benefit</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exclusive Learning Access for Melmaa Tech Industrial Training Students</h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Students who join the November 2026 Industrial Training batch receive free access to <strong>Sadhana ECET</strong> for ECET 2027 preparation, according to the program terms.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              <figure>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-yellow-200">
                  <img
                    src="/assets/sadhana-ecet-2027-melmaa-tech-training-students.webp"
                    srcSet="/assets/sadhana-ecet-2027-melmaa-tech-training-students-480.webp 480w, /assets/sadhana-ecet-2027-melmaa-tech-training-students-768.webp 768w, /assets/sadhana-ecet-2027-melmaa-tech-training-students.webp 1024w"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 43vw, 500px"
                    alt="Sadhana ECET 2027 preparation platform included for Melmaa Tech Industrial Training students"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                    decoding="async"
                    width="1024"
                    height="1536"
                  />
                </div>
                <figcaption className="text-center text-xs text-gray-500 mt-2">Sadhana ECET 2027 - Exclusive Learning Access for Melmaa Tech Industrial Training Students</figcaption>
              </figure>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Sadhana ECET 2027</h3>
                <p className="text-primary font-semibold text-sm mb-4">Smart Practice. Better Ranks.</p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">Complete ECET preparation in one platform. Access all the tools you need to prepare for AP and TG ECET from anywhere, anytime.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {sadhanaFeatures.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0" />{feature}</li>
                  ))}
                </ul>
                <Button className="gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[44px]" asChild>
                  <a href="https://ecet.melmaa.tech/" target="_blank" rel="noopener noreferrer" aria-label="Explore Sadhana ECET 2027 learning platform (opens in new tab)">Explore Sadhana ECET <ExternalLink className="w-4 h-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM FAQ */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="training-faq-title">
          <div className="container max-w-3xl">
            <h2 id="training-faq-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Industrial Training FAQs</h2>
            <div className="space-y-3">
              {[
                { question: "Who can join this program?", answer: "The November 2026 batch is for Diploma students." },
                { question: "How long is the training?", answer: "The program runs for six months." },
                { question: "What will students learn?", answer: "The program covers Full Stack Java with AI, including Java, databases, web technologies, development tools and hands-on projects." },
                { question: "Is the training online or in person?", answer: "The program offers online and offline training modes." },
                { question: "What is the Sadhana ECET benefit?", answer: "Students who join the November 2026 batch receive free Sadhana ECET access for ECET 2027 preparation, according to program terms." },
                { question: "When does the batch start?", answer: "The batch is scheduled for November 2026. Contact Melmaa Tech to confirm the exact joining date." },
              ].map(({ question, answer }) => (
                <details key={question} className="group rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 open:bg-white open:shadow-sm">
                  <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900 marker:hidden">{question}</summary>
                  <p className="pt-3 text-sm sm:text-base leading-relaxed text-gray-600">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary" aria-label="Enroll now">
          <div className="container text-center max-w-3xl">
            <Lightbulb className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Industrial Training?</h2>
            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">Ask Melmaa Tech about joining the November 2026 batch and the current program details.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gap-2 bg-white text-primary hover:bg-gray-50 font-bold text-base px-8 py-3 min-h-[48px] shadow-lg hover:shadow-xl transition-all hover:scale-105" asChild>
                <a href="tel:+917997280049" aria-label="Call Melmaa Tech to enroll"><Phone className="w-4 h-4" />Enroll Now</a>
              </Button>
              <Button variant="outline" className="gap-2 border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-3 min-h-[48px]" asChild>
                <Link to="/contact" aria-label="Visit contact page to enquire">Enquire About Training <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-6 flex flex-wrap justify-center gap-4">
              <a href="tel:+917997280049" className="hover:text-white transition-colors">7997280049</a>
              <span>|</span>
              <a href="tel:+919640591713" className="hover:text-white transition-colors">9640591713</a>
              <span>|</span>
              <a href="mailto:support@melmaa.com" className="hover:text-white transition-colors">support@melmaa.com</a>
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-8 bg-white border-t border-gray-100" aria-label="Related links">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/trainings" className="flex items-center gap-1.5 text-primary hover:underline font-medium"><BookOpen className="w-3.5 h-3.5" />All Trainings</Link>
              <span className="text-gray-300">|</span>
              <Link to="/contact" className="flex items-center gap-1.5 text-primary hover:underline font-medium"><Phone className="w-3.5 h-3.5" />Contact Us</Link>
              <span className="text-gray-300">|</span>
              <a href="https://ecet.melmaa.tech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-primary hover:underline font-medium"><ExternalLink className="w-3.5 h-3.5" />Sadhana ECET</a>
              <span className="text-gray-300">|</span>
              <Link to="/" className="flex items-center gap-1.5 text-primary hover:underline font-medium"><Home className="w-3.5 h-3.5" />Melmaa Tech Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustrialTrainingNov2026;
