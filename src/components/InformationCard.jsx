import React from "react";
import { Body, GridContainer, TertiaryButton } from "../styles";
import styled from "styled-components";
import { ParentContainer, Subtitle, MyImage } from "../styles";

// Destructure blogs and title directly from the props
const InformationCards = ({ informationCards }) => {
  return (
    <Container>
      {informationCards.map((informationCard) => (
        <PatternCard
          key={informationCard.id}
          style={{
            backgroundImage: `url(${informationCard.bgImage})`,
          }}
        >
          <Heading>{informationCard.heading}</Heading>
          <BottomContainer>
            <Body
              style={{
                color: "rgba(107, 107, 107)",
              }}
            >
              {informationCard.paragraph}
            </Body>
            {/* <TertiaryButton> View</TertiaryButton> */}
          </BottomContainer>
        </PatternCard>
      ))}
    </Container>
  );
};

export default InformationCards;

export const Container = styled(GridContainer)`
  grid-template-columns: 1fr 1fr 1fr;
  color: white;
  overflow-x: auto;

  /* @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`;

export const Heading = styled(Subtitle)`
  /* font-family: "Porpora Regular"; */
`;

export const PatternCard = styled(ParentContainer)`
  margin: 0px;
  padding: 20px;
  flex-direction: column;
  border-radius: 20px;
  background-size: cover;
  justify-content: flex-start;
  gap: 120px;
  /* aspect-ratio: 1/1; */

  @media (max-width: 1024px) {
    padding: 20px;
    width: 70vw;
  }
`;
export const BottomContainer = styled(ParentContainer)`
  margin: 0px;
  flex-direction: column;
  gap: 16px;
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
