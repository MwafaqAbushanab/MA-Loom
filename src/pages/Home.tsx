import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Calendar, Bot, Users, Lightbulb, Quote, Star, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import content from '../data/content.json';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-blue/10 dark:from-primary-800 dark:to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary-800 dark:text-white mb-6">
                MA Loom — The Flow Studio
              </h1>
              <p className="text-lg md:text-xl text-primary-600 dark:text-gray-300 mb-6">
                {content.personal.tagline}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We design, automate, and run change‑ready workflows so your teams ship faster, safer, and smarter.
              </p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 group whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Start Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  
                  <Link
                    to="#case-studies"
                    className="inline-flex items-center px-6 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    See Success Stories
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    Free Consultation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    24hr Response
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    Proven Results
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 whitespace-nowrap"
                    download
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            {/* Simple Hero Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-accent-blue/20 to-french-red/20 rounded-full p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-primary-100 dark:bg-primary-700 rounded-full flex items-center justify-center">
                  <div className="text-primary-600 dark:text-white text-6xl font-bold">
                    MA
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-4 h-4 bg-accent-blue rounded-full"></div>
                <div className="absolute bottom-8 left-8 w-3 h-3 bg-french-red rounded-full"></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-spurs-silver rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section className="py-12 bg-gradient-to-r from-accent-blue to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Delivered</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Average Speed Increase</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">40%</div>
              <div className="text-blue-100">Cost Reduction</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">24hr</div>
              <div className="text-blue-100">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-8 bg-primary-50 dark:bg-primary-900 border-y border-primary-200 dark:border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Connect with me on social media
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-6">
                <a
                  href={content.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 dark:text-gray-300 hover:text-accent-blue transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                
                <a
                  href={content.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 dark:text-gray-300 hover:text-accent-blue transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.14-5.09V7.5a8.16 8.16 0 0 0 4.65 1.49v-3.4a4.85 4.85 0 0 1-.36.1z"/>
                  </svg>
                  <span className="text-sm font-medium">@abu.triplets</span>
                </a>
                
                <a
                  href={content.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 dark:text-gray-300 hover:text-accent-blue transition-colors duration-200"
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C24.004 5.367 18.641.001 12.017.001zm5.568 16.756c-.458 1.138-1.364 2.044-2.503 2.503-1.729.692-5.831.532-7.745.532s-6.016.16-7.745-.532c-1.138-.458-2.044-1.364-2.503-2.503-.692-1.729-.532-5.831-.532-7.745s-.16-6.016.532-7.745c.458-1.138 1.364-2.044 2.503-2.503 1.729-.692 5.831-.532 7.745-.532s6.016-.16 7.745.532c1.138.458 2.044 1.364 2.503 2.503.692 1.729.532 5.831.532 7.745s.16 6.016-.532 7.745z"/>
                    <path d="M12.017 7.056c-2.746 0-4.961 2.215-4.961 4.961s2.215 4.961 4.961 4.961 4.961-2.215 4.961-4.961-2.215-4.961-4.961-4.961zm0 8.174c-1.772 0-3.213-1.441-3.213-3.213s1.441-3.213 3.213-3.213 3.213 1.441 3.213 3.213-1.441 3.213-3.213 3.213z"/>
                    <circle cx="17.128" cy="6.873" r="1.158"/>
                  </svg>
                  <span className="text-sm font-medium">@abu.triplets</span>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="text-center">
                <div className="font-bold text-lg text-primary-800 dark:text-white">6</div>
                <div>Languages</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-primary-800 dark:text-white">5+</div>
                <div>Ventures</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-primary-800 dark:text-white">🌍</div>
                <div>Global</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              How We Weave Workflows
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Turning scattered tools and meetings into one delivery rhythm—so your team ships value every week.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.services.map((service) => {
              const IconComponent = service.icon === 'Bot' ? Bot : service.icon === 'Users' ? Users : Lightbulb;
              return (
                <div
                  key={service.id}
                  className="group bg-primary-50 dark:bg-primary-700 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                    service.color === 'accent-blue' ? 'bg-accent-blue' :
                    service.color === 'spurs-navy' ? 'bg-spurs-navy' : 'bg-french-red'
                  }`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-primary-800 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center text-accent-blue hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real results from real companies who transformed their workflows with MA Loom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-primary-800 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
              >
                <Quote className="h-8 w-8 text-accent-blue mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary-800 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-green-100 dark:bg-green-900 rounded-lg p-2">
                    <div className="flex items-center text-green-800 dark:text-green-200 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="font-medium">{testimonial.results}</span>
                    </div>
                  </div>
                </div>
              </div>
            )) || []}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section id="case-studies" className="py-16 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-800 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped organizations achieve measurable results through workflow transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {content.caseStudies?.map((study) => (
              <div
                key={study.id}
                className="bg-primary-50 dark:bg-primary-700 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-1" />
                    {study.timeline}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-3">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-medium">Challenge:</span> {study.challenge}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  <span className="font-medium">Solution:</span> {study.solution}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-primary-800 dark:text-white text-sm">
                    RESULTS ACHIEVED:
                  </h4>
                  {study.results?.map((result, index) => (
                    <div key={index} className="flex items-center text-green-700 dark:text-green-300 text-sm">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {result}
                    </div>
                  )) || []}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {study.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  )) || []}
                </div>
              </div>
            )) || []}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg shadow-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Get Your Free Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Featured Ventures
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Bringing innovative ideas to life through entrepreneurial ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {content.ventures.map((venture) => (
              <div
                key={venture.id}
                className="bg-white dark:bg-primary-800 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {venture.url ? (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-blue/20 dark:from-primary-700 dark:to-primary-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={venture.image} 
                        alt={`${venture.name} logo`}
                        className="w-full h-full object-contain p-3"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 items-center justify-center text-2xl font-bold text-primary-600 dark:text-white hidden">
                        {venture.name.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      {venture.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {venture.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        venture.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {venture.status}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{venture.year}</span>
                    </div>
                  </a>
                ) : (
                  <>
                    <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-blue/20 dark:from-primary-700 dark:to-primary-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={venture.image} 
                        alt={`${venture.name} logo`}
                        className="w-full h-full object-contain p-3"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 items-center justify-center text-2xl font-bold text-primary-600 dark:text-white hidden">
                        {venture.name.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      {venture.name}
                    </h3>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {venture.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className={`px-2 py-1 rounded-full ${
                        venture.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {venture.status}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">{venture.year}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/ventures"
              className="inline-flex items-center px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Ventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-2 inline-block mb-6">
            <span className="text-accent-blue text-sm font-medium">🔥 Limited Time: Free Strategy Session ($500 Value)</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't Let Inefficient Workflows Cost You Another Quarter
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day you wait is revenue lost to competitors with better processes. 
            Join 50+ companies who transformed their operations with MA Loom.
          </p>
          
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">3x</div>
                <div className="text-gray-300 text-sm">Faster Delivery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24hr</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 text-lg shadow-xl transform hover:-translate-y-1"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Claim Your Free Strategy Session
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-200 text-lg"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-sm text-gray-400">
            ⏰ Only 3 consultation slots remaining this month | No commitment required
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;