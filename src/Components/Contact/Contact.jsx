import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Layout } from "../Home";
import "./Contact.scss";

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
      <Grid container item md={12}>
        <Grid item md={6} sm={6} xs={12}></Grid>
        <Grid item md={6} sm={6} xs={12}></Grid>
      </Grid>
    </Layout>
  );
};

export default Contact;
