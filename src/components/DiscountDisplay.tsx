
import React from 'react';
import { cn } from '@/lib/utils';
import { IceCream } from 'lucide-react';

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
  // Calculate the color based on the value
  const getScaleColors = (value: number) => {
    const min = 1.0;
    const max = 2.0;
    const normalizedValue = (value - min) / (max - min); // 0 to 1
    
    if (normalizedValue < 0.3) return 'bg-icecream-vanilla';
    if (normalizedValue < 0.6) return 'bg-icecream-mint';
    return 'bg-icecream-pink';
  };

  return (
    <div className={cn(
      "text-center py-6 transition-all duration-300 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/50",
      isAnimating && "animate-scale",
      className
    )}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">MB's Connection</h1>
        <h2 className="text-xl font-bold text-gray-700">Ice Cream Discount</h2>
        
        <div className="my-6 relative">
          <div className="ice-cream-cone">
            <div className={cn(
              "ice-cream-scoop w-16 h-16 mx-auto", 
              getScaleColors(value),
              isAnimating && "animate-scoop"
            )}>
              <div className="ice-cream-drip"></div>
            </div>
          </div>
        </div>
        
        <div className={cn(
          "text-4xl md:text-5xl font-bold mt-6 px-6 py-2 rounded-full inline-block",
          getScaleColors(value),
          "transition-all duration-300"
        )}>
          {value.toFixed(1)}x
        </div>
        
        <div className="flex items-center justify-center mt-4 gap-2">
          <IceCream className="h-5 w-5 text-primary" />
          <p className="text-gray-600 font-medium">
            Choose your discount scoop and try your luck!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountDisplay;
