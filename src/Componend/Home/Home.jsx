import React from "react";
import Banar from "../Banar/Banar";
import SocialService from "../SocialService/SocialService";
import AboutUs from "../AboutUS/AboutUs";
import Counter from "../Counter/Counter";
import ServicesCard from "../ServiceCard/ServicesCard";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <div>
      <Banar />
      <ServicesCard />
      <Posts />
      <SocialService />
      <AboutUs />
      <Counter />
    </div>
  );
};

export default Home;
