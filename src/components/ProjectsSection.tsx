import { useState } from 'react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with advanced features like real-time inventory, payment processing, and order tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Analytics Dashboard',
      description: 'Interactive dashboard for weather data visualization with charts, maps, and predictive analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      category: 'backend',
      githubUrl: 'https://github.com',
      liveUrl: null,
      featured: false
    },
    {
      id: 5,
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with multiple rooms, file sharing, and video calling features.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      category: 'fullstack',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: true
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with animations, dark mode, and content management system.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Tailwind', 'Framer Motion', 'Sanity'],
      category: 'frontend',
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring web applications and tools built with modern technologies
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animate-delay-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover-glow animate-scale-in animate-delay-${index * 100}`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                    💻
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover-scale"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🔗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 hover-scale"
                        onClick={(e) => e.stopPropagation()}
                      >
                        🚀
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-secondary/50 text-muted-foreground text-xs font-medium rounded-full border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up animate-delay-${(index * 100) + (techIndex * 50)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="View Code"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title="Live Demo"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
            <button className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg hover-glow hover-scale transition-all duration-300">
              View All Projects on GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;