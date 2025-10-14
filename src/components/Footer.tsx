import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="relative py-12 bg-secondary/30 border-t border-border overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-accent animate-gradient" />
        </div>
  
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Brand Section */}
              <div className="space-y-4 animate-fade-in-up">
                <div className="text-2xl font-bold gradient-text">
                  Adarsh Gurjar
                </div>
                <p className="text-muted-foreground max-w-sm">
                  Frontend Developer passionate about creating beautiful, 
                  functional, and user-centered digital experiences.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaGithub size={28} />, url: 'https://github.com/adarsh12u', label: 'GitHub' },
                    { icon: <CiLinkedin size={28} />, url: 'https://www.linkedin.com/in/adarsh-gurjar-6170b0249/', label: 'LinkedIn' },
                    { icon: <SiLeetcode size={25} />, url: 'https://leetcode.com/Adarshgurjar123/', label: 'Leetcode' },
                    { icon: <LiaHackerrank size={30} />, url: 'https://www.hackerrank.com/profile/adarsh7470827890', label: 'HackerRank' }
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center text-lg hover:bg-primary hover:scale-110 transition-all duration-300 hover-glow animate-scale-in animate-delay-${index * 100}`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
  
              {/* Quick Links */}
              <div className="space-y-4 animate-fade-in-up animate-delay-200">
                <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                <nav className="space-y-2">
                  {[
                    { label: 'About', href: '#about' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Academics', href: '#academics' },
                    { label: 'Certificates', href: '#certificates' },
                    { label: 'Contact', href: '#contact' }
                  ].map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`block text-muted-foreground hover:text-primary transition-colors duration-300 animate-fade-in-up animate-delay-${(index + 3) * 100}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
  
              {/* Contact Info */}
              <div className="space-y-4 animate-fade-in-up animate-delay-400">
                <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📧</span>
                    <a 
                      href="mailto:john.doe@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      adarsh7470827890@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📱</span>
                    <a 
                      href="tel:+917999427830"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7999427830
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-primary">📍</span>
                    <span className="text-muted-foreground">Indore, MP</span>
                  </div>
                </div>
                
                {/* Availability Badge */}
                <div className="inline-flex items-center space-x-2 bg-cyber-green/20 text-cyber-green px-3 py-2 rounded-full text-sm">
                  <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                  <span>Available for Projects</span>
                </div>
              </div>
            </div>
  
            {/* Bottom Section */}
            <div className="pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="text-center md:text-left animate-fade-in-up animate-delay-600">
                  <p className="text-muted-foreground text-sm">
                    © {currentYear} Adarsh Gurjar. All rights reserved.
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Built with React, TypeScript & Tailwind CSS
                  </p>
                </div>
  
                {/* Back to Top Button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group flex items-center space-x-2 px-4 py-2 bg-secondary/50 hover:bg-primary text-muted-foreground hover:text-white rounded-lg transition-all duration-300 hover-glow animate-fade-in-up animate-delay-700"
                >
                  <span className="text-sm">Back to Top</span>
                  <svg 
                    className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          <div className="h-full bg-gradient-primary animate-gradient" style={{ 
            backgroundSize: '200% 100%',
            animation: 'gradient-shift 3s ease infinite'
          }} />
        </div>
      </footer>
    );
  };
  
  export default Footer;