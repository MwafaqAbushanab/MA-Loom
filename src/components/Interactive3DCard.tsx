import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
  style?: React.CSSProperties;
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'rgba(0, 85, 164, 0.3)',
  intensity = 15,
  style
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const rotateY = ((mouseX - centerX) / rect.width) * intensity;
    const rotateX = -((mouseY - centerY) / rect.height) * intensity;
    
    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu transition-all duration-300 ${className}`}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        boxShadow: `0 20px 40px ${glowColor}, 0 10px 20px rgba(0,0,0,0.1)`,
      }}
    >
      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
      
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          transform: 'translateZ(-10px)',
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Interactive3DCard;