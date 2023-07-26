import React from "react";
import { Body, GridContainer, SecondaryButton } from "../styles";
import styled from "styled-components";
import { CentreContainer, Title, MyImage } from "../styles";
import LandscapePattern from "../assets/svgs/random/landscape_card_pattern.svg";
import SquarePattern from "../assets/svgs/random/square_card_pattern.svg";

// Destructure blogs and title directly from the props
const GraphicCards = ({ graphicCards }) => {
  return (
    <Container>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {/* {graphicCards.map((graphicCard) => ( */}
      {/* // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom */}
      <PatternCard>
        <GraphicContainer>
          <LandscapeCard alt={`Full bleed pattern`} src={LandscapePattern} />
          <SquareCard alt={`Full bleed pattern`} src={SquarePattern} />
        </GraphicContainer>

        <Heading>CompliSent: a first step to compliance-proof</Heading>
        <Paragraph>
          Aspect-based sentiment analysis model that analyses text-based data
          ranging from media and social media.
        </Paragraph>

        <SecondaryButton href="complisent">Read more</SecondaryButton>
      </PatternCard>
      {/* ))} */}
    </Container>
  );
};

export default GraphicCards;

export const Container = styled(GridContainer)`
  grid-template-columns: 1fr;
  color: white;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Heading = styled(Title)`
  color: white;
`;

export const Paragraph = styled(Body)`
  padding: 16px 0px 16px 0px;
  color: white;
`;

export const PatternCard = styled(CentreContainer)`
  padding: 24px 120px;
  border-radius: 20px;
  background-size: cover;
  justify-content: flex-end;
  background-color: #00002e;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const GraphicContainer = styled.div`
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const LandscapeCard = styled(MyImage)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SquareCard = styled(MyImage)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
