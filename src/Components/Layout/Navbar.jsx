import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="bg-transparent custom_menu" expand="lg">
      <div className="container" style={{ maxWidth: "1300px" }}>
        <Navbar.Brand style={{ float: "left" }}>
          <h2>SREE</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          style={{ width: "900px", float: "right" }}
          id="basic-navbar-nav"
        >
          <Nav className="ml-auto">
            <Router>
              <ul className="menu_wrapper">
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/"
                    className="nav_list"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/project"
                    className="nav_list"
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/blog"
                    className="nav_list"
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/about"
                    className="nav_list"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: "#f9bb00",
                      textTransform: "capitalize",
                      width: "120px",
                      borderRadius: "30px",
                      fontSize: "16px",
                      boxShadow: "0px 15px 18px #f9bb008c",
                    }}
                  >
                    <Link to="contact">Contact us</Link>
                  </Button>
                </li>
              </ul>
            </Router>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
