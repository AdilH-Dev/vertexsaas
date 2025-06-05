
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonHoverProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

const ButtonHover = ({
  variant = 'primary',
  size = 'default',
  className,
  children,
  ...props
}: ButtonHoverProps) => {
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3',
    lg: 'h-11 px-8'
  };
  
  const variantClasses = {
    primary: 'vertex-btn-primary',
    secondary: 'vertex-btn-secondary',
    outline: 'vertex-btn-outline'
  };

  return (
    <button
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        'relative overflow-hidden group',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
    </button>
  );
};

export default ButtonHover;
