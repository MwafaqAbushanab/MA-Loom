import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Store, Users, TrendingUp, Calendar, ArrowRight, MapPin, Coffee, Star, Utensils } from 'lucide-react';

const NomNomCookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-800">
      {/* Navigation */}
      <div className="bg-orange-50 dark:bg-primary-900 px-4 py-4">
        <Link 
          to="/ventures" 
          className="inline-flex items-center text-orange-600 dark:text-primary-300 hover:text-accent-blue transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900 dark:to-amber-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">Food & Beverage • 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-800 dark:text-white mb-6">
                Nom Nom Cookies
              </h1>
              
              <p className="text-xl text-orange-700 dark:text-gray-300 mb-4">
                Cookie & milk pairing franchise bringing gourmet cookie experiences to communities.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                The perfect cookie deserves the perfect milk. Nom Nom Cookies creates artisanal cookie and milk 
                pairing experiences that turn simple moments into memorable indulgences. Our franchise concept 
                brings premium, locally-sourced treats to neighborhoods everywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  <Store className="mr-2 h-5 w-5" />
                  Franchise Opportunities
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-amber-300 dark:from-orange-700 dark:to-amber-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍪</div>
                    <div className="text-2xl font-bold text-orange-700 dark:text-white">
                      Nom Nom Cookies
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Gourmet Cookie & Milk Pairing
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-400/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Overview */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              The Perfect Pairing Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              More than just cookies—we're creating moments of joy through expertly crafted flavor combinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">
                Artisanal Cookie & Milk Pairings
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Each cookie is handcrafted with premium ingredients and paired with specially selected milks 
                to create the ultimate taste experience. From classic chocolate chip with cold whole milk 
                to exotic lavender shortbread with oat milk, every combination is designed to delight.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Premium Ingredients",
                    description: "Belgian chocolate, Madagascar vanilla, locally-sourced butter and organic flour"
                  },
                  {
                    title: "Curated Milk Selection",
                    description: "Whole, almond, oat, coconut, and seasonal specialty milk varieties"
                  },
                  {
                    title: "Expert Pairing Guides",
                    description: "Trained staff help customers discover their perfect cookie-milk combination"
                  },
                  {
                    title: "Seasonal Specialties",
                    description: "Limited-time flavors featuring local and seasonal ingredients"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-primary-800 dark:text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Classic Chocolate Chip", milk: "Cold Whole Milk", emoji: "🍪" },
                { name: "Oatmeal Cranberry", milk: "Vanilla Almond", emoji: "🍪" },
                { name: "Double Fudge Brownie", milk: "Coconut Milk", emoji: "🍪" },
                { name: "Lemon Lavender", milk: "Oat Milk", emoji: "🍪" }
              ].map((pairing) => (
                <div key={pairing.name} className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{pairing.emoji}</div>
                  <h4 className="font-semibold text-orange-800 dark:text-white text-sm mb-1">
                    {pairing.name}
                  </h4>
                  <p className="text-orange-600 dark:text-orange-300 text-xs">
                    + {pairing.milk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Benefits */}
      <section className="py-20 bg-orange-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Why Franchise with Nom Nom Cookies?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join a growing brand that's redefining the cookie experience with proven systems and ongoing support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Proven Business Model",
                description: "Tested franchise system with strong unit economics and repeat customer behavior.",
                color: "bg-orange-500"
              },
              {
                icon: Store,
                title: "Turn-Key Operations",
                description: "Complete setup support including store design, equipment, and training programs.",
                color: "bg-amber-500"
              },
              {
                icon: Users,
                title: "Ongoing Support",
                description: "Marketing assistance, operations guidance, and continuous menu development.",
                color: "bg-yellow-500"
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description: "Assistance with site selection in high-traffic areas and community centers.",
                color: "bg-orange-600"
              },
              {
                icon: Coffee,
                title: "Low Overhead",
                description: "Streamlined operations model with efficient kitchen design and inventory management.",
                color: "bg-amber-600"
              },
              {
                icon: Star,
                title: "Brand Recognition",
                description: "Growing brand awareness through social media marketing and community engagement.",
                color: "bg-yellow-600"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white dark:bg-primary-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${benefit.color} rounded-lg mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Target Market */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-200 dark:from-orange-800 dark:to-amber-900 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-orange-600 dark:text-white text-6xl">🏪</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                Perfect for Every Community
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Nom Nom Cookies thrives in diverse locations, from bustling city centers to 
                cozy suburban neighborhoods, bringing joy to every community we serve.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Family Destinations",
                    description: "Shopping centers, family entertainment districts, and community gathering spots"
                  },
                  {
                    title: "College Towns",
                    description: "Near universities and colleges where students crave comfort food and study snacks"
                  },
                  {
                    title: "Business Districts",
                    description: "Office areas where professionals seek premium treats and quick meeting spots"
                  },
                  {
                    title: "Suburban Communities",
                    description: "Neighborhood locations that become local gathering places for families"
                  }
                ].map((market) => (
                  <div key={market.title} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                        {market.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {market.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 bg-amber-50 dark:bg-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Franchise Investment Overview
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Competitive investment levels with strong potential returns and comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-primary-800 rounded-xl p-8 text-center border-2 border-orange-200 dark:border-orange-700">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-4">
                Initial Investment
              </h3>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                $75k - $150k
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Including franchise fee, equipment, and initial inventory
              </p>
            </div>
            
            <div className="bg-white dark:bg-primary-800 rounded-xl p-8 text-center border-2 border-amber-200 dark:border-amber-700">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-4">
                Projected ROI
              </h3>
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                18-24 months
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Break-even timeline with proper location and operations
              </p>
            </div>
            
            <div className="bg-white dark:bg-primary-800 rounded-xl p-8 text-center border-2 border-yellow-200 dark:border-yellow-700">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-4">
                Store Size
              </h3>
              <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                800-1,200 sq ft
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Efficient layout optimized for high-volume operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 dark:bg-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Bring Nom Nom to Your Community?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join the growing Nom Nom Cookies family and start creating memorable moments 
            in your neighborhood today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              <Calendar className="mr-2 h-6 w-6" />
              Schedule Franchise Meeting
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-200 text-lg"
            >
              Get Franchise Info
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 text-orange-200">
            <p className="text-sm">Nom Nom Cookies — Premium cookie & milk pairing franchise • Community-focused • Proven model</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NomNomCookies;