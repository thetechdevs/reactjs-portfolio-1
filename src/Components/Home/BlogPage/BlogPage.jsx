import { useState } from "react";
// import bootstrap components
// import { Row, Col, Card } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
// import assets
import BlogImage from "../../../assets/image/blog.png";
// import CSS
import "./BlogPage.css";
// import dummyData
import blogPosts from "../../../dummyData/DummyData";
import { Card, CardContent, Container, Typography } from "@material-ui/core";
import Layout from "../../Layout";

const BlogPage = () => {
  return (
    <Layout>
      {/* <div style={{ backgroundColor: "#E5E6EB" }}> */}
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
              <div className="image_container blog_card">
                <img className="image-fluid" src={BlogImage} alt="" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
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
  const [blogs, setBlogs] = useState(blogPosts);
  return (
    <>
      <Row>
        {blogs.map((blog) => (
          <Col lg={4} md={6} sm={12} xs={12}>
            <div className="mt-5 blog_card">
              {/* <Card style={{ backgroundColor: "#E5E6EB", border: "none" }}> */}
              <Card style={{ border: "none" }}>
                <div style={{ overflow: "hidden" }}>
                  <img className="blog_image" src={blog.image} alt="" />
                </div>
                <CardContent style={{ padding: "20px" }}>
                  <small className="text-muted">{blog.date}</small>
                  <Typography variant="h6" className="blog_title">
                    {blog.blog_title.substring(0, 25) + ".."}
                  </Typography>
                  <Typography variant="subtitle1" className="text-muted">
                    {blog.description.substring(0, 120) + ".."}
                  </Typography>
                </CardContent>
              </Card>
              {/* <Card style={{ backgroundColor: "#E5E6EB", border: "none" }}>
                <div style={{ overflow: "hidden" }}>
                  <img className="blog_image" src={blog.image} alt="" />
                </div>
                <Card.Body style={{ padding: "20px 0px 0px 0px" }}>
                  <small className="text-muted">{blog.date}</small>
                  <p className="blog_title">
                    {blog.blog_title.substring(0, 25) + ".."}
                  </p>
                  <p className="text-muted">
                    {blog.description.substring(0, 120) + ".."}
                  </p>
                </Card.Body>
              </Card> */}
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogPage;
