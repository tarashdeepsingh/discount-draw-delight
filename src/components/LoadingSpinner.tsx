
import React from 'react';
import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <Loader className="animate-spin text-primary" size={24} />
    </div>
  );
};

export default LoadingSpinner;
