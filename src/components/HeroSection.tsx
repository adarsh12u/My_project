import { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from 'react-icons/si';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'MERN Stack Developer',
    'React Specialist',
    'Web Developer'
  ];

  const currentRole = roles[currentRoleIndex];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText !== currentRole) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (isDeleting && displayedText !== '') {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, currentRole, isDeleting]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              {/* Greeting */}
              <p className="text-lg text-muted-foreground animate-fade-in-up">
                Hello, I'm
              </p>
              
              {/* Name */}
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground animate-fade-in-up animate-delay-200">
                Adarsh <span className="gradient-text">Gurjar</span>
              </h1>
              
              {/* Dynamic Role */}
              <div className="text-2xl lg:text-3xl font-medium text-muted-foreground animate-fade-in-up animate-delay-300">
                <span className="gradient-text">
                  {displayedText}
                  <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
                </span>
              </div>
              
              {/* Tagline */}
              <p className="text-xl text-muted-foreground max-w-lg animate-fade-in-up animate-delay-400">
  I craft seamless web applications with elegant design and robust backend integration.
</p>

            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-500">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg hover-glow hover-scale transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-fade-in-up animate-delay-600">

           


              {[
                { name: 'GitHub', icon: <FaGithub size={28} /> , href: 'https://github.com/adarsh12u' },
                { name: 'LinkedIn', icon: <CiLinkedin size={28} /> , href: 'https://www.linkedin.com/in/adarsh-gurjar-6170b0249/' },
                { name: 'Leetcode', icon: <SiLeetcode size={25} /> , href: 'https://leetcode.com/Adarshgurjar123/' },
                { name: 'HackerRank', icon: <LiaHackerrank size={30} /> , href: 'https://www.hackerrank.com/profile/adarsh7470827890' },
                // { name: 'Email', icon: <IoMail /> }
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-lg hover:bg-primary hover:scale-110 transition-all duration-300 hover-glow"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
  <div className="relative">
    {/* Glow effect BEHIND everything */}
    <div className="absolute inset-0 -z-10 bg-gradient-primary rounded-full blur-3xl opacity-30" />
    
    {/* Main profile image with clean border */}
    <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary animate-float">
      <img
        src={'/Web_Photo_Editor.jpg'}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Floating accent elements */}
    <div
      className="absolute -top-4 -right-4 w-8 h-8 bg-cyber-green rounded-full animate-float opacity-80"
      style={{ animationDelay: '1s' }}
    />
    <div
      className="absolute -bottom-6 -left-6 w-6 h-6 bg-sunset-orange rounded-full animate-float opacity-80"
      style={{ animationDelay: '2s' }}
    />
    <div
      className="absolute top-1/2 -right-8 w-4 h-4 bg-neon-purple rounded-full animate-float opacity-80"
      style={{ animationDelay: '3s' }}
    />
  </div>
</div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;