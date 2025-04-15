
import React from 'react';
import { cn } from '@/lib/utils';
import { Coffee } from 'lucide-react';

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
    
    if (normalizedValue < 0.3) return 'bg-amber-100';
    if (normalizedValue < 0.6) return 'bg-amber-200';
    return 'bg-amber-300';
  };

  return (
    <div className={cn(
      "text-center py-6 transition-all duration-300 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-amber-100",
      isAnimating && "animate-scale",
      className
    )}>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2">Brew Bro</h1>
        <h2 className="text-xl font-bold text-gray-700">Coffee Loyalty Discount</h2>
        
        <div className="my-6 relative">
          <div className="coffee-cup">
            <div className={cn(
              "coffee-liquid w-16 h-16 mx-auto rounded-full", 
              getScaleColors(value),
              isAnimating && "animate-bounce"
            )}>
              <div className="coffee-steam"></div>
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
          <Coffee className="h-5 w-5 text-amber-800" />
          <p className="text-gray-600 font-medium">
            Choose your loyalty multiplier and brew some rewards!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountDisplay;
