
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface DiscountSliderProps {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  className?: string;
}

const DiscountSlider: React.FC<DiscountSliderProps> = ({
  min = 1.0,
  max = 2.0,
  step = 0.1,
  value,
  onChange,
  className
}) => {
  const calculatePercentage = (value: number) => {
    return ((value - min) / (max - min)) * 100;
  };

  const sliderRef = useRef<HTMLDivElement>(null);
  const [fillPercentage, setFillPercentage] = useState(calculatePercentage(value));

  useEffect(() => {
    setFillPercentage(calculatePercentage(value));
  }, [value, min, max]);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative mb-4">
        <div 
          ref={sliderRef} 
          className="relative w-full h-2 bg-muted rounded-full"
        >
          <div 
            className="absolute h-full bg-primary rounded-full transition-all duration-200"
            style={{ width: `${fillPercentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="absolute top-0 w-full h-2 appearance-none bg-transparent cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-sm text-muted-foreground mt-1">
        <span>{min.toFixed(1)}x</span>
        <span>{((min + max) / 2).toFixed(1)}x</span>
        <span>{max.toFixed(1)}x</span>
      </div>
    </div>
  );
};

export default DiscountSlider;
