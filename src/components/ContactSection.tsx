import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Add shake animation to form
      const form = e.target as HTMLFormElement;
      form.classList.add('animate-shake');
      setTimeout(() => form.classList.remove('animate-shake'), 500);
      return;
    }

    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/johndoe',
      href: 'https://linkedin.com/in/johndoe'
    }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', url: 'https://github.com', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: '🔗', url: 'https://linkedin.com', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com', color: 'hover:text-pink-400' }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate? Let's discuss your project and bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                        errors.name ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-destructive animate-fade-in-up">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                        errors.email ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-destructive animate-fade-in-up">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${
                        errors.subject ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-destructive animate-fade-in-up">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none ${
                        errors.message ? 'border-destructive' : 'border-border'
                      }`}
                      placeholder="Tell me about your project or just say hello..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-destructive animate-fade-in-up">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg hover-glow hover-scale transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span>✓</span>
                        <span>Message Sent!</span>
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Contact Information
                </h3>
                
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

              {/* Social Media Links */}
              <div className="animate-fade-in-up animate-delay-400">
                <h4 className="text-xl font-semibold mb-6 text-foreground">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-secondary/50 rounded-full flex items-center justify-center text-xl hover:bg-primary hover:scale-110 transition-all duration-300 hover-glow animate-scale-in animate-delay-${index * 100}`}
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 animate-fade-in-up animate-delay-500">
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