import React from "react";
import { Body, GridContainer, SecondaryButton } from "../styles";
import styled from "styled-components";
import { CentreContainer, Title, MyImage } from "../styles";
import Random16x9Pattern01 from "../assets/svgs/random/random_16x9_01.svg";

// Destructure blogs and title directly from the props
const GraphicCards = ({ graphicCards }) => {
  return (
    <Container>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {/* {graphicCards.map((graphicCard) => ( */}
      {/* // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom */}
      <PatternCard
      // key={graphicCard.id}
      // style={{
      //   backgroundColor: graphicCard.bgcolor,
      //   backgroundImage: `url(${graphicCard.bgImage})`,
      // }}
      >
        <GraphicContainer>
          <MyImage
            src={Random16x9Pattern01}
            alt="A random cell based pattern"
          ></MyImage>
        </GraphicContainer>

        <Title>CompliSent: a first step to compliance-proof</Title>
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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
  background-color: #193718;
  color: white;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }
`;

export const GraphicContainer = styled.div`
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
`;
