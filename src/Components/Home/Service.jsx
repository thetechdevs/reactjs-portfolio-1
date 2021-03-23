import React from "react";
import { Col, Row } from "react-bootstrap";
import ServiceCard from "../Utilities/ServiceCard/ServiceCard";
import { IoLogoWebComponent } from "react-icons/io5";
import serviceStyle from "./Service.module.scss";
import { Container, Grid } from "@material-ui/core";
const Service = () => {
  return (
    <section>
      <div className={serviceStyle.serviceMain}>
        <h6 className={serviceStyle.serviceMain__service}>Service</h6>
        <h1 className={serviceStyle.serviceMain__title}>
          What <span style={{ color: "#f9bb00" }}>We Do</span>{" "}
        </h1>
        <div className={serviceStyle.serviceMain__content}>
          <Container style={{ padding: "20px" }}>
            <Grid container item md={12} spacing={2} style={{ padding: "0" }}>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Graphic Design"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Apps Design"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Interaction Design"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ServiceCard icon={<IoLogoWebComponent />} title="Branding " />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                <ServiceCard
                  icon={<IoLogoWebComponent />}
                  title="Development"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
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

// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import ServiceCard from "../Utilities/ServiceCard/ServiceCard";
// import { IoLogoWebComponent } from "react-icons/io5";
// import serviceStyle from "./Service.module.scss";
// import { Container } from "@material-ui/core";
// const Service = () => {
//   return (
//     <div className={serviceStyle.serviceMain}>
//       <h6 className={serviceStyle.serviceMain__service}>Service</h6>
//       <h1 className={serviceStyle.serviceMain__title}>What we do</h1>
//       <div className={serviceStyle.serviceMain__content}>
//         <Container>
//           <Row>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard
//                 icon={<IoLogoWebComponent />}
//                 title="Graphic Design"
//               />
//             </Col>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard icon={<IoLogoWebComponent />} title="Apps Design" />
//             </Col>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard
//                 icon={<IoLogoWebComponent />}
//                 title="Interaction Design"
//               />
//             </Col>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard icon={<IoLogoWebComponent />} title="Branding " />
//             </Col>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard icon={<IoLogoWebComponent />} title="Development" />
//             </Col>
//             <Col xs={12} sm={6} md={4} lg={4} xl={4}>
//               <ServiceCard icon={<IoLogoWebComponent />} title="Research " />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Service;
