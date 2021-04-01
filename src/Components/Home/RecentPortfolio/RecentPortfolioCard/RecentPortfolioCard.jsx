import { Card, CardMedia } from "@material-ui/core";
import React from "react";

// import CSS
import "./RecentPortfolioCard.css";

const RecentPortfolioCard = ({ review }) => {
  return (
    <Card style={{ margin: "0 15px" }} className="recentPortfolio">
      <CardMedia
        component="img"
        alt="My Recent Projects"
        height="400"
        image={review.img}
        title="My Recent Projects"
        style={{ border: "none", outline: "none", width: "100%" }}
        className="recentPortfolioImg"
      />
    </Card>
  );
};

export default RecentPortfolioCard;
