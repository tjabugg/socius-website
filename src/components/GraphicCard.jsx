import React from "react";
import {
  Body,
  GridContainer,
  // SecondaryButton,
  Small,
  Tag,
  TagContainer,
  TextContainer,
} from "../styles";
import styled from "styled-components";
import { CentreContainer, H5, MyImage } from "../styles";

// Destructure blogs and title directly from the props
const GraphicCards = ({ graphicCards }) => {
  return (
    <GridContainer
      style={{
        gridAutoRows: "1fr",
      }}
    >
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
          <CustomTextContainer>
            <TagContainer>
              <Tag
                style={{
                  backgroundColor: graphicCard.tagOneBgColour,
                }}
              >
                <Small
                  style={{
                    color: graphicCard.tagOneColour,
                  }}
                >
                  {graphicCard.captionOne}
                </Small>
              </Tag>

              <Tag
                style={{
                  backgroundColor: graphicCard.tagTwoBgColour,
                }}
              >
                <Small
                  style={{
                    color: graphicCard.tagTwoColour,
                  }}
                >
                  {graphicCard.captionTwo}
                </Small>
              </Tag>
            </TagContainer>

            <H5
              style={{
                color: "white",
              }}
            >
              {graphicCard.heading}
            </H5>
            <Body
              style={{
                color: "white",
                // marginBottom: "8px",
              }}
            >
              {graphicCard.paragraph}
            </Body>
          </CustomTextContainer>

          {/* <SecondaryButton href={graphicCard.link}>Learn more</SecondaryButton> */}
        </PatternCard>
      ))}
    </GridContainer>
  );
};

export default GraphicCards;

export const PatternCard = styled(CentreContainer)`
  padding: 64px;
  border-radius: 20px;
  background-size: cover;
  justify-content: flex-end;
  background-color: #00002e;
  /* aspect-ratio: 1/1; */
  gap: 120px;

  @media (max-width: 1280px) {
    padding: 40px;
    gap: 64px;
  }

  @media (max-width: 1024px) {
    padding: 40px;
    gap: 40px;
  }

  @media (max-width: 414px) {
    gap: 40px;
    padding: 40px;
  }
`;

export const CustomTextContainer = styled(TextContainer)`
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
`;
export const GraphicContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  padding-top: 64px;

  @media (max-width: 1280px) {
    padding-top: 40px;
  }

  @media (max-width: 414px) {
    padding-top: 24px;
  }
`;
