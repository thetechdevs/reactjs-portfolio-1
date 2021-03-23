// import Bootstrap components
import { Row } from "react-bootstrap";
// import icons
import { FaDropbox, FcGoogle, SiSlack, GoFilePdf, FaSpotify } from "./index";
// import CSS style
import "../../Style/CommentOfClient.css";
import { Container } from "@material-ui/core";
const CommentOfClient = () => {
  return (
    <section style={{ padding: "20px 0" }}>
      <Container>
        <div className="w-75">
          <h2 className="font-weight-bold">
            Big <span style={{ color: "#f9bb00" }}> Clients </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui
            aliquid recusandae distinctio consectetur nostrum nemo delectus
            dolor asperiores illo.
          </p>
        </div>
        <Row className="justify-content-center">
          <div className="dropbox_icon d-flex align-items-center justify-content-center">
            <FaDropbox size="45px" color="#2196F3" />
          </div>
          <div className="google_icon d-flex align-items-center justify-content-center">
            <FcGoogle size="45px" />
          </div>
          <div className="slack_icon d-flex align-items-center justify-content-center">
            <SiSlack size="45px" />
          </div>
          <div className="filePdf_icon d-flex align-items-center justify-content-center">
            <GoFilePdf size="45px" color="red" />
          </div>
          <div className="spotify_icon d-flex align-items-center justify-content-center">
            <FaSpotify size="45px" color="#8CBA4C" />
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default CommentOfClient;
