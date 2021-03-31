import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import About from "./Components/Home/About";
import BlogPage from "./Components/Home/BlogPage/BlogPage";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Portfolio from "./Components/Portfolio/Portfolio";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
