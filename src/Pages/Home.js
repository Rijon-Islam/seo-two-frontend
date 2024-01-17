import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/HomePage/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import CounterSection from "../components/HomePage/CounterSection";
import VideoSection from "../components/HomePage/VideoSection";
import PricingSection from "../components/HomePage/PricingSection";
import CallToAction from "../components/HomePage/CallToAction";





const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <CounterSection></CounterSection>
      <VideoSection></VideoSection>
      <PricingSection></PricingSection>
      <CallToAction></CallToAction>




    </div>
  );
};

export default Home;
