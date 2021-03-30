import React from "react";
import Layout from "../Layout";
import RecentPortfolio from "./RecentPortfolio/RecentPortfolio";
import Hero from "./HeroArea/Hero";
import Service from "./Service";
import { CommentOfClient } from "./index";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <CommentOfClient />
        <Service />
        <RecentPortfolio />
      </Layout>
    </div>
  );
};

export default Home;
