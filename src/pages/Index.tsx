
import React, { useState } from 'react';
import DiscountSlider from '@/components/DiscountSlider';
import DiscountDisplay from '@/components/DiscountDisplay';
import ResultDisplay from '@/components/ResultDisplay';
import LoadingSpinner from '@/components/LoadingSpinner';
import { calculateDiscount } from '@/services/discountService';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [multiplier, setMultiplier] = useState(1.0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'win' | 'lose' | null>(null);
  const [winAmount, setWinAmount] = useState(0);
  const [isValueChanging, setIsValueChanging] = useState(false);
  const { toast } = useToast();

  const handleMultiplierChange = (value: number) => {
    setMultiplier(value);
    setIsValueChanging(true);
    
    // Reset the animation after a short delay
    setTimeout(() => {
      setIsValueChanging(false);
    }, 300);
  };

  const handleGetDiscount = async () => {
    setIsLoading(true);
    
    try {
      const response = await calculateDiscount(multiplier);
      
      if (response.success && response.amount) {
        setResult('win');
        setWinAmount(response.amount);
      } else {
        setResult('lose');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseResult = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md mx-auto bg-card shadow-lg rounded-2xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Discount Draw</h1>
        
        <DiscountDisplay 
          value={multiplier} 
          isAnimating={isValueChanging}
          className="mb-8" 
        />
        
        <div className="space-y-8">
          <DiscountSlider
            min={1.0}
            max={2.0}
            step={0.1}
            value={multiplier}
            onChange={handleMultiplierChange}
          />
          
          <button
            onClick={handleGetDiscount}
            disabled={isLoading}
            className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium text-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              "Get Discount"
            )}
          </button>
          
          <p className="text-sm text-muted-foreground text-center">
            Higher multipliers have a lower chance of success, but offer bigger rewards!
          </p>
        </div>
      </div>
      
      <ResultDisplay
        result={result}
        amount={winAmount}
        onClose={handleCloseResult}
      />
    </div>
  );
};

export default Index;
