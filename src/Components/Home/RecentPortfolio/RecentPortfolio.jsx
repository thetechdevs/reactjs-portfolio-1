import RecentPortfolioCard from "./RecentPortfolioCard/RecentPortfolioCard";
// import "./RecentPortfolio.css";
import recentProjects from "../../../dummyData/recentProjects/recentProjects";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Grid, Typography } from "@material-ui/core";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const RecentPortfolio = () => {
  return (
    <Container>
      <div className="container-fluid" style={{ margin: "30px 0" }}>
        <div className="container text-center" style={{ color: "#270D3D" }}>
          <Typography variant="h4" style={{ margin: "10px 0" }}>
            Recent{" "}
            <span style={{ color: "#f6ca00", marginLeft: "6px" }}>
              {" "}
              Project{" "}
            </span>
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            provident <br /> maiores veniam eveniet molestias sint perferendis
            labore
          </Typography>
        </div>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1000}
          infinite
          keyBoardControl
        >
          {recentProjects.map((review) => (
            <div key={review.id} style={{ margin: "30px 0" }}>
              <RecentPortfolioCard review={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default RecentPortfolio;
