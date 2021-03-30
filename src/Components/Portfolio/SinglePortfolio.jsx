import { Button, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LastPageIcon from "@material-ui/icons/LastPage";
import "./Portfolio.scss";
const SinglePortfolio = ({ data }) => {
  const [total, setTotal] = useState(false);

  const handleClick = () => {
    setTotal(true);
  };
  return (
    <React.Fragment>
      <Grid
        container
        item
        md={12}
        spacing={3}
        style={{
          display: "flex",
          alignItems: "center",
        }}
        className="portfolio_wrapper"
      >
        {total ? (
          <>
            {data &&
              data.map((el) => (
                <Grid item md={4} sm={6} xs={12} key={el.id}>
                  <Card className="portfolioCard">
                    <CardMedia
                      component="img"
                      height="350"
                      image={el.image}
                      alt="My Portfolio"
                      title="My Portfolio"
                    />
                    <div className="portfolioCardHover">
                      <Typography variant="h6" style={{ fontWeight: "700" }}>
                        {el.name}
                      </Typography>
                      <Typography variant="subtitle1">{el.category}</Typography>
                    </div>
                  </Card>
                </Grid>
              ))}
          </>
        ) : (
          <>
            {data &&
              data.slice(0, 7).map((el) => (
                <Grid item md={4} sm={6} xs={12} key={el.id}>
                  <Card className="portfolioCard">
                    <CardMedia
                      component="img"
                      height="350"
                      image={el.image}
                      alt="My Portfolio"
                      title="My Portfolio"
                    />
                    <div className="portfolioCardHover">
                      <Typography variant="h6" style={{ fontWeight: "700" }}>
                        {el.name}
                      </Typography>
                      <Typography variant="subtitle1">{el.category}</Typography>
                    </div>
                  </Card>
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
              View All{" "}
              <span style={{ marginLeft: "6px" }}>
                <LastPageIcon />{" "}
              </span>
            </Button>
          </div>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default SinglePortfolio;
