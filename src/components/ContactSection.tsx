import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from 'react-icons/si';
import { LiaHackerrank } from "react-icons/lia";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "adarsh7470827890@gmail.com",
      href: "mailto:adarsh7470827890@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 7999427830",
      href: "tel:+917999427830",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Indore, MP",
      href: null,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/adarsh-gurjar-6170b0249/",
      href: "https://www.linkedin.com/in/adarsh-gurjar-6170b0249/",
    },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub size={28} /> , url: "https://github.com/adarsh12u" },
    { name: "LinkedIn", icon: <CiLinkedin size={28} /> , url: "https://www.linkedin.com/in/adarsh-gurjar-6170b0249/" },
    { name: "Leetcode", icon: <SiLeetcode size={25} /> , url: "https://leetcode.com/Adarshgurjar123/" },
    { name: "HackerRank", icon: <LiaHackerrank size={30} /> , url: "https://www.hackerrank.com/profile/adarsh7470827890" },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate? Let’s discuss your project and bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form (Getform.io) */}
            <div className="animate-slide-in-left">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>

                <form
                  action="https://getform.io/f/3d8f8591-95c3-4d7b-8461-5905a8bd095b"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border rounded-lg border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border rounded-lg border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border rounded-lg border-border focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border rounded-lg border-border focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg hover-glow hover-scale transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text mb-6">Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className={`flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up animate-delay-${index * 100}`}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:scale-110 transition-all duration-300 hover-glow"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
                  <span className="font-medium text-foreground">Available for Projects</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently open to new opportunities and collaborations. 
                  Let's discuss how we can work together to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
