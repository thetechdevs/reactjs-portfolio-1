import React from "react";
import Layout from "../Layout";
import Hero from "./HeroArea/Hero";
import Service from "./Service";
import About from "./About";
const Home = () => {
  return (
    <div>
      {/* <Layout> */}
      <Hero />
      <Service />
      <About />
      {/* </Layout> */}
    </div>
  );
};
export default Home;
