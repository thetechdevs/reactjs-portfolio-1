// import Bootstrap components
import { Row } from "react-bootstrap";
// import icons
import { FaDropbox, FcGoogle, SiSlack, GoFilePdf, FaSpotify } from "./index";
import "./CommentOfClient.scss";
import { Container, Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";

const CommentOfClient = () => {
  AOS.init({
    duration: 1500,
    offset: 50,
  });
  return (
    <section style={{ padding: "20px 0" }}>
      <Container>
        <div className="w-75 comment__title">
          <h2 className="font-weight-bold">
            Big <span style={{ color: "#f9bb00" }}> Clients </span>
          </h2>
          <Typography variant="subtitle1" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            aliquid recusandae distinctio consectetur nostrum nemo delectus
            dolor asperiores illo.
          </Typography>
        </div>
        <Row className="justify-content-center">
          <div
            className="dropbox_icon d-flex align-items-center justify-content-center"
            data-aos="flip-up"
          >
            <FaDropbox size="45px" color="#2196F3" className="commentIcon" />
          </div>
          <div
            className="google_icon d-flex align-items-center justify-content-center"
            data-aos="flip-up"
          >
            <FcGoogle size="45px" className="commentIcon" />
          </div>
          <div
            className="slack_icon d-flex align-items-center justify-content-center"
            data-aos="flip-up"
          >
            <SiSlack size="45px" className="commentIcon" />
          </div>
          <div
            className="filePdf_icon d-flex align-items-center justify-content-center"
            data-aos="flip-up"
          >
            <GoFilePdf size="45px" color="red" className="commentIcon" />
          </div>
          <div
            className="spotify_icon d-flex align-items-center justify-content-center"
            data-aos="flip-up"
          >
            <FaSpotify size="45px" color="#8CBA4C" className="commentIcon" />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CommentOfClient;
