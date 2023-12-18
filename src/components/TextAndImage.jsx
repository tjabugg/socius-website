import React from "react";
import styled from "styled-components";
import Wheat from "../assets/images/wheat.jpg";
import {
  Subheading,
  Body,
  PrimaryButton,
  ParentContainer,
  ImageContainer,
  GridContainer,
  MyImage,
} from "../styles";

// Destructure blogs and title directly from the props
const TextAndImages = ({ textAndImages }) => {
  return (
    <Container>
      {textAndImages.map((textAndImage) => (
        <GridContainer key={textAndImage.id}>
          <TextContainer>
            <Subheading>Open Data</Subheading>
            <Paragraph>
              AI runs on data. Our growing open data repository curates diverse
              datasets to power new breakthroughs.
            </Paragraph>
            <PrimaryButton href="/sentibank">
              Explore our collection
            </PrimaryButton>
          </TextContainer>

          <GraphicContainer>
            <MyImage src={Wheat} />
          </GraphicContainer>
        </GridContainer>
      ))}
    </Container>
  );
};

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
  align-self: flex-end;

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
