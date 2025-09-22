import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'dots' | 'grid' | 'geometric' | 'waves';
  className?: string;
  opacity?: number;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'dots',
  className = '',
  opacity = 0.1
}) => {
  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent-blue rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        );

      case 'grid':
        return (
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-accent-blue"
                  />
                </pattern>
              </defs>
              <motion.rect
                width="100%"
                height="100%"
                fill="url(#grid)"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </svg>
          </div>
        );

      case 'geometric':
        return (
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-accent-blue/20"
                style={{
                  width: `${50 + Math.random() * 100}px`,
                  height: `${50 + Math.random() * 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                }}
                animate={{
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        );

      case 'waves':
        return (
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M0,50 Q25,25 50,50 T100,50 V100 H0 V50"
                fill="url(#waveGradient)"
                animate={{
                  d: [
                    "M0,50 Q25,25 50,50 T100,50 V100 H0 V50",
                    "M0,50 Q25,75 50,50 T100,50 V100 H0 V50",
                    "M0,50 Q25,25 50,50 T100,50 V100 H0 V50",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(0, 85, 164, 0.1)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {renderPattern()}
    </div>
  );
};

export default AnimatedBackground;