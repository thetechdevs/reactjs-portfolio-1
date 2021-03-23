import React from "react";
import Layout from "../Layout";
import Hero from "./HeroArea/Hero";
import Service from "./Service";
import About from "./About";
import { CommentOfClient } from "./index";
const Home = () => {
  return (
    <div>
      {/* <Layout> */}
      <Hero />
      <CommentOfClient />
      <Service />
      {/* <About /> */}
      {/* </Layout> */}
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
