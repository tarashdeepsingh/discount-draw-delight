
import React from 'react';
import { cn } from '@/lib/utils';
import { IceCream } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <IceCream className="animate-scoop text-primary" size={24} />
      <span className="ml-2 text-primary-foreground">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
