import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MouseGradientProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  intensity?: number;
}

const MouseGradient: React.FC<MouseGradientProps> = ({ 
  children, 
  className = '',
  gradientColor = 'rgba(0, 85, 164, 0.15)',
  intensity = 300
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isHovered]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(${intensity}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent 40%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};

export default MouseGradient;