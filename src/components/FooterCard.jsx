import React from "react";
import styled from "styled-components";
import {
  H3,
  Body,
  MyImage,
  PrimaryButton,
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
            <MyImage src={footerCard.image}></MyImage>
          </GraphicContainer>

          <H3 style={{ color: footerCard.textColour }}>{footerCard.heading}</H3>
          <Paragraph style={{ color: footerCard.textColour }}>
            {footerCard.paragraph}
          </Paragraph>
          <PrimaryButton>{footerCard.button}</PrimaryButton>
        </Container>
      ))}
    </div>
  );
};

export default FooterCards;

export const Container = styled(ParentContainer)`
  padding: 16px;
  border-radius: 20px;
  flex-direction: column;
  gap: 12px;
  margin: 24px 16px;
`;

export const Paragraph = styled(Body)`
  margin: 0px 0px 8px 0px;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  height: 60vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;
