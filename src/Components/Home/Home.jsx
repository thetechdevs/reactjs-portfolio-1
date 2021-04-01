import React from "react";
import Layout from "../Layout";
import RecentPortfolio from "./RecentPortfolio/RecentPortfolio";
import Hero from "./HeroArea/Hero";
import Service from "./Service/Service";
import CommentOfClient from "./CommentOfClient/CommentOfClient";
// import { CommentOfClient } from "./index";
// import About from "./About";

const Home = () => {
  return (
    <Layout>
      <main>
        <Hero />
        <Service />
        <CommentOfClient />
        <RecentPortfolio />
      </main>
    </Layout>
  );
};

export default Home;
