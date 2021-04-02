import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const BlogPage = lazy(() => import("./Components/BlogPage/BlogPage"));
const About = lazy(() => import("./Components/About/About"));
const Home = lazy(() => import("./Components/Home/Home"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
