import React, { useState } from 'react';
import { Mail, Calendar, Send, Linkedin, Instagram, Facebook, Clock, Globe } from 'lucide-react';
import content from '../data/content.json';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    serviceType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        serviceType: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-blue/10 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-white mb-6 animate-fade-in">
            Let's Connect
          </h1>
          <p className="text-xl text-primary-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Ready to transform your business? I'd love to hear about your challenges and explore how we can work together 
            to achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 dark:text-white mb-6">
                Send a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Fill out the form below and I'll get back to you within 24 hours. For urgent matters, 
                feel free to book a call directly.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                      Service Interest
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="automation-ai">Automation & AI Solutions</option>
                      <option value="agile-consulting">Agile & Process Consulting</option>
                      <option value="product-strategy">Product Strategy & Ventures</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                    placeholder="Brief description of what you need"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-800 dark:text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent bg-white dark:bg-primary-700 text-primary-800 dark:text-white"
                    placeholder="Tell me more about your project, challenges, or goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg">
                    <p className="text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent. I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info & Quick Actions */}
            <div>
              <h2 className="text-3xl font-bold text-primary-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">Email</h3>
                    <a
                      href={`mailto:${content.personal.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-blue transition-colors duration-200"
                    >
                      {content.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-french-red rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">Schedule a Call</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Book a 30-minute consultation
                    </p>
                    <a
                      href="https://calendly.com/mwafaq-abushanab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-blue hover:text-blue-700 transition-colors duration-200"
                    >
                      Schedule now →
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-spurs-navy rounded-lg flex items-center justify-center mr-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white">Global Availability</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Working with clients worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                  Connect on Social
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={content.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-gray-300 hover:bg-accent-blue hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={content.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-gray-300 hover:bg-accent-blue hover:text-white transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={content.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-700 rounded-lg flex items-center justify-center text-primary-600 dark:text-gray-300 hover:bg-accent-blue hover:text-white transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-accent-blue mr-2" />
                  <h3 className="font-semibold text-primary-800 dark:text-white">
                    Response Time
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  I typically respond to emails within 24 hours on business days. 
                  For urgent matters, booking a call is the fastest way to connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quick answers to common questions about working together.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What's the best way to get started?",
                answer: "The best first step is to book a 30-minute consultation call where we can discuss your challenges and goals. This helps me understand your needs and provide tailored recommendations."
              },
              {
                question: "Do you work with companies of all sizes?",
                answer: "Yes! I work with startups, scale-ups, and enterprise organizations. My approach adapts to your company's size, culture, and specific needs."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Simple automation projects might take 2-4 weeks, while full agile transformations can span 3-6 months. We'll discuss timelines during our initial consultation."
              },
              {
                question: "Do you offer remote consulting?",
                answer: "Absolutely! I work with clients globally and am experienced in remote collaboration. I also offer on-site consulting when needed and feasible."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-primary-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;