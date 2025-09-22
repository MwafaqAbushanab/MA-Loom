import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Smartphone, Users, Shield, MapPin, Clock, Star, ArrowRight, ExternalLink, Play } from 'lucide-react';

const Lokio: React.FC = () => {
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);

  const features = [
    {
      title: "Smart Matching",
      description: "Connect with verified locksmith professionals based on location, expertise, and availability.",
      icon: Users
    },
    {
      title: "Real-Time Tracking",
      description: "Track your locksmith's location and estimated arrival time with live updates.",
      icon: MapPin
    },
    {
      title: "Instant Pricing",
      description: "Get transparent, upfront pricing before confirming your service request.",
      icon: Clock
    },
    {
      title: "Verified Professionals",
      description: "All locksmiths are background-checked, licensed, and carry insurance coverage.",
      icon: Shield
    },
    {
      title: "Ratings & Reviews",
      description: "Make informed decisions with detailed ratings and reviews from verified customers.",
      icon: Star
    },
    {
      title: "24/7 Availability",
      description: "Emergency locksmith services available around the clock for urgent situations.",
      icon: Smartphone
    }
  ];

  const mockups = [
    {
      id: "request-flow",
      title: "Request Flow",
      subtitle: "Choose key type, location, request",
      description: "Simple 3-step process to request locksmith services",
      screens: ["Key Selection", "Location Pin", "Service Details"]
    },
    {
      id: "live-job",
      title: "Live Job Card",
      subtitle: "Locksmith ETA, tools, price",
      description: "Real-time tracking and service information",
      screens: ["Locksmith Match", "Live Tracking", "Arrival Notification"]
    },
    {
      id: "locksmith-profile",
      title: "Locksmith Profile",
      subtitle: "Ratings, skills, verification",
      description: "Detailed professional profiles and credentials",
      screens: ["Profile Overview", "Skills & Certifications", "Customer Reviews"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary-800">
      {/* Navigation */}
      <div className="bg-primary-50 dark:bg-primary-900 px-4 py-4">
        <Link 
          to="/ventures" 
          className="inline-flex items-center text-primary-600 dark:text-primary-300 hover:text-accent-blue transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-blue/10 to-spurs-navy/10 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  In Development
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">Service Platform • 2023</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-white mb-6">
                Lokio
              </h1>
              
              <p className="text-xl text-primary-600 dark:text-gray-300 mb-4">
                Smart Access. Delivered.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                A revolutionary locksmith platform that connects customers with verified professionals for quick, reliable, and transparent locksmith services. From emergency lockouts to security upgrades, Lokio makes finding the right locksmith as easy as ordering a ride.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setSelectedMockup('request-flow')}
                  className="inline-flex items-center px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-accent-blue text-accent-blue font-semibold rounded-lg hover:bg-accent-blue hover:text-white transition-colors duration-200"
                >
                  Discuss Partnership
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-blue/20 to-spurs-navy/20 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🔧</div>
                    <div className="text-2xl font-bold text-primary-800 dark:text-white">
                      Lokio
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Smart Access Platform
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-blue/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-spurs-navy/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Smart Features for Modern Access Needs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Lokio combines technology with trust to deliver seamless locksmith services that prioritize safety, transparency, and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-primary-50 dark:bg-primary-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-blue rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Mockups */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Interactive Mockups
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Click to preview the user experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {mockups.map((mockup) => (
              <MockupCard 
                key={mockup.id}
                {...mockup}
                isSelected={selectedMockup === mockup.id}
                onClick={() => setSelectedMockup(mockup.id)}
              />
            ))}
          </div>
          
          {selectedMockup && (
            <div className="bg-white dark:bg-primary-800 rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-2">
                  {mockups.find(m => m.id === selectedMockup)?.title} Demo
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {mockups.find(m => m.id === selectedMockup)?.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockups.find(m => m.id === selectedMockup)?.screens.map((screen, index) => (
                  <div key={screen} className="text-center">
                    <div className="w-48 h-96 mx-auto rounded-3xl bg-gradient-to-b from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 shadow-xl flex flex-col overflow-hidden">
                      <div className="h-16 bg-primary-800 text-white flex items-center justify-center text-sm font-medium">
                        Lokio • {screen}
                      </div>
                      <div className="flex-1 p-4 space-y-3">
                        <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded" />
                        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
                        <div className="h-12 bg-accent-blue/20 rounded" />
                        <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded" />
                        <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded" />
                        <div className="mt-auto">
                          <div className="h-10 bg-accent-blue text-white rounded flex items-center justify-center font-semibold text-sm">
                            {index === 0 ? 'Next' : index === 1 ? 'Track' : 'Confirm'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="font-medium text-primary-800 dark:text-white">{screen}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Step {index + 1}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
            These mockups are interactive placeholders — ready for PNG/SVG exports or realistic mobile screenshots next.
          </p>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                Built for Scale & Security
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Lokio is designed with enterprise-grade security and scalability in mind, ensuring reliable service for both customers and locksmith professionals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-accent-blue rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      GDPR & Privacy Compliant
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built with privacy by design, ensuring user data protection and regulatory compliance.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-spurs-navy rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Real-Time Communication
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      WebSocket-powered live updates for tracking, messaging, and service coordination.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-french-red rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Verified Professional Network
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comprehensive background checks, licensing verification, and performance monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent-blue/20 to-spurs-navy/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-primary-100 dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-primary-600 dark:text-white text-6xl">🔒</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-spurs-navy/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-800 dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Interested in Lokio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're a potential investor, partner, or customer, we'd love to discuss how Lokio is revolutionizing the locksmith industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-accent-blue text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg"
            >
              <Users className="mr-2 h-6 w-6" />
              Partner With Us
            </Link>
            
            <Link
              to="/ventures"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-800 transition-colors duration-200 text-lg"
            >
              View Other Ventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p className="text-sm">Lokio — Smart Access. Delivered. • Prototype ready • GDPR & safety aware</p>
          </div>
        </div>
      </section>
    </div>
  );
};

interface MockupCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  isSelected: boolean;
  onClick: () => void;
}

const MockupCard: React.FC<MockupCardProps> = ({ title, subtitle, isSelected, onClick }) => {
  return (
    <div 
      className={`p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-accent-blue' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="w-40 h-80 rounded-3xl bg-gradient-to-b from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 shadow-inner flex flex-col overflow-hidden mb-4">
          <div className="h-12 bg-primary-800 text-white flex items-center justify-center text-xs font-medium">
            Lokio • mobile preview
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
            <div className="h-10 bg-accent-blue/20 rounded" />
            <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
            <div className="mt-auto h-8 bg-accent-blue text-white rounded flex items-center justify-center font-semibold text-sm">
              {title}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="font-semibold text-primary-800 dark:text-white mb-1">{title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Lokio;