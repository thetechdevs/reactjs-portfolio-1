import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServiceCard from '../Utilities/ServiceCard/ServiceCard';
import { IoLogoWebComponent } from "react-icons/io5";
import serviceStyle from "./Service.module.scss";
const Service = () => {
    return (
        <div className={serviceStyle.serviceMain}>
            <h6 className={serviceStyle.serviceMain__service}>Service</h6>
            <h1 className={serviceStyle.serviceMain__title}>
                What we do
            </h1>
            <div className={serviceStyle.serviceMain__content}>
            <Container>
  <Row>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
      <ServiceCard icon={<IoLogoWebComponent/>} title="Graphic Design" />
    </Col>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
    <ServiceCard icon={<IoLogoWebComponent/>} title="Apps Design"/>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
    <ServiceCard icon={<IoLogoWebComponent/>} title="Interaction Design"/>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
    <ServiceCard icon={<IoLogoWebComponent/>} title="Branding "/>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
    <ServiceCard icon={<IoLogoWebComponent/>} title="Development"/>
    </Col>
    <Col xs={12} sm={6} md={4} lg={4} xl={4}>
    <ServiceCard icon={<IoLogoWebComponent/>} title="Research "/>
    </Col>
  </Row>
</Container>
            </div>
        </div>
    );
};

export default Service;