// import CSS
import "../Style/About.css";

// import bootstrap components
import { Col, Row } from "react-bootstrap";

// import assets
import aboutMe from "../../assets/image/aboutMe.jpg";
import { Container } from "@material-ui/core";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <div
        className="about_Wrapper"
        style={{ padding: "30px 0px", color: "white" }}
      >
        <Container>
          <AboutMe />
          <Row className="align-items-center">
            <Col md={6} sm={12} xs={12} lg={6}>
              <img className="img-fluid w-100 h-100" src={aboutMe} alt="" />
            </Col>
            <Col md={6} sm={12} xs={12} lg={6}>
              <h2>
                I am <span style={{ color: "blueviolet" }}>John</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                amet id libero maiores, veritatis ducimus? Optio omnis nam
                quibusdam non hic iusto asperiores impedit voluptatem,
                consequatur quis!
              </p>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Full Name</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={7}>
                  <p>Johny Sign</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Age</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={8}>
                  <p>25 Years</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Nationality</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={8}>
                  <p>America</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Language</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={8}>
                  <p>English, French</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Address</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={8}>
                  <p>120, South Mugda</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Freelance</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={8}>
                  <p>Available</p>
                </Col>
              </Row>
              <button className="btn btn-primary mt-3">DOWNLOAD CV</button>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

function AboutMe() {
  return (
    <div>
      <h1 style={{ color: "#000" }}>ABOUT ME</h1>
      <div className="UnderLine"></div>
    </div>
  );
}

export default About;
