import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react';
import content from '../data/content.json';

const Ventures: React.FC = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Development':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Planning':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Non-Profit':
        return '🤝';
      case 'Food & Beverage':
        return '🍪';
      case 'Service Platform':
        return '🔧';
      case 'SaaS':
        return '💻';
      case 'E-commerce':
        return '🛍️';
      default:
        return '🚀';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-blue/10 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-white mb-6 animate-fade-in">
            My Ventures
          </h1>
          <p className="text-xl text-primary-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            From concept to reality—exploring innovative ideas and building solutions that make a difference. 
            Each venture represents a journey of learning, creativity, and impact.
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Discuss Your Idea
            </Link>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.ventures.map((venture, index) => (
              <div
                key={venture.id}
                className="group bg-primary-50 dark:bg-primary-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">
                      {getCategoryIcon(venture.category)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-2">
                        {venture.name}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(venture.status)}`}>
                          {venture.status}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {venture.category} • {venture.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="aspect-video bg-gradient-to-br from-accent-blue/20 to-french-red/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={venture.image} 
                    alt={`${venture.name} logo`}
                    className="w-full h-full object-contain p-6"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="absolute inset-0 bg-primary-100/50 dark:bg-primary-600/50 rounded-xl flex items-center justify-center hidden">
                    <div className="text-center">
                      <div className="text-6xl opacity-20 mb-2">
                        {getCategoryIcon(venture.category)}
                      </div>
                      <span className="text-primary-600 dark:text-white font-display font-semibold text-lg">
                        {venture.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {venture.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {venture.id === 'lokio' ? (
                    <Link
                      to="/ventures/lokio"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : venture.id === 'fresh-flow' ? (
                    <Link
                      to="/ventures/fresh-flow"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : venture.id === 'rise-magile' ? (
                    <Link
                      to="/ventures/rise-magile"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                    >
                      Try Live Demo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : venture.url ? (
                    <a
                      href={venture.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  ) : (
                    <button className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-accent-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 group">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  )}
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-accent-blue text-accent-blue font-medium rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200"
                  >
                    Collaborate
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Philosophy */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              My Venture Philosophy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every venture is an opportunity to solve real problems and create meaningful value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Problem-First Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every venture starts with identifying a real problem that needs solving. 
                Technology and business models follow from genuine user needs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-french-red rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Lean Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build fast, test early, learn quickly. Use agile principles to validate 
                assumptions and iterate based on real user feedback.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-spurs-navy rounded-full mb-6 group-hover:scale-110 transition-transform duration-200">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                Sustainable Growth
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focus on building ventures that can scale sustainably while maintaining 
                their core mission and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                Lessons from the Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Each venture has been a learning experience, providing insights that inform 
                both my entrepreneurial approach and my consulting practice.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      User-Centric Design
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The best solutions emerge when you deeply understand your users' pain points and workflows.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-french-red rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      MVP Mindset
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Start simple, launch early, and iterate based on real market feedback rather than assumptions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-spurs-navy rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Team Dynamics
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The right team with aligned values can overcome technical challenges and market obstacles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-blue/20 to-french-red/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-primary-100 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-primary-600 dark:text-white text-6xl">💡</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-french-red/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have an Idea?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to launch a new venture or need strategic guidance for your existing business, 
            let's explore the possibilities together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Discuss Your Venture
            </Link>
            
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-200 text-lg"
            >
              View Consulting Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ventures;