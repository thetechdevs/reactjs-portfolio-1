import React, { useEffect } from "react";
import ServiceCard from "../../Utilities/ServiceCard/ServiceCard";
import { IoLogoWebComponent } from "react-icons/io5";
import serviceStyle from "./Service.module.scss";
import { Container, Grid } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  AOS.init({
    duration: 1500,
    offset: 100,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className={serviceStyle.serviceMain}>
        <h6 className={serviceStyle.serviceMain__service}>Service</h6>
        <h1 className={serviceStyle.serviceMain__title}>
          What <span style={{ color: "#f9bb00" }}>We Do</span>{" "}
        </h1>
        <div className={serviceStyle.serviceMain__content}>
          <Container>
            <Grid container item md={12} spacing={2} style={{ padding: "0" }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                data-aos="fade-down"
              >
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Graphic Design"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                data-aos="fade-down"
              >
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Apps Design"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                data-aos="fade-down"
              >
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Interaction Design"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} data-aos="fade-up">
                <ServiceCard icon={<IoLogoWebComponent />} title="Branding " />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} data-aos="fade-up">
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Development"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} data-aos="fade-up">
                <ServiceCard icon={<IoLogoWebComponent />} title="Research " />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Service;
