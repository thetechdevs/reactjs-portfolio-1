import { Button, Container } from "@material-ui/core";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./Hero.scss";
import HeroArea from "./HeroArea";
// const HeroMenu = (
//   <Navbar className="bg-transparent custom_menu" expand="lg">
//     <div className="container" style={{ maxWidth: "1300px" }}>
//       <Navbar.Brand style={{ float: "left" }}>
//         <h2>SREE</h2>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse
//         style={{ width: "900px", float: "right" }}
//         id="basic-navbar-nav"
//       >
//         <Nav className="ml-auto">
//           <Router>
//             <ul className="menu_wrapper">
//               <li>
//                 <NavLink
//                   activeClassName="text-primary"
//                   to="/"
//                   className="nav_list"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   activeClassName="text-primary"
//                   to="/project"
//                   className="nav_list"
//                 >
//                   Portfolio
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   activeClassName="text-primary"
//                   to="/about"
//                   className="nav_list"
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{
//                     backgroundColor: "#f9bb00",
//                     textTransform: "capitalize",
//                     width: "120px",
//                     borderRadius: "30px",
//                     fontSize: "16px",
//                     boxShadow: "0px 15px 18px #f9bb008c",
//                   }}
//                 >
//                   Contact us
//                 </Button>
//               </li>
//             </ul>
//           </Router>
//         </Nav>
//       </Navbar.Collapse>
//     </div>
//   </Navbar>
// );

const Hero = () => {
  return (
    <div className="hero_bg">
      <Container>
        <HeroArea />
      </Container>
    </div>
  );
};

export default Hero;
