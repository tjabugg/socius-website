import React from "react";
import { MyImage, H1 } from "../styles";
import HeroImage from "../assets/images/aerial_people_shot.jpg";
import styled from "styled-components";
import HeroPattern from "../assets/svgs/random/random_hero_pattern.svg";

const Hero = () => (
  <HeroContainer>
    <MyImage
      style={{
        borderRadius: "0px",
      }}
      alt={`A portrait of Tony Bugg`}
      src={HeroImage}
    />
    <PatternContainer>
      <MyImage alt={`Full bleed pattern`} src={HeroPattern} />
    </PatternContainer>

    <Heading>
      Empowering the pioneers of today’s social science research
    </Heading>
  </HeroContainer>
);

export default Hero;

export const HeroContainer = styled.div`
  height: 90vh;
  box-sizing: border-box;

  @media (max-width: 800px) {
  }
`;

export const PatternContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
`;

export const Heading = styled(H1)`
  width: 80%;
  position: absolute;
  top: 80px;
  left: 16px;
  color: white;
`;
