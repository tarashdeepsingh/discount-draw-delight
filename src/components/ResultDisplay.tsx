
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

interface ResultDisplayProps {
  result: 'win' | 'lose' | null;
  amount?: number;
  onClose: () => void;
  className?: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  amount = 0,
  onClose,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result === 'win') {
      createConfetti();
    }

    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [result, onClose]);

  const createConfetti = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const colors = ['#3b82f6', '#60a5fa', '#93c5fd', '#22c55e', '#a3e635'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      container.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  if (!result) return null;

  return (
    <div 
      ref={containerRef}
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 animate-fade-in",
        className
      )}
      onClick={onClose}
    >
      <div 
        className="relative bg-card shadow-lg rounded-xl p-8 max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {result === 'win' ? (
          <>
            <div className="mb-4">
              <CheckCircle className="w-16 h-16 mx-auto text-success animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
            <p className="text-xl mb-4">You won ${amount.toFixed(2)}!</p>
            <p className="text-muted-foreground">Your discount has been applied successfully.</p>
          </>
        ) : (
          <>
            <div className="mb-4">
              <XCircle className="w-16 h-16 mx-auto text-destructive animate-bounce" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Better luck next time!</h2>
            <p className="text-muted-foreground">The discount couldn't be applied. Try again!</p>
          </>
        )}
        <button 
          className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
