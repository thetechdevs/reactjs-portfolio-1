import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import FooterStyle from "./Footer.module.scss";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoPhonePortraitSharp,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <Container>
        <div className={FooterStyle.footer__headContent}>
          <Grid container item md={12} spacing={2} style={{ padding: "0" }}>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info__IconMain}>
                <Typography variant="h5" style={{ marginBottom: "15px" }}>
                  itCart
                </Typography>
                <p>Copyright &copy;2021 itCart</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography variant="h5" style={{ marginBottom: "15px" }}>
                  Contact
                </Typography>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography variant="h5" style={{ marginBottom: "15px" }}>
                  TORUN
                </Typography>
                <p>Time zone Squar , New Yeark 2056</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography variant="h5" style={{ marginBottom: "15px" }}>
                  warsaw
                </Typography>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum,
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div>
        <Container>
          <Grid container item md={12}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <div className={FooterStyle.footer__socialIcon}>
                <span>
                  <IoLogoFacebook />
                </span>
                <span>
                  <IoLogoYoutube />
                </span>
                <span>
                  <IoLogoLinkedin />
                </span>
                <span>
                  <IoLogoWhatsapp />
                </span>
              </div>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xl={12}>
              <div className={FooterStyle.footer__Contact}>
                <div className={FooterStyle.footer__option}>
                  <a href="/">Service</a>
                  <a href="/">Portfolio</a>
                  <a href="/">Testimonials</a>
                  <a href="/">Blog</a>
                </div>
                <div className={FooterStyle.footer__Contact__Content}>
                  <IoPhonePortraitSharp />
                  <p>888--777--666</p>
                  <IoMailOutline />
                  <p>info@gmail.com</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

// import { Container, Grid, Typography } from "@material-ui/core";
// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import FooterStyle from "./Footer.module.scss";
// import {
//   IoLogoFacebook,
//   IoLogoLinkedin,
//   IoLogoWhatsapp,
//   IoLogoYoutube,
//   IoPhonePortraitSharp,
//   IoMailOutline,
// } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <div className={FooterStyle.footer}>
//       <Container>
//         <Grid container item md={12} style={{ padding: "0" }}>
//           <div className={FooterStyle.footer__headContent}>
//             <Row>
//               <Col xs={12} sm={6} md={3} lg={3}>
//                 <div className={FooterStyle.footer__headContent_info__IconMain}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     itCart
//                   </Typography>
//                   <p>Copyright &copy;2021 itCart</p>
//                 </div>
//               </Col>
//               <Col xs={12} sm={6} md={2} lg={2}>
//                 <div className={FooterStyle.footer__headContent_info}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     Contact
//                   </Typography>
//                   <p>
//                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                   </p>
//                 </div>
//               </Col>
//               <Col xs={12} sm={6} md={2} lg={2}>
//                 <div className={FooterStyle.footer__headContent_info}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     TORUN
//                   </Typography>
//                   <p>Time zone Squar , New Yeark 2056</p>
//                 </div>
//               </Col>
//               <Col xs={12} sm={6} md={2} lg={2}>
//                 <div className={FooterStyle.footer__headContent_info}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     warsaw
//                   </Typography>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                     Harum,
//                   </p>
//                 </div>
//               </Col>
//               <Col xs={12} sm={6} md={6} lg={2}>
//                 <div className={FooterStyle.footer__headContent_info}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     London
//                   </Typography>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Sit, adipisci.
//                   </p>
//                 </div>
//               </Col>
//               <Col
//                 xs={12}
//                 sm={6}
//                 md={2}
//                 lg={1}
//                 style={{ backgroundColor: "red" }}
//               >
//                 <div className={FooterStyle.footer__headContent_info}>
//                   <Typography variant="h5" style={{ marginBottom: "15px" }}>
//                     Norway
//                   </Typography>
//                   <p>Kisoregonj</p>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </Grid>
//       </Container>
//       <div>
//         <Container>
//           <Row>
//             <Col xs={12} sm={12} md={12} lg={3}>
//               <div className={FooterStyle.footer__socialIcon}>
//                 <span>
//                   <IoLogoFacebook />
//                 </span>
//                 <span>
//                   <IoLogoYoutube />
//                 </span>
//                 <span>
//                   <IoLogoLinkedin />
//                 </span>
//                 <span>
//                   <IoLogoWhatsapp />
//                 </span>
//               </div>
//             </Col>
//             <Col lg={9}>
//               <div className={FooterStyle.footer__Contact}>
//                 <div className={FooterStyle.footer__option}>
//                   <a href="/">Service</a>
//                   <a href="/">Portfolio</a>
//                   <a href="/">Testimonials</a>
//                   <a href="/">Blog</a>
//                 </div>
//                 <div className={FooterStyle.footer__Contact__Content}>
//                   <IoPhonePortraitSharp />
//                   <p>888--777--666</p>
//                   <IoMailOutline />
//                   <p>info@gmail.com</p>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Footer;
