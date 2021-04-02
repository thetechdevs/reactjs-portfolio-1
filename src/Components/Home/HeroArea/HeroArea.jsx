import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Typical from "react-typical";

const HeroArea = () => {
  return (
    <Grid container item md={12} xl={12} xs={12} style={{ padding: "30px 0" }}>
      <Grid item md={6} sm={6} xs={12}>
        <div style={{ marginTop: "50px", paddingBottom: "30px" }}>
          <Typography variant="h2">
            Hay! I am <br />
            <span style={{ color: "#f9bb00" }}>
              <Typical
                steps={["Sree Sonjoy ", 1000, "Software Developer", 1500]}
                loop={Infinity}
                wrapper="h1"
              />
            </span>
          </Typography>
          <Typography variant="body1" style={{ margin: "25px 0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Typography>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              className="colorButton"
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#f9bb00",
                textTransform: "capitalize",
                width: "120px",
                borderRadius: "30px",
                fontSize: "16px",
                boxShadow: "0px 15px 18px #f9bb008c",
              }}
            >
              Hire Me
            </Button>
          </Link>
        </div>
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Hidden xsDown>
          <div style={{ width: "100%" }}>
            <img
              src="https://i.ibb.co/zn5jhx1/gril3.png"
              alt="portfolio"
              style={{ width: "75%" }}
            />
          </div>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HeroArea;
