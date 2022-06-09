import React from "react";
import Navbar from "../Navbar";
import Banner from "./Banner";
import FastTrack from "./FastTrack";
import Features from "./Features/Features";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import InsureAndSecure from "./InsureAndSecure";
import OurServices from "./OurServices";
import OurTeam from "./OurTeam";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Service />
      <InsureAndSecure />
      <OurServices />
      <FastTrack />
      <Testimonials />
      <GetStarted />
      <Banner />
      <OurTeam />
    </>
  );
};

export default Homepage;
