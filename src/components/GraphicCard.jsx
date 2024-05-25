import React from "react";
import { Body, GridContainer, SecondaryButton } from "../styles";
import styled from "styled-components";
import { CentreContainer, Subtitle, MyImage } from "../styles";


// Destructure blogs and title directly from the props
const GraphicCards = ({ graphicCards }) => {
  return (
    <Container>
      {graphicCards.map((graphicCard) => (
        <PatternCard
          key={graphicCard.id}
          style={{
            backgroundImage: `url(${graphicCard.bgImage})`,
          }}
        >
          <GraphicContainer>
            {graphicCard.image ? (
              <MyImage
                style={{
                  objectFit: "contain",
                }}
                src={graphicCard.image}
                alt={`Socius pattern`}
              ></MyImage>
            ) : null}
          </GraphicContainer>

          <Subtitle
            style={{
              color: "white",
            }}
          >
            {graphicCard.heading}
          </Subtitle>
          <Body
            style={{
              color: "white",
              // marginBottom: "8px",
            }}
          >
            {graphicCard.paragraph}
          </Body>

          <SecondaryButton href={graphicCard.link}>Learn more</SecondaryButton>
        </PatternCard>
      ))}
    </Container>
  );
};

export default GraphicCards;

export const Container = styled(GridContainer)`
  grid-template-columns: 1fr 1fr;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PatternCard = styled(CentreContainer)`
  padding: 40px;
  border-radius: 20px;
  background-size: cover;
  justify-content: flex-end;
  background-color: #00002e;
  gap: 16px;
  /* aspect-ratio: 1/1; */

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const GraphicContainer = styled.div`
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  max-width: 600px;

  @media (max-width: 1600px) {
    max-width: 500px;
  }

  @media (max-width: 1024px) {
    padding: 0px 40px;
  }
`;
