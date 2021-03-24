import React from "react";
import Layout from "../Layout";
import BlogPage from "./BlogPage/BlogPage";

const Home = () => {
  return (
    <Layout>
      <BlogPage />
      <h1>home</h1>
    </Layout>
  );
};

export default Home;
