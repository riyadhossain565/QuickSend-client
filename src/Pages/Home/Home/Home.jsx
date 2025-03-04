import React from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Statistics from "../Statistics/Statistics";
import { Helmet } from "react-helmet-async";
import TopDeliveryMen from "../TopDeliveryMan/TopDeliveryMan";
import DeliverEverything from "../DeliverEverything/DeliverEverything";
import NewsLetter from "../NewsLetter/NewsLetter";
import HowItWorks from "../HowItWorks/HowItWorks";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>QuickSend | Home</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <DeliverEverything></DeliverEverything>
      <Service></Service>
      <Statistics></Statistics>
      <HowItWorks></HowItWorks>
      <TopDeliveryMen></TopDeliveryMen>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
