
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCard = ({
  title,
  description,
  icon,
  delay = 0,
  className,
  children
}: AnimatedCardProps) => {
  const delayClass = `animate-delay-${delay}`;

  return (
    <div 
      className={cn(
        "feature-card opacity-0 animate-fade-in", 
        delayClass,
        className
      )}
    >
      <div className="mb-4 text-vertex-blue flex justify-center md:justify-start">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center md:text-left">{title}</h3>
      <p className="text-gray-600 text-center md:text-left">{description}</p>
      {children}
    </div>
  );
};

export default AnimatedCard;
