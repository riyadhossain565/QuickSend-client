import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Statistics from "../Statistics/Statistics";
import { Helmet } from "react-helmet-async";
import TopDeliveryMen from "../TopDeliveryMan/TopDeliveryMan";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>QuickSend | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <Statistics></Statistics>
      <TopDeliveryMen></TopDeliveryMen>
    </div>
  );
};

export default Home;
