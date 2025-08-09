import { useState } from 'react';

const CertificatesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // import { nanoid } from "nanoid";

  const certificates = [
    {
      id: 1,
      title: "Google Git and GitHub",
      issuer: "Google",
      date: "2023",
      image: "/scree.png",
      url: "https://drive.google.com/file/d/1mbgI3vBMvmFcMUksS3oWZjbP0XsRzWYw/view?usp=sharing",
      description:
        "Completed Google Git and GitHub course, covering version control, collaboration, and repository management.",
      credentialId: "GOOGLE-GIT-2024-001",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"]
    },
    {
      id: 2,
      title: "NPTEL Online Certification",
      issuer: "NPTEL",
      date: "2023",
      image: "/nptel.png",
      url: "https://drive.google.com/file/d/1L_yTGrMlIRq5ExGiE-gLv4w9vACS7-jO/view?usp=drivesdk",
      description:
        "Certification from NPTEL covering advanced computer science concepts and applications.",
      credentialId: "NPTEL-CS-2024-002",
      skills: ["Programming", "Problem Solving", "Algorithms"]
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      issuer: "HackerRank",
      date: "2023",
      image: "/javascript.png",
      url: "https://drive.google.com/file/d/1yAiJ-YZQIiVcSTcS4kzz6W5aLizkuq6A/view?usp=drivesdk",
      description:
        "Course covering JavaScript basics, DOM manipulation, and functional programming concepts.",
      credentialId: "FCC-JS-2023-003",
      skills: ["JavaScript", "DOM", "ES6", "Functional Programming"]
    },
    {
      id: 4,
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2023",
      image: "/java.png",
      url: "https://drive.google.com/file/d/1hymydEuSFUXA1vSz2qlJ15mYFJBHGAzx/view?usp=drivesdk",
      description:
        "Java programming course covering OOP concepts, data structures, and application development.",
      credentialId: "ORACLE-JAVA-2023-004",
      skills: ["Java", "OOP", "Data Structures", "Application Development"]
    }
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(certificates.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(certificates.length / 3)) % Math.ceil(certificates.length / 3));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Certificates & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and continuous learning achievements that showcase my commitment to excellence
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Certificates Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
              {Array.from({ length: Math.ceil(certificates.length / 3) }).map((_, slideIndex) => (
  <div key={slideIndex} className="w-full flex-shrink-0">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {certificates
        .slice(slideIndex * 3, slideIndex * 3 + 3)
        .map((certificate, index) => (
          <div
            key={certificate.id}
            className={`group bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover-glow animate-scale-in animate-delay-${index * 100}`}
          >
            {/* Certificate Image */}
            <div className="relative h-56 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-all duration-200"
                >
                  View Certificate
                </a>
              </div>
            </div>

            {/* Certificate Content */}
            <div className="p-6 space-y-4">
              {/* Header */}
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {certificate.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-primary font-medium">{certificate.issuer}</p>
                  <span className="text-sm text-muted-foreground">{certificate.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {certificate.description}
              </p>

              {/* Skills */}
              {certificate.skills && (
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-2 py-1 bg-secondary/50 text-muted-foreground text-xs rounded-full border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up animate-delay-${skillIndex * 50}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  </div>
))}

              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: Math.ceil(certificates.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Certificate Stats */}
          {/* <div className="mt-20 grid md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', number: '6+', label: 'Certifications' },
              { icon: '🎯', number: '4', label: 'Major Platforms' },
              { icon: '📅', number: '2024', label: 'Latest Achievement' },
              { icon: '🔄', number: '100%', label: 'Completion Rate' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-scale-in animate-delay-${index * 100}`}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;