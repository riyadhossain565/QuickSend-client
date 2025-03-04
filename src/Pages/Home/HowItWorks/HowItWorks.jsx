import Container from "@/src/Shared/Container";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { LuWallet } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCardboardBox } from "react-icons/gi";



const HowItWorks = () => {
  return (
    <div className="pb-20">
      <Container>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold cinzel-font mt-8 mb-4">
            How Delivery Works
          </h1>
          <h3 className="text-xl text-center mb-10">
            Fast, Reliable, and Secure Delivery for Everything You Need.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="border inline-block p-2 rounded-lg bg-[#4C7419]">
              <CiShoppingCart className="text-4xl text-white" />
            </div>
            <h3 className="font-bold text-xl exo-font my-2">1. Place Your Order</h3>
            <p className="text-[#7A7A7A]">Browse your favorite items, add them to your cart, and place your order with just a few clicks. It's quick, easy, and convenient!</p>
          </div>
          <div className="text-center">
            <div className="border inline-block p-2 rounded-lg bg-[#4C7419]">
              <LuWallet className="text-4xl text-white" />
            </div>
            <h3 className="font-bold text-xl exo-font my-2">2. Pay Order</h3>
            <p className="text-[#7A7A7A]">Secure and seamless payment options for your orders. Choose your preferred method and complete your transaction with ease and confidence.</p>
          </div>
          <div className="text-center">
            <div className="border inline-block p-2 rounded-lg bg-[#4C7419]">

              <CiDeliveryTruck className="text-4xl text-white" />
            </div>
            <h3 className="font-bold text-xl exo-font my-2">3. Order Delivered</h3>
            <p className="text-[#7A7A7A]">Your order has arrived safely at its destination! We ensure timely and secure delivery so you can enjoy your package with peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="border inline-block p-2 rounded-lg bg-[#4C7419]">
              <GiCardboardBox className="text-4xl text-white" />
            </div>
            <h3 className="font-bold text-xl exo-font my-2">4. Receive Your Order</h3>
            <p className="text-[#7A7A7A]">Sit back and relax while we deliver your order swiftly and securely. Track your package in real-time and receive it at your doorstep with ease.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
