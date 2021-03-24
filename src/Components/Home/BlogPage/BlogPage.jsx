import { useState } from "react";
// import bootstrap components
import { Row, Col, Card } from "react-bootstrap";
// import assets
import BlogImage from "../../../assets/image/blog.png";
// import CSS
import "./BlogPage.css";
// import dummyData
import blogPosts from "../../../dummyData/DummyData";
import { Container } from "@material-ui/core";
import Layout from "../../Layout";

const BlogPage = () => {
  return (
    <Layout>
      <Container>
        <p className="heading_line">The Blog</p>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="image_container blog_card">
              <img className="image-fluid" src={BlogImage} alt="" />
            </div>
          </Col>
          <Col lg={4} md={6} sm={12} xs={12}>
            <small className="text-muted">March 12, 2020</small>
            <p className="blog_heading blog_card">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              distinctio
            </p>
          </Col>
        </Row>
        <BlogPosts />
      </Container>
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
              <Card style={{ backgroundColor: "#E5E6EB", border: "none" }}>
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
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BlogPage;
