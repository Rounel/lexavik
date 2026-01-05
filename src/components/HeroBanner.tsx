import React from 'react';
import { cn } from '@/lib/utils';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  description: string;
  overlayColor?: string;
  overlayOpacity?: number;
  className?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  description,
  overlayColor = 'secondary-900-light',
  overlayOpacity = 55,
  className = '',
}) => {
  return (
    <div 
      className={`relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[url('../../public//1.jpg')] bg-cover ${className}`}
    >
      <div 
        className={cn(`absolute inset-0 bg-secondary-950/90 size-full`)}
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <span className="text-primary-700 font-medium mb-2 text-sm uppercase tracking-wide">
          {subtitle}
        </span>
        <h1 className="text-4xl font-light leading-tight lg:text-5xl text-white mb-4">
          {title}
        </h1>
        <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;