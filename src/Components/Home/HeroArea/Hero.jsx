import { Container } from "@material-ui/core";
import "./Hero.scss";
import HeroArea from "./HeroArea";

const Hero = () => {
  return (
    <div className="hero_bg">
      <Container>
        <HeroArea />
      </Container>
    </div>
  );
};

export default Hero;
