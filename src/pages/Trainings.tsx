import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { applyPageMetadata, applyStructuredData } from "@/lib/seo";
import {
  ArrowRight, BookOpen, Briefcase, Building2, Star,
  GraduationCap, Users, Rocket, ChevronRight, Home,
  Clock, Monitor, Code2,
} from "lucide-react";

/* ─── ALL TRAINING PROGRAMS DATA ─── */
const featuredPrograms = [
  {
    id: "industrial-training-nov-2026",
    title: "Industrial Training – November 2026",
    subtitle: "Full Stack Java with AI",
    badge: "November 2026",
    icon: Building2,
    iconBg: "from-primary to-secondary",
    description:
      "6-month industry-oriented training for Diploma students. Covers Full Stack Java, databases, AI tools, real-time projects, career guidance, and placement support.",
    tags: ["6 Months", "Diploma Students", "Online & Offline"],
    link: "/trainings/industrial-training-november-2026",
    cta: "View Full Details",
  },
];

const allPrograms = [
  {
    title: "Industrial Training",
    icon: Building2,
    iconBg: "from-primary to-secondary",
    description:
      "Bridge the gap between academia and industry with our immersive training programs. Gain exposure to real-world challenges and develop technical proficiency through expert-led mentorship.",
    tags: ["Diploma Students"],
    link: "/trainings/industrial-training-november-2026",
    badge: "November 2026",
  },
  {
    title: "IT Courses Training",
    icon: BookOpen,
    iconBg: "from-blue-500 to-blue-700",
    description:
      "Gain expertise in high-demand IT skills. We offer hands-on training in programming, web development, cloud computing, cybersecurity, and more — designed by industry experts.",
    tags: ["Short-term"],
  },
  {
    title: "Long-Term & Short-Term Internships",
    icon: Briefcase,
    iconBg: "from-green-500 to-green-700",
    description:
      "Enhance your resume with real-world experience. Work on live projects under professional mentorship and boost your career potential with our internship programs.",
    tags: ["Live Projects", "Mentorship"],
  },
  {
    title: "Campus Recruitment Training",
    icon: GraduationCap,
    iconBg: "from-orange-500 to-orange-700",
    description:
      "Ace your campus placements with comprehensive coaching in aptitude, technical subjects, group discussions, resume building, and interview preparation.",
    tags: ["Placement", "Interview Prep"],
  },
  {
    title: "Soft Skill Development",
    icon: Users,
    iconBg: "from-purple-500 to-purple-700",
    description:
      "Master communication, leadership, and teamwork. Our soft skills training empowers you with confidence, professionalism, and interpersonal effectiveness.",
    tags: ["Communication", "Leadership"],
  },
  {
    title: "Career Development Programs",
    icon: Rocket,
    iconBg: "from-pink-500 to-pink-700",
    description:
      "Beyond technical skills — portfolio development, interview preparation, soft skills, and real-world project experience to make you truly job-ready.",
    tags: ["Portfolio", "Job-Ready"],
  },
];

/* ─── PAGE COMPONENT ─── */
const TrainingsPage: React.FC = () => {
  useEffect(() => {
    const restoreMetadata = applyPageMetadata({
      title: "Training Programs for Students | Melmaa Tech",
      description: "Explore Melmaa Tech training programs, including industrial training, IT courses, internships, campus recruitment and career development.",
      canonical: "https://www.melmaa.tech/trainings",
      image: "https://www.melmaa.tech/assets/live-og.png",
    });
    const restoreBreadcrumb = applyStructuredData("breadcrumb-schema", {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.melmaa.tech/" },
        { "@type": "ListItem", position: 2, name: "Trainings", item: "https://www.melmaa.tech/trainings" },
      ],
    });
    return () => {
      restoreMetadata();
      restoreBreadcrumb();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flagship-page">
      <Header />

      <main id="main-content" tabIndex={-1}>
        {/* ── HERO ── */}
        <section
          className="pt-24 pb-14 sm:pt-28 sm:pb-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10"
          aria-label="Trainings page header"
        >
          <div className="container">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500 mb-8 flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-3.5 h-3.5" />Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-800 font-medium">Trainings</span>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wide uppercase">
                Melmaa Tech Training Programs
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 leading-tight">
                Training &amp;{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Career Development
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                At Melmaa Tech we empower students with industry-relevant training, hands-on projects, and real-world experience to launch and grow their tech careers.
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROGRAM ── */}
        <section className="py-14 sm:py-16 bg-gradient-to-b from-gray-50 to-white" aria-label="Featured training programs">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              Featured Program
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
              Learn about the program and ask our team for current enrollment details.
            </p>

            {featuredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="relative max-w-4xl mx-auto bg-white rounded-2xl border border-primary/20 shadow-2xl overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl opacity-60 -z-10" />

                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left gradient panel */}
                  <div className="bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                        {prog.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                        {prog.title}
                      </h3>
                      <p className="text-white/80 text-base font-medium mb-6">{prog.subtitle}</p>
                      <div className="flex flex-wrap gap-2">
                        {prog.tags.map((tag) => (
                          <span key={tag} className="flex items-center gap-1 bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                            {tag === "6 Months" ? <Clock className="w-3 h-3" /> : tag === "Diploma Students" ? <GraduationCap className="w-3 h-3" /> : <Monitor className="w-3 h-3" />}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button className="bg-white text-primary hover:bg-gray-50 font-bold gap-2 min-h-[48px] w-full sm:w-auto shadow-lg" asChild>
                        <Link to={prog.link}>{prog.cta} <ArrowRight className="w-4 h-4" /></Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right details panel */}
                  <div className="p-8 sm:p-10">
                    <img src="/assets/melmaa-tech-industrial-training-nov-2025-may-2026.png" alt="Melmaa Tech Industrial Training Program, November 2025 to May 2026: student groups and trainer" width="2000" height="1600" loading="lazy" decoding="async" className="rounded-xl w-full h-auto mb-6" />
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Program Overview</h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">{prog.description}</p>
                    <ul className="space-y-2.5">
                      {[
                        { icon: Code2, text: "Full Stack Java with AI" },
                        { icon: Building2, text: "Real-time Industry Projects" },
                        { icon: GraduationCap, text: "Career Guidance & Placement Support" },
                        { icon: Star, text: "Certificate on Completion" },
                      ].map(({ icon: Icon, text }) => (
                        <li key={text} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ALL PROGRAMS GRID ── */}
        <section className="py-14 sm:py-16 bg-white" aria-label="All training programs">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
              All Training Programs
            </h2>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
              Explore our full range of programs designed to build your skills, confidence, and career.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {allPrograms.map((prog) => (
                <Card
                  key={prog.title}
                  className={`group relative overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${prog.link ? "border-primary/20" : "border-gray-100"}`}
                >
                  {prog.badge && (
                    <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide z-10">
                      {prog.badge}
                    </span>
                  )}
                  <CardHeader className="p-5 sm:p-6 pb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${prog.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <prog.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold leading-snug text-gray-800">
                      {prog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 sm:p-6 pt-0">
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{prog.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {prog.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {prog.link ? (
                      <Link
                        to={prog.link}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                        aria-label={`View details for ${prog.title}`}
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
                      >
                        Enquire <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── APPROVALS BANNER ── */}
        <section className="py-10 sm:py-12 bg-gradient-to-b from-white to-gray-50" aria-label="Education and internship initiatives">
          <div className="container text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Education and Internship Initiatives</h2>
            <div className="flex justify-center items-center w-full max-w-5xl mx-auto px-4">
              <img
                src="/assets/approved-by-banner.png"
                alt="Education and internship initiative logos shown in the Melmaa Tech training program artwork"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingsPage;
