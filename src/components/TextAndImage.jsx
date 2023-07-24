import React from "react";
import styled from "styled-components";
import {
  Subheading,
  Body,
  PrimaryButton,
  ParentContainer,
  ImageContainer,
  MyVideo,
  MyImage,
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
            <Subheading>{textAndImage.heading}</Subheading>
            <Paragraph>{textAndImage.paragraph}</Paragraph>
            <PrimaryButton href={textAndImage.link}>
              {textAndImage.button}
            </PrimaryButton>
          </TextContainer>

          <GraphicContainer>
            <MyImage
              alt={textAndImage.alt}
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
              autoPlay={true}
              loop={true}
              playsInline={true}
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
    gap: 8px;
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
