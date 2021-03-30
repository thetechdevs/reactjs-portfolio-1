import { Grid, Container } from "@material-ui/core";
import { portfolios } from "../../dummyData/portfolio";
import Layout from "../Layout/index";
import "./Portfolio.scss";
import SinglePortfolio from "./SinglePortfolio";

const Portfolio = () => {
  return (
    <Layout>
      <Container>
        <Grid container item md={12} spacing={3} style={{ padding: "30px 0" }}>
          <SinglePortfolio data={portfolios} />
        </Grid>
      </Container>
    </Layout>
  );
};

export default Portfolio;
