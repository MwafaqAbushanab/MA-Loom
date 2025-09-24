import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Globe, Target, ArrowRight, ExternalLink, Hand, MapPin, Award } from 'lucide-react';

const AlNomanFoundation: React.FC = () => {
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
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900 dark:to-green-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">Non-Profit • 2020</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 dark:text-white mb-6">
                Al-Noman Foundation
              </h1>
              
              <p className="text-xl text-emerald-700 dark:text-gray-300 mb-4">
                Dedicated to humanitarian aid and community development across multiple regions.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The Al-Noman Foundation serves communities through direct humanitarian assistance, 
                sustainable development programs, and educational initiatives that create lasting positive impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.alnoman.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Visit Foundation Website
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200"
                >
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-200 to-green-300 dark:from-emerald-700 dark:to-green-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤝</div>
                    <div className="text-2xl font-bold text-emerald-700 dark:text-white">
                      Al-Noman Foundation
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Humanitarian Aid & Development
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-400/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-green-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Building bridges of hope and opportunity in communities that need it most
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-white">Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide humanitarian aid, educational opportunities, and sustainable development 
                programs that empower communities and create lasting positive change in people's lives.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-white">Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                A world where every community has access to basic necessities, quality education, 
                and opportunities for growth, regardless of geographic or economic barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Our Core Programs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Multi-faceted approach to community development and humanitarian assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Hand,
                title: "Emergency Relief",
                description: "Rapid response humanitarian aid including food, water, shelter, and medical assistance during crises and natural disasters.",
                color: "bg-red-500"
              },
              {
                icon: Users,
                title: "Community Development",
                description: "Long-term programs focused on infrastructure, healthcare access, economic empowerment, and community capacity building.",
                color: "bg-emerald-500"
              },
              {
                icon: Award,
                title: "Education Initiatives",
                description: "Scholarship programs, school construction, literacy campaigns, and vocational training to break cycles of poverty.",
                color: "bg-blue-500"
              },
              {
                icon: Heart,
                title: "Healthcare Access",
                description: "Mobile clinics, health education, vaccination campaigns, and support for local healthcare infrastructure.",
                color: "bg-purple-500"
              },
              {
                icon: MapPin,
                title: "Women's Empowerment",
                description: "Programs supporting women's education, economic independence, leadership development, and community participation.",
                color: "bg-pink-500"
              },
              {
                icon: Globe,
                title: "Refugee Support",
                description: "Comprehensive assistance for displaced populations including shelter, integration support, and advocacy for refugee rights.",
                color: "bg-orange-500"
              }
            ].map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.title}
                  className="bg-white dark:bg-primary-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${program.color} rounded-lg mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Our Impact Since 2020
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Measuring success through the lives we've touched and communities we've strengthened
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "25,000+", label: "People Served", color: "text-emerald-600" },
              { metric: "15", label: "Active Programs", color: "text-blue-600" },
              { metric: "8", label: "Countries Reached", color: "text-purple-600" },
              { metric: "500+", label: "Local Partners", color: "text-orange-600" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-primary-50 dark:bg-primary-700 rounded-xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.metric}
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-emerald-50 dark:bg-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                How You Can Help
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Every contribution, no matter the size, makes a meaningful difference in someone's life. 
                Join us in building a more compassionate and equitable world.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Financial Donations",
                    description: "Direct monetary support for our programs and emergency relief efforts"
                  },
                  {
                    title: "Volunteer Opportunities", 
                    description: "Share your skills and time to support our mission locally or internationally"
                  },
                  {
                    title: "Corporate Partnerships",
                    description: "Partner with us to create sustainable community development programs"
                  },
                  {
                    title: "Awareness & Advocacy",
                    description: "Help spread awareness about humanitarian issues and our mission"
                  }
                ].map((way) => (
                  <div key={way.title} className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                        {way.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {way.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-800 dark:to-green-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-emerald-600 dark:text-white text-6xl">🌍</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 dark:bg-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Together, we can create lasting change and build a better world for all communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.alnoman.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              <ExternalLink className="mr-2 h-6 w-6" />
              Visit Foundation Website
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors duration-200 text-lg"
            >
              Get Involved Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlNomanFoundation;