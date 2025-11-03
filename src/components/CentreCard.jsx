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
        <CardLink href={graphicCard.link} target={graphicCard.target}>
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
        </CardLink>
      ))}
    </GridContainer>
  );
};

export default GraphicCards;

export const PatternCard = styled(CentreContainer)`
  padding: 64px;
  border-radius: 20px;
  background-color: #00002e;
  justify-content: flex-end;
  gap: 120px;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  overflow: hidden;

  /* Background image on pseudo-element */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: cover;
    background-position: center;
    transition: transform 0.4s ease-in-out;
    z-index: 0;
  }

  &:hover::before {
    transform: scale(1.04);
  }

  /* Ensure content is above background */
  > * {
    position: relative;
    z-index: 1;
  }

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

  transition: transform 0.3s ease-in-out;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.04); /* Scales up by 10% */
  }

  @media (max-width: 1280px) {
    padding-top: 40px;
  }

  @media (max-width: 414px) {
    padding-top: 24px;
  }
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex; /* Changed from block to flex */
  height: 100%;
  width: 100%;
`;
