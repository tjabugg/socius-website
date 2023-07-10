import React from "react";
import { Body, GridContainer, SecondaryButton } from "../styles";
import styled from "styled-components";
import { CentreContainer, H3, MyImage } from "../styles";

// Destructure blogs and title directly from the props
const GraphicCards = ({ graphicCards }) => {
  return (
    <Container>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {graphicCards.map((graphicCard) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <PatternCard
          key={graphicCard.id}
          style={{
            backgroundColor: graphicCard.bgcolor,
            backgroundImage: `url(${graphicCard.bgImage})`,
          }}
        >
          <Graphic
            src={graphicCard.graphic}
            style={{ opacity: graphicCard.opacity }}
          ></Graphic>
          <H3 style={{ color: graphicCard.textColour }}>
            {graphicCard.heading}{" "}
          </H3>
          <Paragraph style={{ color: graphicCard.textColour }}>
            {graphicCard.paragraph}
          </Paragraph>
          <SecondaryButton>{graphicCard.button}</SecondaryButton>
        </PatternCard>
      ))}
    </Container>
  );
};

export default GraphicCards;

export const Container = styled(GridContainer)`
/* align-items: stretch; */
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Paragraph = styled(Body)`
  padding: 16px 0px 16px 0px;
`;

export const PatternCard = styled(CentreContainer)`
  padding: 24px;
  border-radius: 20px;
  background-size: cover;
  
`;

export const Graphic = styled(MyImage)`
  object-fit: contain;
  padding: 0px 0px 24px 0px;
  border: none;
  /* aspect-ratio: 1/1; */
`;
