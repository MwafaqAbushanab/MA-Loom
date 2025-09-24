import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Palette, ShoppingBag, Sparkles, TrendingUp, ArrowRight, Star, Package, Users, Zap } from 'lucide-react';

const SevenURyeahStudio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-800">
      {/* Navigation */}
      <div className="bg-purple-50 dark:bg-primary-900 px-4 py-4">
        <Link 
          to="/ventures" 
          className="inline-flex items-center text-purple-600 dark:text-primary-300 hover:text-accent-blue transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">E-commerce • 2021</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800 dark:text-white mb-6">
                7URyeah Studio
              </h1>
              
              <p className="text-xl text-purple-700 dark:text-gray-300 mb-4">
                Freedom concept store & collectibles platform for unique lifestyle products.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Where creativity meets freedom. 7URyeah Studio curates extraordinary lifestyle products, 
                limited-edition collectibles, and artistic pieces that express individuality and celebrate 
                personal freedom. Every item tells a story of authenticity and creative expression.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Explore Collections
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors duration-200"
                >
                  Partner with Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 dark:from-purple-700 dark:to-pink-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛍️</div>
                    <div className="text-2xl font-bold text-purple-700 dark:text-white">
                      7URyeah Studio
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Freedom Concept Store
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-pink-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Freedom Through Expression
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Every product in our collection represents a choice to be different, to express authenticity, 
              and to celebrate the freedom to be uniquely you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">
                Curated for Authentic Living
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                We believe that the things you surround yourself with should reflect who you truly are. 
                Our collection spans artistic collectibles, lifestyle accessories, freedom-inspired apparel, 
                and unique home pieces that can't be found anywhere else.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Limited Edition Collectibles",
                    description: "Exclusive artistic pieces and designer collaborations with numbered authenticity"
                  },
                  {
                    title: "Freedom-Inspired Lifestyle",
                    description: "Clothing, accessories, and gear that celebrate independence and self-expression"
                  },
                  {
                    title: "Artisan Partnerships",
                    description: "Direct relationships with creators and artists for unique, handcrafted items"
                  },
                  {
                    title: "Sustainable Choices",
                    description: "Eco-conscious products that align with values of freedom and responsibility"
                  }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
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
                { name: "Artistic Collectibles", category: "Limited Edition", emoji: "🎨" },
                { name: "Freedom Apparel", category: "Lifestyle", emoji: "👕" },
                { name: "Designer Accessories", category: "Premium", emoji: "💎" },
                { name: "Home & Decor", category: "Curated", emoji: "🏠" }
              ].map((collection) => (
                <div key={collection.name} className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <div className="text-3xl mb-2">{collection.emoji}</div>
                  <h4 className="font-semibold text-purple-800 dark:text-white text-sm mb-1">
                    {collection.name}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-300 text-xs">
                    {collection.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-purple-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              More Than Just Shopping
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              7URyeah Studio is a complete lifestyle platform connecting creators, collectors, and free spirits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Creator Marketplace",
                description: "Platform for independent artists and designers to showcase and sell their unique creations.",
                color: "bg-purple-500"
              },
              {
                icon: Package,
                title: "Collector's Hub",
                description: "Exclusive access to limited releases, early previews, and authentication services.",
                color: "bg-pink-500"
              },
              {
                icon: Users,
                title: "Community Stories",
                description: "Share how our products inspire your journey toward authentic self-expression.",
                color: "bg-indigo-500"
              },
              {
                icon: Star,
                title: "Authenticity Guarantee",
                description: "Every item comes with verification of authenticity and creator provenance.",
                color: "bg-purple-600"
              },
              {
                icon: Zap,
                title: "Flash Drops",
                description: "Surprise releases of ultra-limited items for our most dedicated community members.",
                color: "bg-pink-600"
              },
              {
                icon: TrendingUp,
                title: "Investment Pieces",
                description: "Curated selection of collectibles with potential for appreciation and resale value.",
                color: "bg-indigo-600"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-primary-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.color} rounded-lg mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Collections Preview */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Current Collections
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our carefully curated selection of freedom-inspired lifestyle products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Urban Freedom Collection",
                description: "Street-inspired apparel and accessories for the modern free spirit",
                items: "24 pieces",
                status: "Available Now",
                gradient: "from-purple-400 to-pink-400"
              },
              {
                title: "Artisan Collective Series",
                description: "Hand-crafted pieces from independent creators worldwide",
                items: "16 pieces",
                status: "Limited Edition",
                gradient: "from-indigo-400 to-purple-400"
              },
              {
                title: "Digital Nomad Essentials",
                description: "Travel-ready gear for location-independent lifestyles",
                items: "32 pieces",
                status: "New Arrivals",
                gradient: "from-pink-400 to-red-400"
              }
            ].map((collection, index) => (
              <div
                key={collection.title}
                className="group cursor-pointer"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`aspect-square bg-gradient-to-br ${collection.gradient} rounded-2xl p-8 mb-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-4">✨</div>
                      <div className="text-lg font-semibold">{collection.items}</div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                    {collection.description}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {collection.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Values */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/50 dark:to-pink-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-300 dark:from-purple-700 dark:to-pink-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-xl flex items-center justify-center">
                  <div className="text-purple-600 dark:text-white text-6xl">🌟</div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-400/20 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-400/20 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                Join the Freedom Movement
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                7URyeah Studio isn't just about products—it's about building a community of 
                individuals who choose to live authentically and support creative freedom.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Support Independent Creators",
                    description: "Every purchase directly supports artists, designers, and makers pursuing their creative vision"
                  },
                  {
                    title: "Sustainable & Ethical",
                    description: "Committed to responsible sourcing and supporting fair-trade creative partnerships"
                  },
                  {
                    title: "Express Your Story",
                    description: "Each item is chosen to help you tell your unique story and express your authentic self"
                  },
                  {
                    title: "Limited & Exclusive",
                    description: "No mass production—everything we offer is carefully limited to maintain uniqueness"
                  }
                ].map((value) => (
                  <div key={value.title} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Express Your Freedom?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discover unique pieces that celebrate your individuality and support creative freedom. 
            Join our community of authentic self-expressers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              Explore Collections
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 text-lg"
            >
              Become a Creator Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 text-purple-200">
            <p className="text-sm">7URyeah Studio — Freedom concept store • Authentic lifestyle products • Supporting independent creators</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SevenURyeahStudio;