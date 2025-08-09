import { useState, useEffect } from 'react';
import {
  SiC,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiEslint,
  SiNextdotjs,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiFigma,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiPython,
  SiPostgresql
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
// import { DiC } from "react-icons/di";

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<boolean[]>([]);

  const skills = [
    { name: 'C', icon: <SiC className="text-blue-500" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
 
    { name: 'Next.js', icon: <SiNextdotjs className="text-blue-500 dark:text-white" /> },
    { name: 'React.js', icon: <SiReact className="text-cyan-400" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Git', icon: <SiGit className="text-orange-500" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-600" /> },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger skill animations with staggered delays
            skills.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-transparent to-secondary/30" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploring the tools and technologies I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group relative transform transition-all duration-500 ${
                  visibleSkills[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Skill Card */}
                <div className="relative p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group-hover:scale-105">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 group-hover:animate-bounce transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm" />
                </div>

                {/* Floating Animation */}
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Skill Categories */}
          {/* <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
                icon: '🎨',
                color: 'from-blue-500/20 to-purple-500/20'
              },
              {
                title: 'Backend Development',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
                icon: '⚙️',
                color: 'from-green-500/20 to-blue-500/20'
              },
              {
                title: 'Design & Tools',
                skills: ['UI/UX Design', 'Figma', 'Git', 'VS Code'],
                icon: '🛠️',
                color: 'from-purple-500/20 to-pink-500/20'
              }
            ].map((category, index) => (
              <div
                key={category.title}
                className={`group p-8 bg-gradient-to-br ${category.color} rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up`}
                style={{
                  animationDelay: `${(index + 12) * 100}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3 group-hover:animate-pulse">{category.icon}</span>
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-3 opacity-0 animate-fade-in"
                      style={{
                        animationDelay: `${(index + 15 + skillIndex) * 100}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-pulse" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;