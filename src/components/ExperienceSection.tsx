import { useState, useEffect } from 'react';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Lemosys Infotech Pvt Ltd',
      duration: 'Nov-2024 - Present',
      location: 'Onsite',
      description: 'Worked as a Software developer building scalable and interactive web applications. Delivered complex features across multiple real-world products like an APM monitoring platform and a multi-functional education & property management system.',
      achievements: [
        'Built a real-time Application Performance Monitoring (APM) tool for tracking and visualizing live application metrics',
        'Developed Centurion, a feature-rich web platform with real-time chat, video course streaming, multi-user access control, and property management modules',
        'Integrated Google Maps API to display location-based data and enhance user interaction across modules',
        'Focused on responsive design and smooth UI/UX using React, Tailwind CSS, and Next.js',
        'Collaborated closely with designers and backend developers to implement scalable and maintainable frontend architecture',
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Google Maps API', 'WebSockets']
    },    
    {
      title: 'Software Developer Intern',
      company: 'Walkover Technologies',
      duration: 'July 2024 - Oct 2024',
      location: 'Onsite',
      description: 'Contributed to ViaSocket, an AI-driven workflow automation platform, by developing interactive web application features using React.js (front-end) and Node.js (back-end). Collaborated with cross-functional teams to integrate intelligent automation features and optimize system performance, ensuring scalable and efficient workflows.',
      achievements: [
        'Implemented Single Sign-On (SSO) functionality under the guidance of senior developers, enhancing user authentication flow',
        'Optimized application code and APIs to reduce load times by ~15%, improving user experience',
        'Gained hands-on experience in building full-stack features and deepened understanding of scalable architecture and automation workflows'
      ],
      technologies: ['React.js', 'Node.js', 'JavaScript', 'Material UI' ]
    },
    // {
    //   title: '',
    //   company: 'StartUp Hub',
    //   duration: '2020 - 2021',
    //   location: 'San Francisco, CA',
    //   description: 'Built and maintained company websites, learned modern development practices, and contributed to open-source projects.',
    //   achievements: [
    //     'Developed company portfolio website increasing leads by 25%',
    //     'Contributed to 5+ open-source projects',
    //     'Completed advanced React certification'
    //   ],
    //   technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger experience animations with staggered delays
            experiences.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const experienceElement = document.getElementById('experience');
    if (experienceElement) {
      observer.observe(experienceElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through the world of software development
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`relative transform transition-all duration-700 ${
                    visibleItems[index] 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-muted-foreground font-medium">
                          {experience.duration}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's create something amazing together!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;