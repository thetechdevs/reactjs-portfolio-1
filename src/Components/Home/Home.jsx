import React from "react";
import Layout from "../Layout";
import BlogPage from "./BlogPage/BlogPage";
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
        {/* <BlogPage /> */}
      </Layout>
    </div>
  );
};
export default Home;

// // import Components
// import { Layout, About, CommentOfClient } from "./index";

// const Home = () => {
//   return (
//     <Layout>
//       <h1>home</h1>
//       <CommentOfClient />
//       <About />
//     </Layout>
