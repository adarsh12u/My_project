const AboutSection = () => {

    return (
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            </div>
  
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Bio */}
              <div className="space-y-6 animate-slide-in-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold gradient-text">
                    Passionate Frontend Developer
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a creative frontend developer with a passion for building beautiful, 
                    functional, and user-centered digital experiences. With expertise in modern 
                    web technologies and a keen eye for design, I transform ideas into engaging 
                    web applications.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community. 
                    I believe in continuous learning and staying ahead of industry trends.
                  </p>
                </div>
  
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-8">
                  {[
                    { number: '50+', label: 'Projects Completed' },
                    { number: '3+', label: 'Years Experience' },
                    { number: '100%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`text-center animate-scale-in animate-delay-${(index + 1) * 200}`}
                    >
                      <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* Right Side - Personal Info */}
              <div className="animate-slide-in-right">
                <h3 className="text-2xl font-semibold mb-8 gradient-text">
                  What Drives Me
                </h3>
                
                <div className="space-y-8">
                  {[
                    {
                      title: 'Problem Solving',
                      description: 'I love turning complex challenges into elegant, simple solutions that users actually enjoy using.',
                      icon: '🧩'
                    },
                    {
                      title: 'Continuous Learning',
                      description: 'Technology evolves rapidly, and I stay ahead by constantly learning new tools and techniques.',
                      icon: '📚'
                    },
                    {
                      title: 'User-Centered Design',
                      description: 'Every line of code I write is with the end user in mind, ensuring great experiences.',
                      icon: '🎯'
                    }
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className={`flex items-start space-x-4 p-6 bg-secondary/30 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up animate-delay-${index * 100}`}
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;