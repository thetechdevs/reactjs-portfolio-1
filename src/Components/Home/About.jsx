// import CSS
import "../Style/About.css";
// import bootstrap components
import { Col, Row } from "react-bootstrap";

// import assets
import aboutMe from "../../assets/image/aboutme.png";
import { Container } from "@material-ui/core";
import Layout from "../Layout";

const About = () => {
  return (
    <Layout>
      <div
        style={{
          // backgroundColor: "#110F1B",
          background: " linear-gradient(360deg, #ffffff, #ffffff)",
          padding: "30px 0px",
          // color: "white",
          color: "#000",
        }}
      >
        <Container>
          {/* <AboutMe /> */}
          <Row className="align-items-center">
            <Col md={5} sm={12} xs={12} lg={5}>
              <div style={{ width: "100%" }} className="aboutImg_Wrapper">
                <img
                  className="img-fluid w-100 h-100 aboutImg"
                  src={aboutMe}
                  alt=""
                />
              </div>
            </Col>
            <Col
              sm={12}
              xs={12}
              lg={{ span: 6, offset: 1 }}
              md={{ span: 6, offset: 1 }}
            >
              <h1 className="font-weight-bold">
                I am <span style={{ color: "#f9bb00" }}>Rayhan</span>
              </h1>
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
                  <p>Rayhan Islam</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={3} sm={4} xs={3}>
                  <p>Age</p>
                </Col>
                <Col md={1} lg={1} sm={1} xs={1}>
                  <span>:</span>
                </Col>
                <Col md={7} lg={8} sm={7} xs={7}>
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
                <Col md={7} lg={8} sm={7} xs={7}>
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
                <Col md={7} lg={8} sm={7} xs={7}>
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
                <Col md={7} lg={8} sm={7} xs={7}>
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
                <Col md={7} lg={8} sm={7} xs={7}>
                  <p>Available</p>
                </Col>
              </Row>
              <button
                className="btn btn-primary mt-3"
                style={{
                  backgroundColor: "#f9bb00",
                  textTransform: "capitalize",
                  // width: "120px",
                  borderRadius: "30px",
                  border: "none",
                  padding: "10px 25px",
                  fontSize: "16px",
                  boxShadow: "0px 15px 18px #f9bb008c",
                }}
              >
                DOWNLOAD CV
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

// function AboutMe() {
//   return (
//     <div>
//       <h1>ABOUT ME</h1>
//       <div className="UnderLine"></div>
//     </div>
//   );
// }

export default About;
