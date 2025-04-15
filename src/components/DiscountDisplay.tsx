
import React from 'react';
import { cn } from '@/lib/utils';

interface DiscountDisplayProps {
  value: number;
  isAnimating?: boolean;
  className?: string;
}

const DiscountDisplay: React.FC<DiscountDisplayProps> = ({
  value,
  isAnimating = false,
  className
}) => {
  return (
    <div className={cn(
      "text-center py-6 transition-all duration-300",
      isAnimating && "animate-scale",
      className
    )}>
      <h2 className="text-2xl font-bold">Discount Multiplier</h2>
      <div className="text-5xl font-bold text-primary mt-2">
        {value.toFixed(1)}x
      </div>
      <p className="text-muted-foreground mt-2">
        Select your discount multiplier and try your luck!
      </p>
    </div>
  );
};

export default DiscountDisplay;
