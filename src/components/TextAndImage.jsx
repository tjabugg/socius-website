import React from "react";
import styled from "styled-components";
// import Wheat from "../assets/videos/wheat.mp4";
// import Wheat from "../assets/videos/wheat.mp4";
import Trust from "../assets/videos/light.mp4";
import {
  Subheading,
  Body,
  ParentContainer,
  ImageContainer,
  GridContainer,
  MyVideo,
  Caption,
  TertiaryButton,
} from "../styles";

// Destructure blogs and title directly from the props
const TextAndImages = () => (
  <Container>
    {/* {textAndImages.map((textAndImage) => ( */}
    <GridContainer>
      <TextContainer>
        <Caption>Research</Caption>
        <Subheading>Insights you trust, powered by understanding</Subheading>
        <Paragraph>
          Our research focuses on leveraging AI while maintaining transparency
          and interpretability.
        </Paragraph>
        <TertiaryButton href="research">
          Explore our collection
        </TertiaryButton>
      </TextContainer>

      <GraphicContainer>
      {/* <MyImage src={Wheat} /> */}

        <MyVideo
          // alt={secondaryHero.videoAlt}
          id="myVideoControls"
          src={Trust}
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        ></MyVideo>
      </GraphicContainer>
    </GridContainer>
  </Container>
);

export default TextAndImages;

export const Container = styled(ParentContainer)`
  padding: 24px;
  margin: 80px auto 0px auto;
  background-color: #d9ffd8;

  @media (max-width: 1728px) {
    margin: 80px 0px 0px 0px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    margin: 0px;
  }
`;

export const TextContainer = styled(ParentContainer)`
  border-radius: 20px;
  gap: 12px;
  margin: 0px;
  flex-direction: column;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Paragraph = styled(Body)`
  margin: 0px 0px 8px 0px;
`;

export const GraphicContainer = styled(ImageContainer)`
  aspect-ratio: 1/1;
  /* width: 50%; */

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
