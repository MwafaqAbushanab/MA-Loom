import React from 'react';
import { Download, Globe, Heart, Users, Target, Sparkles } from 'lucide-react';
import content from '../data/content.json';

const About: React.FC = () => {
  const bioSections = content.personal.bio.split('\n\n');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-blue/10 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-800 dark:text-white mb-6 animate-fade-in">
                About Me
              </h1>
              <p className="text-xl text-primary-600 dark:text-gray-300 mb-8 animate-slide-up">
                {content.personal.title}
              </p>
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="aspect-square bg-gradient-to-br from-accent-blue/20 to-french-red/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-primary-100 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-primary-600 dark:text-white text-6xl font-bold">
                    {content.personal.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-french-red/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white dark:bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {bioSections.map((section, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              My Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide my work and interactions with clients and teams.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                People First
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every solution starts with understanding people and their needs. Technology serves people, not the other way around.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-french-red rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                Results Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focus on measurable outcomes and continuous improvement. Every initiative should deliver tangible value.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-spurs-navy rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Embrace new ideas and technologies while maintaining practical, sustainable approaches to problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Personal */}
      <section className="py-16 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-accent-blue mr-3" />
                <h2 className="text-3xl font-bold text-primary-800 dark:text-white">
                  Languages
                </h2>
              </div>
              
              <div className="space-y-4">
                {content.personal.languages.map((language, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-primary-50 dark:bg-primary-700 rounded-lg">
                    <span className="font-medium text-primary-800 dark:text-white">
                      {language.name}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      language.level === 'Fluent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      language.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Touch */}
            <div>
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-french-red mr-3" />
                <h2 className="text-3xl font-bold text-primary-800 dark:text-white">
                  Personal Side
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-primary-50 dark:bg-primary-700 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                    Family Life
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Proud father of four beautiful children, including triplets! Family life has taught me the importance of 
                    patience, multitasking, and finding joy in the small moments.
                  </p>
                </div>
                
                <div className="p-6 bg-primary-50 dark:bg-primary-700 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                    Philosophy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I believe that every person and organization has untapped potential. My role is to help unlock that 
                    potential through the right combination of people, process, and technology.
                  </p>
                </div>
                
                <div className="p-6 bg-primary-50 dark:bg-primary-700 rounded-xl">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                    Approach
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Goofy enough to keep things fun, structured enough to get results, and always focused on making 
                    complex things simple and achievable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to unlock your organization's potential? Let's discuss how we can achieve your goals together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              Get in Touch
            </a>
            
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-200 text-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;