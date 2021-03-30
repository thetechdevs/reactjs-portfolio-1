import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import heroImg from "../../../assets/hero/pngtree-background-shape.png";
import "./Hero.scss";

const HeroArea = () => {
  return (
    <Grid container item md={12} xl={12} xs={12}>
      <Grid item md={6} sm={6} xs={12}>
        <div style={{ marginTop: "50px", paddingBottom: "30px" }}>
          <Typography variant="h2">
            Hy! I am <br />
            <span style={{ color: "#f9bb00" }}>Sree Sonjoy</span>
          </Typography>
          <Typography variant="body1" style={{ margin: "25px 0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
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
        </div>
      </Grid>
      <Grid item md={6} sm={6} xs={12}>
        <Hidden xsDown>
          <div style={{ width: "100%" }}>
            <img src={heroImg} alt="portfolio" style={{ width: "90%" }} />
          </div>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default HeroArea;
