import { useEffect, useState } from "react";
// import bootstrap components
import { Row, Col } from "react-bootstrap";
// import CSS
// import "./BlogPage.css";
import "./BlogPage.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import Layout from "../Layout";
// import dummyData
import blogPosts from "../../dummyData/DummyData";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogPage = () => {
  AOS.init({
    duration: 1500,
    offset: 50,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <Container>
          <Typography
            variant="h4"
            className="heading_line"
            style={{ marginBottom: "15px" }}
          >
            The <span style={{ color: "#f9bb00" }}> Blog</span>
          </Typography>
          <Row className="align-items-center">
            <Col lg={6} md={6} sm={12} xs={12}>
              <Link to="/">
                <div className="image_container blog_card" data-aos="zoom-in">
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://i.ibb.co/7Cy4DnZ/blog.jpg"
                    alt="prasonal blog"
                  />
                </div>
              </Link>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12} data-aos="fade-left">
              <div>
                <small className="text-muted">March 12, 2020</small>
                <Typography
                  variant="h5"
                  className="blog_heading blog_card"
                  style={{ margin: "15px 0" }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur, distinctio
                </Typography>
              </div>
            </Col>
          </Row>
          <div style={{ padding: "20px 0 30px 0" }}>
            <BlogPosts />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

const BlogPosts = () => {
  const [blogs] = useState(blogPosts);
  return (
    <>
      <Row>
        {blogs.map((blog) => (
          <Col lg={4} md={6} sm={12} xs={12} key={blog.id} data-aos="fade-up">
            <div className="mt-3 blog_card">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Card
                  style={{
                    border: "1px solid #f1f1f1",
                    outline: "none",
                    boxShadow: "none",
                    borderRadius: "10px",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <img
                      className="blog_image"
                      src={blog.image}
                      alt="parsonal blog"
                    />
                  </div>
                  <CardContent style={{ padding: "15px" }}>
                    <small className="text-muted">{blog.date}</small>
                    <Typography variant="h6" className="blog_title">
                      {blog.blog_title.substring(0, 23) + ".."}
                    </Typography>
                    <Typography variant="subtitle2" className="text-muted">
                      {blog.description.substring(0, 120) + ".."}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogPage;
