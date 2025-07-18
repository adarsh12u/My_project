const AcademicsSection = () => {
    const academics = [
      {
        degree: "Bachelor of Computer Science",
        institution: "University of Technology",
        year: "2020 - 2024",
        gpa: "3.8/4.0",
        achievements: [
          "Graduated Magna Cum Laude",
          "Dean's List for 6 semesters",
          "Outstanding Project in Web Development"
        ],
        description: "Specialized in Software Engineering with focus on Web Technologies and User Experience Design."
      },
      {
        degree: "Full Stack Web Development Bootcamp",
        institution: "Tech Academy",
        year: "2019",
        gpa: "Certificate",
        achievements: [
          "Top 5% of cohort",
          "Best Final Project Award",
          "Mentored junior students"
        ],
        description: "Intensive 6-month program covering modern web development stack including React, Node.js, and database management."
      },
      {
        degree: "High School Diploma",
        institution: "Central High School",
        year: "2016 - 2020",
        gpa: "3.9/4.0",
        achievements: [
          "Valedictorian",
          "Computer Science Club President",
          "National Honor Society"
        ],
        description: "Strong foundation in mathematics and computer science with advanced placement courses."
      }
    ];
  
    return (
      <section id="academics" className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-accent animate-gradient" />
        </div>
  
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Academic <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A timeline of my educational achievements and academic milestones
              </p>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
            </div>
  
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary opacity-30 hidden lg:block" />
              
              {academics.map((academic, index) => (
                <div
                  key={index}
                  className={`relative mb-16 lg:mb-20 animate-fade-in-up animate-delay-${index * 200}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-glow hidden lg:block z-10" />
                  
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Content */}
                    <div className={`${
                      index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16'
                    } animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 hover-glow">
                        {/* Year Badge */}
                        <div className={`inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full mb-4 ${
                          index % 2 === 0 ? 'lg:float-right lg:ml-4' : 'lg:float-left lg:mr-4'
                        }`}>
                          {academic.year}
                        </div>
                        
                        {/* Degree */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {academic.degree}
                        </h3>
                        
                        {/* Institution */}
                        <h4 className="text-xl gradient-text font-semibold mb-4">
                          {academic.institution}
                        </h4>
                        
                        {/* GPA */}
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="text-sm text-muted-foreground">GPA:</span>
                          <span className="text-lg font-semibold text-primary">{academic.gpa}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {academic.description}
                        </p>
                        
                        {/* Achievements */}
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {academic.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-center space-x-3 text-muted-foreground"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Academic Icon/Visual */}
                    <div className={`hidden lg:block ${
                      index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'
                    }`}>
                      <div className={`text-center animate-scale-in animate-delay-${index * 200 + 300}`}>
                        <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-6xl text-white shadow-intense">
                          {index === 0 ? '🎓' : index === 1 ? '💻' : '📚'}
                        </div>
                        <div className="mt-4 text-lg font-semibold gradient-text">
                          {index === 0 ? 'University' : index === 1 ? 'Bootcamp' : 'High School'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Academic Stats */}
            <div className="mt-20 grid md:grid-cols-4 gap-8">
              {[
                { icon: '🏆', number: '4+', label: 'Years Studying' },
                { icon: '📊', number: '3.8', label: 'Average GPA' },
                { icon: '🥇', number: '15+', label: 'Awards Received' },
                { icon: '📚', number: '50+', label: 'Courses Completed' }
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
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AcademicsSection;