"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface FloatingCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  className?: string;
  intensity?: number;
}

export default function FloatingCard({ 
  children, 
  className = "", 
  intensity = 15, 
  ...props 
}: FloatingCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate rotation based on mouse position
    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -intensity;
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * intensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setScale(1.02);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`perspective-1000 ${className}`} // ✅ No border, no padding, no background
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      }}
      {...props} 
    >
      {children}
    </motion.div>
  );
}
