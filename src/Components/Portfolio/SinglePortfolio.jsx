import { Card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import "./Portfolio.scss";
import Dialogs from "../Utilities/metarial/Dailog";

const SinglePortfolio = ({ data }) => {
  const portfolioCard = (
    <Card className="portfolioCards">
      <CardMedia
        component="img"
        height="350"
        image={data.image}
        alt="My Portfolio"
        title="My Portfolio"
      />
      <div className="portfolioCardHover">
        <Typography variant="h6" style={{ fontWeight: "700" }}>
          {data.name}
        </Typography>
        <Typography variant="subtitle1">{data.category}</Typography>
      </div>
    </Card>
  );

  const dialogPortfolio = (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", height: "180px" }}
      >
        <img
          src={data.image}
          alt="project images"
          style={{ height: "100%", borderRadius: "10%" }}
        />
      </div>
      <Typography variant="h6" color="initial" style={{ fontWeight: "600" }}>
        {data.name}
      </Typography>
      <Typography
        variant="subtitle1"
        color="initial"
        style={{ fontWeight: "500" }}
      >
        {data.category}
      </Typography>
      <Typography variant="subtitle2" color="initial">
        {data.description}
      </Typography>
    </div>
  );

  return (
    <React.Fragment>
      <Dialogs
        btnText={portfolioCard}
        title="Portfolio Project Details"
        children={dialogPortfolio}
      />
    </React.Fragment>
  );
};

export default SinglePortfolio;
