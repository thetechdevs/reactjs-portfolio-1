import React from "react";
import Layout from "../Layout";
import BlogPage from "./BlogPage/BlogPage";
import RecentPortfolio from './RecentPortfolio/RecentPortfolio';


const Home = () => {
  return (
    <Layout>
      <BlogPage />
      <RecentPortfolio />
      <h1>home</h1>
    </Layout>
  );
};

export default Home;
