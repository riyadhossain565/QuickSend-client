import { Button } from "@/components/ui/button";
import useAuth from "@/src/Hooks/useAuth/useAuth";
import useAxiosPublic from "@/src/Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "@/src/Hooks/useAxiosSecure/useAxiosSecure";
import useUpdateParcel from "@/src/Hooks/useUpdateParcel/useUpdateParcel";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth()
  const [parcel] = useUpdateParcel();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    console.log("Parcel Price:", parcel.price); 
  
    if (!parcel || !parcel.price || isNaN(parcel.price)) {
      console.error("Invalid parcel price:", parcel);
      return;
    }
  
    axiosPublic
      .post("/create-payment-intent", { price: parseFloat(parcel.price) })
      .then((res) => {
        console.log("Client Secret:", res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error creating payment intent:", error);
        setError("Failed to initialize payment. Please try again.");
      });
  }, [axiosPublic, parcel]);
  

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

    // confirm payment
    const { paymentIntent, error: confiremError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous', 
          name: user?.displayName || 'anonymous'
        }
      },
    });

    if(confiremError) {
      console.log("confirm error")
     
    }
    else{
      console.log("payment intent")
      if(paymentIntent.status === 'succeeded'){
        console.log('Transaction Id', paymentIntent.id)
         // ✅ Redirect to Payment Success Page
      navigate("/dashboard/payment-success");
      }
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
        disabled={!stripe || !clientSecret}
      >
        Pay
      </Button>
      <p className="text-red-600">{error}</p>
     
    </form>
  );
};

export default CheckOutForm;
