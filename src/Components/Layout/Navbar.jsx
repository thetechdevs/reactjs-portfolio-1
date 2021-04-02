import { React, createRef, useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const NavBar = ({ children, sticky = false, className, ...rest }) => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const ref = createRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );
    observer.observe(cachedRef);
    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, [ref]);

  return (
    <div
      id="menu_wrapper"
      className={className + (isSticky ? " isSticky" : "")}
      ref={ref}
      {...rest}
    >
      <Navbar className="bg-transparent custom_menu" expand="lg">
        <div className="container" style={{ maxWidth: "1300px" }}>
          <Navbar.Brand style={{ float: "left" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <h2 style={{ color: "#f6ca00", fontWeight: "700" }}>DEVS4</h2>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            style={{ width: "900px", float: "right" }}
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto">
              <ul className="menu_wrapper">
                {location.pathname !== "/" && (
                  <li>
                    <NavLink
                      activeClassName={
                        location.pathname === "/" ? "text-primary" : null
                      }
                      to="/"
                      className="nav_list"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      Home
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/portfolio"
                    className="nav_list"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/blog"
                    className="nav_list"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="text-primary"
                    to="/about"
                    className="nav_list"
                    style={{ textDecoration: "none", color: "#000" }}
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
                    <Link
                      to="contact"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Contact us
                    </Link>
                  </Button>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
