import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Leaf, MapPin, Users, TrendingUp, Heart, Zap, ExternalLink, ArrowRight } from 'lucide-react';

const FreshFlow: React.FC = () => {
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);

  const features = [
    {
      title: "Local & Seasonal Only",
      description: "Procure weekly from local farmers for peak freshness and lower costs.",
      icon: MapPin
    },
    {
      title: "Eco-Friendly Operations",
      description: "Biodegradable cups, no plastic bottles, compostable waste streams, energy-efficient equipment.",
      icon: Leaf
    },
    {
      title: "Smart Recommendations",
      description: "AI-powered pairing in kiosk/app: match smoothies to diet goals and seasonal stock.",
      icon: Zap
    },
    {
      title: "Lean & Scalable",
      description: "Simple menu, prepped mise-en-place, quick training, easy replication across locations.",
      icon: TrendingUp
    }
  ];

  const equipment = [
    "Cold-press juicer (commercial)",
    "High-power blender x2", 
    "Under-counter fridge + prep fridge",
    "Small freezer (fruit prep)",
    "Hand-wash + 2-compartment sink",
    "POS tablet + receipt printer",
    "Eco cup/lid/straw inventory",
    "Cutting boards, knives, storage bins",
    "Label printer + HACCP logs",
    "Overhead menu screen",
    "Waste sorting & compost bins",
    "Back-of-house shelving"
  ];

  const capexItems = [
    { label: "Equipment (press, blenders, cold storage)", value: "€8,000–€9,500" },
    { label: "Kiosk build-out (counter, sinks, electrical)", value: "€4,000–€5,000" },
    { label: "Branding & signage (menu screen, decals)", value: "€1,200–€1,800" },
    { label: "Initial inventory (produce, eco packaging)", value: "€1,200–€1,600" },
    { label: "Permits, insurance, training", value: "€1,000–€1,500" },
    { label: "Contingency (10–15%)", value: "€2,000–€2,500" }
  ];

  const mockups = [
    {
      id: "kiosk-front",
      title: "Front Counter (15 m²)",
      subtitle: "Order window • menu screen • prep behind",
      type: "kiosk" as const
    },
    {
      id: "pos-app",
      title: "Order & Pay (POS/App)",
      subtitle: "Size • sweetness • add-ins • Apple/Google Pay",
      type: "phone" as const
    },
    {
      id: "menu-board",
      title: "Menu Board",
      subtitle: "Seasonal lineup • badges: local/vegan/no-added-sugar",
      type: "phone" as const
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-primary-800">
      {/* Navigation */}
      <div className="bg-emerald-50 dark:bg-primary-900 px-4 py-4">
        <Link 
          to="/ventures" 
          className="inline-flex items-center text-emerald-600 dark:text-primary-300 hover:text-emerald-700 transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Planning
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">Food & Beverage • 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 dark:text-white mb-6">
                Fresh Flow
              </h1>
              
              <p className="text-xl text-emerald-600 dark:text-gray-300 mb-4">
                Eco-Tech Juice • Fresh, seasonal, locally sourced — powered by smart ops.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                An eco-tech juice kiosk brand serving cold-pressed juices, smoothies, and healthy snacks made only with seasonal, local produce. The model is lean (setup under €20,000), sustainable, and franchise-ready for young entrepreneurs.
              </p>

              <p className="text-sm text-emerald-600 dark:text-emerald-400 mb-8">
                Pilot location target: Hanau Mall • Sourcing from Hanau Marktplatz farmers
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setSelectedMockup('kiosk-front')}
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  View Kiosk Design
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-600 hover:text-white transition-colors duration-200"
                >
                  Join Waitlist
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-800 dark:to-green-900 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥤</div>
                    <div className="text-2xl font-bold text-emerald-800 dark:text-white">
                      Fresh Flow
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Eco-Tech Juice Platform
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

      {/* Key Features */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Smart Features for Sustainable Juice Operations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Fresh Flow combines technology with sustainability to deliver premium juice experiences that benefit communities and the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-emerald-50 dark:bg-primary-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-600 rounded-lg mb-4">
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

      {/* Business Model & Specs */}
      <section className="py-20 bg-emerald-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kiosk Specs */}
            <div>
              <h2 className="text-3xl font-bold text-emerald-800 dark:text-white mb-6">
                Kiosk Specs & Operations
              </h2>
              
              <div className="bg-white dark:bg-primary-800 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">Key Specifications</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="font-semibold text-emerald-600 min-w-[100px]">Footprint:</span>
                    <span className="text-gray-600 dark:text-gray-400">~15 m² kiosk (front counter + back prep + small dry/cold storage)</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-emerald-600 min-w-[100px]">Throughput:</span>
                    <span className="text-gray-600 dark:text-gray-400">60–90 drinks/hour at peak with 2 staff</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-emerald-600 min-w-[100px]">Menu:</span>
                    <span className="text-gray-600 dark:text-gray-400">Cold-pressed juices, smoothies, infused waters, oat/coconut milks, seasonal snacks</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-semibold text-emerald-600 min-w-[100px]">Safety:</span>
                    <span className="text-gray-600 dark:text-gray-400">HACCP-aligned prep, color-coded tools, daily temp logs</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-primary-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">Starter Equipment List</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {equipment.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"/>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Investment & Returns */}
            <div>
              <h2 className="text-3xl font-bold text-emerald-800 dark:text-white mb-6">
                Investment & Returns
              </h2>
              
              <div className="bg-white dark:bg-primary-800 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                  Estimated CapEx (≤ €20,000)
                </h3>
                <div className="space-y-3">
                  {capexItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-emerald-50 dark:bg-primary-700 rounded border">
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item.label}</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-3 text-gray-500 dark:text-gray-400">
                  Ranges are indicative; final costs depend on mall utilities, supplier quotes, and used/new equipment mix.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-primary-800 rounded-xl p-6">
                  <div className="text-xs uppercase tracking-wide text-emerald-600 font-semibold">Business Model</div>
                  <div className="mt-1 font-bold text-primary-800 dark:text-white">Accessible Growth</div>
                  <div className="mt-2 text-sm space-y-2">
                    <div>Per-kiosk revenue: <span className="font-semibold">€150k–€200k/year</span></div>
                    <div>Franchise fee: <span className="font-semibold">€5,000</span> (rising to €7,000 after 20 kiosks)</div>
                    <div>Royalties: 6–8% of net sales + 1% brand fund</div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-primary-800 rounded-xl p-6">
                  <div className="text-xs uppercase tracking-wide text-emerald-600 font-semibold">Location Strategy</div>
                  <div className="mt-1 font-bold text-primary-800 dark:text-white">Malls & Stations</div>
                  <div className="mt-2 text-sm space-y-2">
                    <div>High footfall, health-forward demand</div>
                    <div>Compact 15 m² footprint fits existing bays</div>
                    <div>Local sourcing stories boost engagement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Mockups */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Kiosk & App Mockups
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Click to preview the customer experience
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
            <div className="bg-emerald-50 dark:bg-primary-900 rounded-2xl p-8 shadow-xl animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-white mb-2">
                  {mockups.find(m => m.id === selectedMockup)?.title} Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {mockups.find(m => m.id === selectedMockup)?.subtitle}
                </p>
              </div>
              
              <div className="flex justify-center">
                {mockups.find(m => m.id === selectedMockup)?.type === 'kiosk' ? (
                  <div className="w-full max-w-2xl aspect-video rounded-xl bg-gradient-to-br from-emerald-100 to-white dark:from-emerald-800 dark:to-emerald-900 shadow-inner p-6 grid grid-cols-12 gap-3">
                    <div className="col-span-12 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-semibold text-sm">
                      Fresh Flow Kiosk
                    </div>
                    <div className="col-span-8 h-32 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500 text-sm">
                      Order Counter
                    </div>
                    <div className="col-span-4 h-32 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center text-gray-500 text-sm">
                      Prep Area
                    </div>
                    <div className="col-span-12 h-6 bg-emerald-200 dark:bg-emerald-700 rounded"></div>
                  </div>
                ) : (
                  <div className="w-48 h-96 rounded-3xl bg-gradient-to-b from-emerald-100 to-white dark:from-emerald-800 dark:to-emerald-900 shadow-xl flex flex-col overflow-hidden">
                    <div className="h-16 bg-emerald-700 text-white flex items-center justify-center text-sm font-medium">
                      Fresh Flow • {mockups.find(m => m.id === selectedMockup)?.title}
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                      <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded" />
                      <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
                      <div className="h-12 bg-emerald-100 dark:bg-emerald-700 rounded" />
                      <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
                      <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
                      <div className="mt-auto">
                        <div className="h-10 bg-emerald-600 text-white rounded flex items-center justify-center font-semibold text-sm">
                          Order Now
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <p className="mt-8 text-sm text-center text-gray-500 dark:text-gray-400">
            Need export files? We can deliver PNG/SVG of the kiosk facade, menu board, and printable one-pager PDF.
          </p>
        </div>
      </section>

      {/* Sustainability & Smart Ops */}
      <section className="py-20 bg-emerald-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-white mb-6">
                Sustainability & Smart Operations
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Fresh Flow is designed with sustainability at its core, targeting ≤ 5% produce loss through smart operations and local sourcing.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Zero-Waste Operations
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Biodegradable packaging, supplier proximity (&lt; 30km), surplus-to-snack recipes, and weekly waste audits.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Smart Forecasting
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      POS analytics to forecast produce by daypart & weather, reducing waste and optimizing inventory.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                      Operational Excellence
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Prep guides reduce variance, speed onboarding, and digital checklists for open/close, HACCP, and cleaning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-primary-800 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wide text-emerald-600 font-semibold">Sustainability Stack</div>
                <div className="mt-1 font-bold text-primary-800 dark:text-white">Proof Points</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Biodegradable packaging, supplier proximity (&lt; 30km), surplus-to-snack recipes, energy-efficient kit, and weekly waste audits to target ≤ 5% produce loss.
                </div>
              </div>

              <div className="bg-white dark:bg-primary-800 rounded-xl p-6">
                <div className="text-xs uppercase tracking-wide text-emerald-600 font-semibold">Smart Operations</div>
                <div className="mt-1 font-bold text-primary-800 dark:text-white">Data-Driven</div>
                <div className="mt-2 text-sm space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0"/>
                    <span className="text-gray-600 dark:text-gray-400">POS analytics for demand forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0"/>
                    <span className="text-gray-600 dark:text-gray-400">Prep guides reduce variance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 w-1 h-1 rounded-full bg-emerald-500 flex-shrink-0"/>
                    <span className="text-gray-600 dark:text-gray-400">Digital checklists for operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 dark:bg-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Fresh Flow?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Whether you're interested in franchising, partnering as a mall/station, or investing in the future of sustainable juice operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors duration-200 text-lg"
            >
              <Users className="mr-2 h-6 w-6" />
              Join Waitlist
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-700 transition-colors duration-200 text-lg"
            >
              Partner With Us
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              to="/ventures"
              className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-emerald-100 font-semibold rounded-lg hover:bg-emerald-400 hover:text-emerald-800 transition-colors duration-200 text-lg"
            >
              View Other Ventures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="mt-8 text-emerald-200">
            <p className="text-sm">Fresh Flow — Eco-Tech Juice • Lean setup • Local sourcing • Franchise-ready</p>
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
  type: 'kiosk' | 'phone';
  isSelected: boolean;
  onClick: () => void;
}

const MockupCard: React.FC<MockupCardProps> = ({ title, subtitle, type, isSelected, onClick }) => {
  return (
    <div 
      className={`p-6 bg-white dark:bg-primary-800 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        isSelected ? 'ring-2 ring-emerald-500' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        {type === 'kiosk' ? (
          <div className="w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-emerald-100 to-white dark:from-emerald-800 dark:to-emerald-900 shadow-inner p-4 grid grid-cols-12 gap-2 mb-4">
            <div className="col-span-12 h-6 bg-emerald-600/80 rounded" />
            <div className="col-span-8 h-24 bg-gray-100 dark:bg-gray-700 rounded" />
            <div className="col-span-4 h-24 bg-gray-200 dark:bg-gray-600 rounded" />
            <div className="col-span-12 h-4 bg-emerald-200 dark:bg-emerald-700 rounded" />
          </div>
        ) : (
          <div className="w-40 h-80 rounded-3xl bg-gradient-to-b from-emerald-100 to-white dark:from-emerald-800 dark:to-emerald-900 shadow-inner flex flex-col overflow-hidden mb-4">
            <div className="h-12 bg-emerald-700 text-white flex items-center justify-center text-xs font-medium">
              Fresh Flow • app preview
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="h-8 bg-gray-200 dark:bg-gray-600 rounded" />
              <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded w-3/4" />
              <div className="h-10 bg-emerald-100 dark:bg-emerald-700 rounded" />
              <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded" />
              <div className="mt-auto h-8 bg-emerald-600 text-white rounded flex items-center justify-center font-semibold text-sm">
                {title}
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <div className="font-semibold text-primary-800 dark:text-white mb-1">{title}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default FreshFlow;