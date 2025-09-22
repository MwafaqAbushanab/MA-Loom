import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Users, Lightbulb, ArrowRight, Check, Calendar } from 'lucide-react';
import content from '../data/content.json';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return Bot;
      case 'Users':
        return Users;
      case 'Lightbulb':
        return Lightbulb;
      default:
        return Bot;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent-blue':
        return {
          bg: 'bg-accent-blue',
          border: 'border-accent-blue',
          text: 'text-accent-blue',
          bgLight: 'bg-accent-blue/10',
          hover: 'hover:bg-accent-blue'
        };
      case 'spurs-navy':
        return {
          bg: 'bg-spurs-navy',
          border: 'border-spurs-navy',
          text: 'text-spurs-navy',
          bgLight: 'bg-spurs-navy/10',
          hover: 'hover:bg-spurs-navy'
        };
      case 'french-red':
        return {
          bg: 'bg-french-red',
          border: 'border-french-red',
          text: 'text-french-red',
          bgLight: 'bg-french-red/10',
          hover: 'hover:bg-french-red'
        };
      default:
        return {
          bg: 'bg-accent-blue',
          border: 'border-accent-blue',
          text: 'text-accent-blue',
          bgLight: 'bg-accent-blue/10',
          hover: 'hover:bg-accent-blue'
        };
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-blue/10 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-white mb-6 animate-fade-in">
            Services
          </h1>
          <p className="text-xl text-primary-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Transform your business with expert automation, agile practices, and strategic innovation. 
            Let's unlock your organization's potential together.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {content.services.map((service, index) => {
              const IconComponent = getIcon(service.icon);
              const colors = getColorClasses(service.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-xl mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`h-5 w-5 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`inline-flex items-center px-6 py-3 border-2 ${colors.border} ${colors.text} font-semibold rounded-lg ${colors.hover} hover:text-white transition-colors duration-200 group`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                  
                  {/* Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className={`aspect-square ${colors.bgLight} rounded-2xl p-8 relative overflow-hidden`}>
                      <div className="w-full h-full bg-white dark:bg-primary-700 rounded-xl flex items-center justify-center relative">
                        <IconComponent className={`h-24 w-24 ${colors.text}`} />
                        
                        {/* Decorative elements */}
                        <div className={`absolute top-4 right-4 w-4 h-4 ${colors.bg} rounded-full`}></div>
                        <div className={`absolute bottom-6 left-6 w-3 h-3 ${colors.bg} rounded-full opacity-60`}></div>
                        <div className={`absolute top-1/2 left-4 w-2 h-2 ${colors.bg} rounded-full opacity-40`}></div>
                      </div>
                      
                      {/* Background pattern */}
                      <div className={`absolute -top-4 -right-4 w-24 h-24 ${colors.bg} opacity-10 rounded-full`}></div>
                      <div className={`absolute -bottom-6 -left-6 w-32 h-32 ${colors.bg} opacity-5 rounded-full`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              How We Work Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A proven approach to delivering results that matter to your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your challenges, goals, and current state to identify opportunities.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a tailored roadmap with clear milestones and measurable outcomes.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Executing solutions with agile practices, ensuring flexibility and continuous feedback.'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitoring results, gathering insights, and continuously improving for sustained success.'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue text-white font-bold text-lg rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose MABU */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Why Choose MABU Agency?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Years of experience helping organizations transform and scale their operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Expertise',
                description: 'Certified in SAFe, Scrum, and modern automation technologies with real-world implementation experience.',
                icon: '🎯'
              },
              {
                title: 'Practical Approach',
                description: 'No theoretical frameworks—only proven methodologies that have delivered results across various industries.',
                icon: '⚡'
              },
              {
                title: 'End-to-End Solutions',
                description: 'From strategy to implementation, we provide comprehensive support throughout your transformation journey.',
                icon: '🔄'
              },
              {
                title: 'Multilingual Support',
                description: 'Fluent in multiple languages to work effectively with diverse, global teams and stakeholders.',
                icon: '🌍'
              },
              {
                title: 'Agile Mindset',
                description: 'Embrace change, iterate quickly, and deliver value incrementally with continuous feedback loops.',
                icon: '🚀'
              },
              {
                title: 'Personal Touch',
                description: 'Direct access to experienced leadership—no middlemen, just personalized service and attention.',
                icon: '🤝'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your challenges and explore how we can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Book a Free Consultation
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-200 text-lg"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;