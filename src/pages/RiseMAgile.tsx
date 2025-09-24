import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Clock, Target, BarChart3, Zap, Play, RotateCcw, CheckCircle, TrendingUp, Star, ExternalLink, ArrowRight, HelpCircle, Info } from 'lucide-react';
import SocialShare from '../components/SocialShare';

interface StoryPoint {
  id: string;
  story: string;
  complexity: number;
  finalEstimate?: number;
  votes: { [userId: string]: number };
}

interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

const RiseMAgile: React.FC = () => {
  const [selectedPoints, setSelectedPoints] = useState<number | null>(null);
  const [currentStory, setCurrentStory] = useState(0);
  const [sessionPhase, setSessionPhase] = useState<'voting' | 'reveal' | 'discuss' | 'completed'>('voting');
  const [teamVotes, setTeamVotes] = useState<{ [userId: string]: number }>({});
  const [sessionStats, setSessionStats] = useState({ storiesCompleted: 0, totalTime: 0, avgAccuracy: 0 });
  const [showSizingGuide, setShowSizingGuide] = useState(false);

  const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  
  // Animal metaphors for story points to help with relative sizing
  const animalMetaphors = {
    1: { animal: '🐜', name: 'Ant', description: 'Tiny task - fix typo, update text' },
    2: { animal: '🐿️', name: 'Squirrel', description: 'Small task - add button, simple validation' },
    3: { animal: '🐰', name: 'Rabbit', description: 'Quick task - basic form, simple component' },
    5: { animal: '🐱', name: 'Cat', description: 'Medium task - user authentication, API integration' },
    8: { animal: '🐺', name: 'Wolf', description: 'Complex task - dashboard page, search feature' },
    13: { animal: '🦌', name: 'Deer', description: 'Large task - payment system, reporting module' },
    21: { animal: '🐎', name: 'Horse', description: 'Very large - complete user management system' },
    34: { animal: '🦏', name: 'Rhino', description: 'Huge task - entire feature overhaul' },
    55: { animal: '🐘', name: 'Elephant', description: 'Epic task - major system redesign' },
    89: { animal: '🐋', name: 'Whale', description: 'Massive - needs to be broken down first!' }
  };
  
  const mockTeam: User[] = [
    { id: '1', name: 'Alex (You)', role: 'Product Owner', avatar: '👨‍💼' },
    { id: '2', name: 'Sarah', role: 'Senior Dev', avatar: '👩‍💻' },
    { id: '3', name: 'Mike', role: 'UI Designer', avatar: '🎨' },
    { id: '4', name: 'Lisa', role: 'QA Engineer', avatar: '🔍' }
  ];

  const demoStories: StoryPoint[] = [
    {
      id: '1',
      story: 'As a user, I want to reset my password so that I can regain access to my account',
      complexity: 3,
      votes: {}
    },
    {
      id: '2', 
      story: 'As a product manager, I want to see real-time analytics dashboard so that I can make data-driven decisions',
      complexity: 13,
      votes: {}
    },
    {
      id: '3',
      story: 'As a user, I want to receive email notifications for important updates so that I stay informed',
      complexity: 5,
      votes: {}
    },
    {
      id: '4',
      story: 'As an admin, I want to implement two-factor authentication so that user accounts are more secure',
      complexity: 8,
      votes: {}
    }
  ];

  const [stories, setStories] = useState<StoryPoint[]>(demoStories);

  // Simulate team voting
  useEffect(() => {
    if (sessionPhase === 'voting' && selectedPoints !== null) {
      const timer = setTimeout(() => {
        // Simulate other team members voting
        const newVotes: { [userId: string]: number } = {
          '1': selectedPoints, // User's vote
        };

        // Simulate realistic team voting patterns
        mockTeam.slice(1).forEach(member => {
          const baseEstimate = stories[currentStory].complexity;
          const variance = Math.random() * 0.4 - 0.2; // ±20% variance
          const estimate = Math.round(baseEstimate * (1 + variance));
          const closestFib = fibonacciSequence.reduce((prev, curr) => 
            Math.abs(curr - estimate) < Math.abs(prev - estimate) ? curr : prev
          );
          newVotes[member.id] = closestFib;
        });

        setTeamVotes(newVotes);
        setSessionPhase('reveal');
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [selectedPoints, sessionPhase]);

  const handleVote = (points: number) => {
    if (sessionPhase === 'voting') {
      setSelectedPoints(points);
    }
  };


  const handleNextStory = () => {
    const finalEstimate = calculateConsensus();
    
    // Update story with final estimate
    setStories(prev => prev.map((story, index) => 
      index === currentStory 
        ? { ...story, finalEstimate, votes: teamVotes }
        : story
    ));

    if (currentStory < stories.length - 1) {
      setCurrentStory(prev => prev + 1);
      setSelectedPoints(null);
      setTeamVotes({});
      setSessionPhase('voting');
      setSessionStats(prev => ({ 
        ...prev, 
        storiesCompleted: prev.storiesCompleted + 1 
      }));
    } else {
      setSessionPhase('completed');
      setSessionStats(prev => ({ 
        ...prev, 
        storiesCompleted: prev.storiesCompleted + 1,
        avgAccuracy: 85 + Math.random() * 10 // Simulate accuracy
      }));
    }
  };

  const resetDemo = () => {
    setCurrentStory(0);
    setSelectedPoints(null);
    setTeamVotes({});
    setSessionPhase('voting');
    setSessionStats({ storiesCompleted: 0, totalTime: 0, avgAccuracy: 0 });
    setStories(demoStories.map(story => ({ ...story, finalEstimate: undefined, votes: {} })));
  };

  const calculateConsensus = (): number => {
    const votes = Object.values(teamVotes);
    const avg = votes.reduce((sum, vote) => sum + vote, 0) / votes.length;
    return fibonacciSequence.reduce((prev, curr) => 
      Math.abs(curr - avg) < Math.abs(prev - avg) ? curr : prev
    );
  };

  const getVoteSpread = () => {
    const votes = Object.values(teamVotes);
    return votes.length > 0 ? Math.max(...votes) - Math.min(...votes) : 0;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-primary-800">
      {/* Navigation */}
      <div className="bg-spurs-navy/10 dark:bg-primary-900 px-4 py-4">
        <Link 
          to="/ventures" 
          className="inline-flex items-center text-spurs-navy dark:text-primary-300 hover:text-accent-blue transition-colors duration-200"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ventures
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-spurs-navy/10 to-blue-100 dark:from-primary-800 dark:to-primary-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
                <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm">SaaS • 2022</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spurs-navy dark:text-white mb-6">
                Rise MAgile
              </h1>
              
              <p className="text-xl text-spurs-navy/80 dark:text-gray-300 mb-4">
                Story-pointing tool for Agile teams to improve estimation accuracy and velocity.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Transform your sprint planning with data-driven estimation. Rise MAgile uses intelligent algorithms and team collaboration to deliver 40% more accurate story points and faster sprint planning sessions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-6 py-3 bg-spurs-navy text-white font-semibold rounded-lg hover:bg-spurs-navy/90 transition-colors duration-200"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Try Live Demo
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-spurs-navy text-spurs-navy font-semibold rounded-lg hover:bg-spurs-navy hover:text-white transition-colors duration-200"
                >
                  Get Early Access
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Social Share */}
              <SocialShare
                url={typeof window !== 'undefined' ? window.location.href : 'https://ma-loom.com/ventures/rise-magile'}
                title="Rise MAgile - Story Pointing with Animal Metaphors"
                description="Interactive story pointing tool for Agile teams with animal metaphors to improve estimation accuracy. Try our live demo!"
              />
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-spurs-navy/20 to-blue-200 dark:from-spurs-navy/30 dark:to-blue-900 rounded-3xl p-8 relative overflow-hidden">
                <div className="w-full h-full bg-white dark:bg-primary-700 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <div className="text-2xl font-bold text-spurs-navy dark:text-white">
                      Rise MAgile
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Agile Estimation Platform
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-spurs-navy/20 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-400/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animal Sizing Introduction */}
      <section className="py-16 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Story Points Made Simple
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Learn estimation with our animal-based sizing system. No more confusion about relative complexity!
            </p>
          </div>
          
          <div className="bg-white dark:bg-primary-800 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[1, 2, 3, 5, 8].map((points) => (
                <div key={points} className="text-center p-4 bg-primary-50 dark:bg-primary-700 rounded-xl">
                  <div className="text-4xl mb-2">
                    {animalMetaphors[points as keyof typeof animalMetaphors].animal}
                  </div>
                  <div className="font-bold text-lg text-primary-800 dark:text-white">
                    {points}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {animalMetaphors[points as keyof typeof animalMetaphors].name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {animalMetaphors[points as keyof typeof animalMetaphors].description.split(' - ')[0]}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-lg text-sm">
                💡 <strong>Remember:</strong> Story points are about relative size, not time! An 🐺 Wolf (8 points) is twice as complex as a 🐱 Cat (5 points).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Why Teams Love Rise MAgile
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stop the guessing games. Start delivering predictable sprints with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "40% More Accurate",
                description: "AI-powered estimation guidance reduces planning poker variance",
                color: "bg-spurs-navy"
              },
              {
                icon: Clock,
                title: "3x Faster Planning",
                description: "Streamlined sessions with real-time collaboration and smart suggestions",
                color: "bg-accent-blue"
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Velocity tracking and estimation accuracy metrics for continuous improvement",
                color: "bg-french-red"
              },
              {
                icon: Users,
                title: "Team Alignment",
                description: "Built-in discussion tools and consensus-building features",
                color: "bg-emerald-600"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-6 bg-primary-50 dark:bg-primary-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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

      {/* Interactive Demo */}
      <section id="demo" className="py-20 bg-primary-50 dark:bg-primary-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
              Try Rise MAgile Live Demo
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Experience planning poker with your virtual Agile team
            </p>
            <button
              onClick={resetDemo}
              className="inline-flex items-center px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Demo
            </button>
          </div>

          {sessionPhase !== 'completed' ? (
            <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Story {currentStory + 1} of {stories.length}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {Math.round(((currentStory) / stories.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-spurs-navy h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentStory) / stories.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Story */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-white mb-4">
                  Current User Story
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">
                    {stories[currentStory].story}
                  </p>
                </div>
              </div>

              {/* Team Members */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                  Team Members
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {mockTeam.map((member) => (
                    <div key={member.id} className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto ${
                        teamVotes[member.id] ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {member.avatar}
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{member.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
                      {sessionPhase === 'reveal' && teamVotes[member.id] && (
                        <div className="mt-2 bg-spurs-navy text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto">
                          {teamVotes[member.id]}
                        </div>
                      )}
                      {sessionPhase === 'voting' && teamVotes[member.id] && member.id !== '1' && (
                        <div className="mt-2 bg-gray-300 dark:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mx-auto">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Voting Interface */}
              {sessionPhase === 'voting' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-primary-800 dark:text-white">
                      Select Your Estimate (Story Points)
                    </h4>
                    <button
                      onClick={() => setShowSizingGuide(!showSizingGuide)}
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <HelpCircle className="h-4 w-4 mr-1" />
                      Sizing Guide
                    </button>
                  </div>

                  {/* Sizing Guide */}
                  {showSizingGuide && (
                    <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200">
                          Animal-Based Story Point Sizing Guide
                        </h5>
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                        Story points are <strong>relative estimates</strong> of effort/complexity. Compare tasks to each other, not absolute time!
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {fibonacciSequence.slice(0, 6).map((points) => (
                          <div key={points} className="flex items-center bg-white dark:bg-blue-800 rounded-lg p-2">
                            <span className="text-2xl mr-2">{animalMetaphors[points as keyof typeof animalMetaphors].animal}</span>
                            <div>
                              <div className="font-semibold text-sm text-blue-800 dark:text-blue-200">
                                {points} - {animalMetaphors[points as keyof typeof animalMetaphors].name}
                              </div>
                              <div className="text-xs text-blue-600 dark:text-blue-300">
                                {animalMetaphors[points as keyof typeof animalMetaphors].description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-blue-600 dark:text-blue-400">
                        💡 <strong>Fibonacci Tip:</strong> The gaps get bigger (1,2,3,5,8,13...) because uncertainty increases with complexity!
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-5 md:grid-cols-10 gap-3 mb-6">
                    {fibonacciSequence.map((points) => (
                      <div key={points} className="relative group">
                        <button
                          onClick={() => handleVote(points)}
                          className={`w-full aspect-square rounded-lg font-bold text-lg transition-all duration-200 relative ${
                            selectedPoints === points
                              ? 'bg-spurs-navy text-white transform scale-105 shadow-lg'
                              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                          }`}
                        >
                          <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-xl mb-1">
                              {animalMetaphors[points as keyof typeof animalMetaphors].animal}
                            </div>
                            <div className="text-sm font-bold">{points}</div>
                          </div>
                        </button>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                          <div className="font-semibold">{animalMetaphors[points as keyof typeof animalMetaphors].name}</div>
                          <div className="text-gray-300">{animalMetaphors[points as keyof typeof animalMetaphors].description}</div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {selectedPoints && (
                    <div className="text-center">
                      <p className="text-green-600 dark:text-green-400 font-medium mb-2">
                        You voted {selectedPoints} points ({animalMetaphors[selectedPoints as keyof typeof animalMetaphors].animal} {animalMetaphors[selectedPoints as keyof typeof animalMetaphors].name})
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Waiting for team to finish voting...
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Results */}
              {sessionPhase === 'reveal' && (
                <div>
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">
                    Voting Results
                  </h4>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl mb-2">
                          {animalMetaphors[calculateConsensus() as keyof typeof animalMetaphors].animal}
                        </div>
                        <p className="text-2xl font-bold text-spurs-navy dark:text-blue-400">{calculateConsensus()}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Consensus Estimate</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {animalMetaphors[calculateConsensus() as keyof typeof animalMetaphors].name}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{getVoteSpread()}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Vote Spread</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {getVoteSpread() <= 5 ? 'High' : getVoteSpread() <= 10 ? 'Medium' : 'Low'}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Confidence</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleNextStory}
                      className="inline-flex items-center px-6 py-3 bg-spurs-navy text-white font-semibold rounded-lg hover:bg-spurs-navy/90 transition-colors duration-200"
                    >
                      {currentStory < stories.length - 1 ? 'Next Story' : 'Complete Session'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Session Complete */
            <div className="bg-white dark:bg-primary-800 rounded-2xl shadow-xl p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-2">
                  Planning Session Complete!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Great job! Here's your session summary:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">Stories Estimated</h4>
                  <p className="text-3xl font-bold text-spurs-navy dark:text-blue-400">{stories.length}</p>
                </div>
                <div className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">Total Story Points</h4>
                  <p className="text-3xl font-bold text-spurs-navy dark:text-blue-400">
                    {stories.reduce((sum, story) => sum + (story.finalEstimate || 0), 0)}
                  </p>
                </div>
                <div className="bg-primary-50 dark:bg-primary-700 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-2">Avg. Accuracy</h4>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                    {Math.round(sessionStats.avgAccuracy)}%
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={resetDemo}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 mr-4"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Try Again
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-spurs-navy text-white font-semibold rounded-lg hover:bg-spurs-navy/90 transition-colors duration-200"
                >
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Get Rise MAgile for Your Team
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features & Pricing Preview */}
      <section className="py-20 bg-white dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-6">
                Enterprise-Ready Features
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Analytics",
                    description: "Track velocity trends, estimation accuracy, and team performance over time."
                  },
                  {
                    title: "Integration Ecosystem", 
                    description: "Seamless integration with Jira, Azure DevOps, GitHub, and popular project management tools."
                  },
                  {
                    title: "Custom Estimation Scales",
                    description: "Fibonacci, T-shirt sizes, or create your own custom estimation scales."
                  },
                  {
                    title: "Real-time Collaboration",
                    description: "Remote-friendly with video integration, async voting, and discussion tools."
                  },
                  {
                    title: "AI-Powered Insights",
                    description: "Machine learning suggestions based on historical data and similar stories."
                  }
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-2 h-2 bg-spurs-navy rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-primary-800 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 dark:text-white mb-6">
                Early Access Pricing
              </h3>
              
              <div className="space-y-6">
                <div className="border-2 border-spurs-navy rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-primary-800 dark:text-white">Team Plan</h4>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-spurs-navy dark:text-blue-400">$29</span>
                    <span className="text-gray-600 dark:text-gray-400">/month per team</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Up to 10 team members</li>
                    <li>• Unlimited story pointing sessions</li>
                    <li>• Basic analytics & reporting</li>
                    <li>• Jira & Azure DevOps integration</li>
                    <li>• Email support</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-primary-800 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <h4 className="text-lg font-semibold text-primary-800 dark:text-white mb-4">Enterprise</h4>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">Custom</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Unlimited teams & members</li>
                    <li>• Advanced AI insights</li>
                    <li>• Custom integrations</li>
                    <li>• Priority support</li>
                    <li>• On-premise deployment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  🎯 Early adopters get 50% off for the first 6 months
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-spurs-navy text-white font-semibold rounded-lg hover:bg-spurs-navy/90 transition-colors duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-spurs-navy dark:bg-spurs-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sprint Planning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ Agile teams already using Rise MAgile to deliver more predictable sprints and higher velocity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-spurs-navy font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
            >
              <Zap className="mr-2 h-6 w-6" />
              Get Early Access
            </Link>
            
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-spurs-navy transition-colors duration-200 text-lg"
            >
              Try Demo Again
              <Play className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="mt-8 text-blue-200">
            <p className="text-sm">Rise MAgile — Story-pointing tool for Agile teams • Improve estimation accuracy • Faster sprint planning</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiseMAgile;