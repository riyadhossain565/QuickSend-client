import { Button } from "@/components/ui/button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckOutForm = () => {

    const [error, setError] = useState(" ");

    const stripe = useStripe();
    const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card === null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("payment error", error);
        setError(error.message);
      } else {
        console.log("payment method", paymentMethod);
        setError(" ");
      }

  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <CardElement
        className="border px-3 py-5 w-3/4 mx-auto my-10"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#A1A1A1",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <Button
        variant="outline"
        className="w-20 mx-auto hover:bg-yellow-500"
        type="submit"
        // disabled={!stripe || !clientSecret}
      >
        Pay
      </Button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
