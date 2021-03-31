import { Grid, Container, Button } from "@material-ui/core";
import { portfolios } from "../../dummyData/portfolio";
import Layout from "../Layout/index";
import { useState } from "react";
import LastPageIcon from "@material-ui/icons/LastPage";
import "./Portfolio.scss";
import SinglePortfolio from "./SinglePortfolio";

const Portfolio = () => {
  const [total, setTotal] = useState(false);
  const handleClick = () => {
    setTotal(true);
  };

  return (
    <Layout>
      <Container>
        <Grid
          container
          item
          md={12}
          spacing={3}
          style={{
            padding: "30px 0",
            display: "flex",
            alignItems: "center",
            margin: "auto",
          }}
        >
          {total ? (
            <>
              {portfolios &&
                portfolios.map((portfolios) => (
                  <Grid item md={4} sm={6} xs={12} key={portfolios.id}>
                    <SinglePortfolio data={portfolios} />
                  </Grid>
                ))}
            </>
          ) : (
            <>
              {portfolios &&
                portfolios.slice(0, 7).map((portfolios) => (
                  <Grid item md={4} sm={6} xs={12} key={portfolios.id}>
                    <SinglePortfolio data={portfolios} />
                  </Grid>
                ))}
            </>
          )}

          {!total && (
            <div>
              <Button
                variant="contained"
                onClick={handleClick}
                style={{
                  backgroundColor: "#f9bb00",
                  textTransform: "capitalize",
                  width: "150px",
                  borderRadius: "30px",
                  fontSize: "16px",
                  boxShadow: "0px 15px 18px #f9bb008c",
                  color: "#fff",
                }}
              >
                View All
                <span style={{ marginLeft: "6px" }}>
                  <LastPageIcon />
                </span>
              </Button>
            </div>
          )}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Portfolio;
