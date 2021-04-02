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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <Container>
        <div className={FooterStyle.footer__headContent}>
          <Grid container item md={12} spacing={2} style={{ padding: "0" }}>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info__IconMain}>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "15px", color: "#f6ca00" }}
                >
                  itCart
                </Typography>
                <p>
                  Copyright {new Date().getFullYear()} All Rights Reserved By
                  DEVS4
                </p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "15px", color: "#f6ca00" }}
                >
                  Contact
                </Typography>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "15px", color: "#f6ca00" }}
                >
                  TORUN
                </Typography>
                <p>Time zone Squar , New Yeark 2056</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <div className={FooterStyle.footer__headContent_info}>
                <Typography
                  variant="h5"
                  style={{ marginBottom: "15px", color: "#f6ca00" }}
                >
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
                  <Link to="/">
                    <IoLogoFacebook />
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <IoLogoYoutube />
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <IoLogoLinkedin />
                  </Link>
                </span>
                <span>
                  <Link to="/">
                    <IoLogoWhatsapp />
                  </Link>
                </span>
              </div>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xl={12}>
              <div className={FooterStyle.footer__Contact}>
                <div className={FooterStyle.footer__option}>
                  Copyright {new Date().getFullYear()} All Rights Reserved By
                  DEVS4
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
