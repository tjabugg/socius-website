import React from "react";
import styled from "styled-components";
import {
  H2,
  Body,
  PrimaryButton,
  ParentContainer,
  ImageContainer,
  MyVideo,
  MyImage
} from "../styles";

// Destructure blogs and title directly from the props
const TextAndImages = ({ textAndImages }) => {
  return (
    <div>
      {textAndImages.map((textAndImage) => (
        <HoldingContainer
          key={textAndImage.id}
          style={{
            backgroundColor: textAndImage.bgColour,
          }}
        >
          <TextContainer>
            <H2>{textAndImage.heading}</H2>
            <Paragraph>{textAndImage.paragraph}</Paragraph>
            <PrimaryButton href={textAndImage.link}>
              {textAndImage.button}
            </PrimaryButton>
          </TextContainer>

          <GraphicContainer>
            <MyImage
              style={{
                display: textAndImage.imageDisplay,
              }}
              src={textAndImage.image}
            ></MyImage>
            <MyVideo
              style={{
                display: textAndImage.display,
              }}
              src={textAndImage.video}
              autoplay="true"
              loop="true"
            ></MyVideo>
          </GraphicContainer>
        </HoldingContainer>
      ))}
    </div>
  );
};

export default TextAndImages;

export const HoldingContainer = styled(ParentContainer)`
  /* gap: 16px; */
  align-items: flex-end;
  margin-top: 40px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: left;
    gap: 40px;
  }
`;

export const TextContainer = styled(ParentContainer)`
  border-radius: 20px;
  gap: 12px;
  margin: 0px;
  flex-direction: column;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Paragraph = styled(Body)`
  margin: 0px 0px 8px 0px;
`;

export const GraphicContainer = styled(ImageContainer)`
  aspect-ratio: 1/1;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
