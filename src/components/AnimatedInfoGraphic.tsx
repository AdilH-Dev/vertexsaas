
import React from 'react';
import { cn } from "@/lib/utils";
import AnimatedCard from './AnimatedCard';

interface AnimatedInfoGraphicProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
  delay?: number;
  color?: string;
}

const AnimatedInfoGraphic = ({
  title,
  value,
  icon,
  description,
  delay = 0,
  color = "from-vertex-blue to-vertex-blue-light"
}: AnimatedInfoGraphicProps) => {
  const delayClass = `animate-delay-${delay}`;
  
  return (
    <div className={cn(
      "opacity-0 animate-fade-in rounded-xl overflow-hidden shadow-lg border border-gray-100",
      delayClass
    )}>
      <div className={cn(
        "p-6 flex flex-col items-center text-center",
        "bg-gradient-to-br",
        color
      )}>
        <div className="text-white mb-4 p-3 bg-white/20 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <div className="mt-3 text-4xl font-bold text-white">{value}</div>
        <p className="mt-2 text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedInfoGraphic;
