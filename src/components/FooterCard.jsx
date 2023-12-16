import React from "react";
import styled from "styled-components";
import {
  Title,
  Body,
  MyImage,
  SecondaryButton,
  ParentContainer,
  ImageContainer,
} from "../styles";

// Destructure blogs and title directly from the props
const FooterCards = ({ footerCards }) => {
  return (
    <div>
      {footerCards.map((footerCard) => (
        <Container
          key={footerCard.id}
          style={{
            backgroundColor: footerCard.bgColour,
          }}
        >
          <GraphicContainer>
            <MyImage src={footerCard.image} alt={footerCard.alt}></MyImage>
          </GraphicContainer>

          <Heading style={{ color: footerCard.textColour }}>
            {footerCard.heading}
          </Heading>
          <Paragraph style={{ color: footerCard.textColour }}>
            {footerCard.paragraph}
          </Paragraph>
          <SecondaryButton href={footerCard.link}>
            {footerCard.button}
          </SecondaryButton>
        </Container>
      ))}
    </div>
  );
};

export default FooterCards;

export const Container = styled(ParentContainer)`
  padding: 24px;
  border-radius: 20px;
  flex-direction: column;
  gap: 0px;
  margin: auto;

  @media (max-width: 1728px) {
    margin: 24px;
  }
`;

export const Heading = styled(Title)`
  margin-bottom: 8px;
`;

export const Paragraph = styled(Body)`
  margin-bottom: 16px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  height: 60vh;
  width: 100%;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;
