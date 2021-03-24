import {
  Button,
  Card,
  CardContent,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Layout } from "../Home";
import "./Contact.scss";
import phoneImg from "../../assets/image/phone_social.png";
import PhoneIcon from "@material-ui/icons/Phone";
import { Container } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";
import EmailIcon from "@material-ui/icons/Email";
const Contact = () => {
  return (
    <Layout>
      <Grid container item md={12}>
        <div className="contact_info">
          <Typography variant="h3">Contact Us</Typography>
          <Typography variant="body1" style={{ marginTop: "15px" }}>
            There are many variations of passages of Lorem Ipsum available,
          </Typography>
        </div>
      </Grid>
      <div style={{ backgroundColor: "#e4eeff", padding: "60px 0" }}>
        <Container>
          <Grid container item md={12}>
            <Grid item md={6} sm={6} xs={12}>
              <div
                style={{
                  width: "100%",
                }}
              >
                <img
                  src={phoneImg}
                  alt="contact page"
                  style={{ width: "30%" }}
                />
              </div>
              <Grid container item md={12} style={{ padding: "30px 0" }}>
                <Grid item md={6} sm={12} xs={12}>
                  <Typography
                    variant="h6"
                    style={{ margin: "10px 0", fontWeight: "600" }}
                  >
                    Address
                  </Typography>
                  <Typography variant="body1" style={{ margin: "10px 0" }}>
                    Dhaka 1202 , Bangladesh
                  </Typography>
                  <Typography variant="body1" style={{ margin: "10px 0" }}>
                    Dhaka , Bangladesh
                  </Typography>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Typography
                    variant="h6"
                    style={{ margin: "10px 0", fontWeight: "600" }}
                  >
                    Phone
                  </Typography>
                  <Typography variant="body1" style={{ margin: "10px 0" }}>
                    <PhoneIcon /> +88017524623
                  </Typography>
                  <Typography variant="body1" style={{ margin: "10px 0" }}>
                    <PhoneIcon /> +88017524623
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={12}>
                <Typography
                  variant="h6"
                  style={{ margin: "10px 0", fontWeight: "600" }}
                >
                  Service
                </Typography>
                <li style={{ listStyle: "none", margin: "10px 0" }}>
                  <span style={{ marginRight: "6px" }}>
                    <LanguageIcon />
                  </span>
                  www.hello.com
                </li>
                <li style={{ listStyle: "none", margin: "10px 0" }}>
                  <span style={{ marginRight: "6px" }}>
                    <EmailIcon />
                  </span>
                  hello@gmail.com
                </li>
              </Grid>
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Card>
                <CardContent style={{ padding: "30px" }}>
                  <form>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" style={{ textAlign: "center" }}>
                        Send us a Email
                      </Typography>
                      <div style={{ margin: "7px 0" }}>
                        <Typography variant="subtitle1">Full Name</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="Your Name"
                          fullWidth
                        />
                      </div>
                      <div style={{ margin: "7px 0" }}>
                        <Typography variant="subtitle1">Email</Typography>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="test@gmail.com"
                          fullWidth
                        />
                      </div>
                      <div style={{ margin: "7px 0" }}>
                        <Typography variant="subtitle1">Message</Typography>
                        <TextareaAutosize
                          aria-label="minimum height"
                          rowsMin={3}
                          placeholder="Message"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{
                          backgroundColor: "#f9bb00",
                          textTransform: "capitalize",
                          width: "100%",
                          borderRadius: "30px",
                          fontSize: "16px",
                          padding: "15px",
                          boxShadow: "0px 15px 18px #f9bb008c",
                        }}
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
