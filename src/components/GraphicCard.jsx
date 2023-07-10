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
          <GraphicContainer>
            <MyImage
              src={graphicCard.graphic}
              style={{ opacity: graphicCard.opacity }}
            ></MyImage>
          </GraphicContainer>

          <H3 style={{ color: graphicCard.textColour }}>
            {graphicCard.heading}{" "}
          </H3>
          <Paragraph style={{ color: graphicCard.textColour }}>
            {graphicCard.paragraph}
          </Paragraph>
          <SecondaryButton href={graphicCard.link}>
            {graphicCard.button}
          </SecondaryButton>
        </PatternCard>
      ))}
    </Container>
  );
};

export default GraphicCards;

export const Container = styled(GridContainer)`
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
  justify-content: flex-end;
`;

export const GraphicContainer = styled.div`
  padding: 20px;
  width: 100%;
  aspect-ratio: 1/1;
  box-sizing: border-box;
`;
