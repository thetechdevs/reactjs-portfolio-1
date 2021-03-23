import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./Components/Home";
// import About from "./Components/Home/About";
import Home from "./Components/Home/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Routes;
