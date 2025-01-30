import React from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Confetti />
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Payment Successful! 🎉</h1>
      <p className="text-lg text-gray-700">Thank you for your payment. Your transaction was successful.</p>
      <Button className="mt-6" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </div>
  );
};

export default PaymentSuccess;
