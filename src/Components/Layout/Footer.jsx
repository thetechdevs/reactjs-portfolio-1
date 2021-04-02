import { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
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
import { FaArrowCircleUp } from "react-icons/fa";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                  Torun
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
                  Warsaw
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
                <a
                  href="http://thetechdevs.com"
                  target="_blank"
                  className={FooterStyle.footer__option}
                >
                  Copyright {new Date().getFullYear()} All Rights Reserved By
                  "The Tech Devs"
                </a>
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

      <section className={FooterStyle.scrollTopSection}>
        <FaArrowCircleUp
          className={FooterStyle.scrollTop}
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
      </section>
    </div>
  );
};

export default Footer;
