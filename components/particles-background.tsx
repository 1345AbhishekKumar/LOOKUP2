"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticlesBackgroundProps {
  className?: string;
  color?: string;
  quantity?: number;
}

export function ParticlesBackground({
  className = '',
  color = 'rgba(38, 210, 204, 0.3)',
  quantity = 30,
}: ParticlesBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < quantity; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Randomize size (3-15px)
      const size = Math.random() * 12 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Randomize position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Custom color
      particle.style.backgroundColor = color;
      
      // Randomize animation duration (3-8s)
      particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
      
      // Add to container
      container.appendChild(particle);
    }
  }, [quantity, color]);
  
  return (
    <div className={`particles-container ${className}`} ref={containerRef}></div>
  );
}

export function FloatingElement({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -15, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}