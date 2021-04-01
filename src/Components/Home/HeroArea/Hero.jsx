import { Container } from "@material-ui/core";
import "./Hero.scss";
import HeroArea from "./HeroArea";

const Hero = () => {
  return (
    <section className="hero_bg">
      <Container>
        <HeroArea />
      </Container>
    </section>
  );
};

export default Hero;
