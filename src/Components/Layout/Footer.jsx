import { Grid } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterStyle from "./Footer.module.scss"
import { IoLogoFacebook,IoLogoLinkedin,IoLogoWhatsapp,IoLogoYoutube ,IoPhonePortraitSharp,IoMailOutline} from "react-icons/io5";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <Container >
            <Grid container item md={12}  style={{ padding: "0" }}>
                <div className={FooterStyle.footer__headContent}>
                <Row>
    <Col xs={12} sm={6} md={6} lg={3}>
      <div className={FooterStyle.footer__headContent_info__IconMain}>
        <h4>
          itCart
        </h4>
        <p>Copyright &copy;2021 itCart</p>
      </div>
    </Col>
    <Col xs={12} sm={6} md={6} lg={2}>
      <div className={FooterStyle.footer__headContent_info}>
      <h4>
        byddhfgd553
      </h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      </div>
      
    </Col>
    <Col  xs={12} sm={6} md={6} lg={2}> <div className={FooterStyle.footer__headContent_info}>
      <h4>TORUN</h4>
      <p>
      Time zone Squar , New Yeark 2056
      </p>
      </div></Col>
    <Col xs={12} sm={6} md={6} lg={2}>
      <div className={FooterStyle.footer__headContent_info}>
        <h4>warsaw</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,

      </p>
      </div>
    </Col>
    <Col xs={12} sm={6} md={6} lg={2}><div className={FooterStyle.footer__headContent_info}>
      <h4>London </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, adipisci.

      </p>
      </div></Col>
    <Col xs={12} sm={6} md={6} lg={1}>
      <div className={FooterStyle.footer__headContent_info}>
        <h4>
          Norway
        </h4>
        <p>
          Kisoregonj
        </p>
      </div>
    </Col>
  </Row>
                </div>
                </Grid></Container>
                <div>
                <Container>
                <Row>
    <Col xs={12} sm={12} md={12} lg={3}>
    <div className={FooterStyle.footer__socialIcon}>
                    <span>
<IoLogoFacebook/>
                    </span>
                    <span>
<IoLogoYoutube/>                      
                    </span><span>
<IoLogoLinkedin/>                      
                    </span>
                    <span>
<IoLogoWhatsapp/>
                      
                    </span>
                  </div>
    </Col>
    <Col lg={9}>
     
    <div className={FooterStyle.footer__Contact}>
<div className={FooterStyle.footer__option}>
  <a href="/">Service</a>
  <a href="/">
    Portfolio
  </a>
  <a href="/">
    Pricing
  </a>
  <a href="/">
    Testimonials
  </a>
  <a href="/">
    Team
  </a>
  <a href="/">
    Blog
  </a>
  <a href="/">
    Career
  </a>
  <a href="/">
    How we Work
  </a>
  <a href="/">
    Manifesto
  </a>
</div>
<div className={FooterStyle.footer__Contact__Content}>
 <IoPhonePortraitSharp/>
  <p>
    888--777--666
  </p>
  <IoMailOutline/>
  <p>
    info@gmail.com
  </p>
</div>
</div>
    </Col>
    </Row>
     
                </Container>
                </div>
    </div>
  );
};

export default Footer;
