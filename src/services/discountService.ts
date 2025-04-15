
// Simulates a backend API call for discount calculation

interface DiscountResponse {
  success: boolean;
  amount?: number;
  message?: string;
}

export const calculateDiscount = async (multiplier: number): Promise<DiscountResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate a success/failure based on probability
  // Higher multipliers have a lower chance of success
  const successProbability = 1 - ((multiplier - 1) / 1); // 1.0x = 100% chance, 2.0x = 0% chance
  const isSuccess = Math.random() < successProbability;
  
  // Base amount based on multiplier (for demo purposes)
  const baseAmount = 10;
  const calculatedAmount = baseAmount * multiplier;
  
  if (isSuccess) {
    return {
      success: true,
      amount: calculatedAmount,
      message: "Discount applied successfully!"
    };
  } else {
    return {
      success: false,
      message: "Discount could not be applied. Try again!"
    };
  }
};
