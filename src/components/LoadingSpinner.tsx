
import React from 'react';
import { cn } from '@/lib/utils';
import { Coffee } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Coffee className="animate-pulse text-amber-800" size={24} />
      <span className="ml-2 text-amber-50">Brewing...</span>
    </div>
  );
};

export default LoadingSpinner;
