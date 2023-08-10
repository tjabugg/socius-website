import React from "react";
import styled from "styled-components";
import {
  Subtitle,
  SecondaryButton,
  Body,
  ParentContainer,
  ImageContainer,
} from "../styles";
import { Player } from "@lottiefiles/react-lottie-player";

// Destructure blogs and title directly from the props
const ArticleCards = ({ articleCards, alignment }) => {
  return (
    <CardContainer
      style={{
        justifyContent: alignment,
      }}
    >
      {articleCards.map((articleCard) => (
        <ArticleCard key={articleCard.id}>
          <GraphicContainer
            style={{
              backgroundColor: articleCard.bgColour,
              padding: articleCard.padding,
            }}
          >
            {articleCard.animation ? (
              <Player
                // autoplay
                // loop
                hover={true}
                src={articleCard.animation}
              ></Player>
            ) : null}

            {articleCard.image ? (
              <Graphic src={articleCard.image} alt={articleCard.alt}></Graphic>
            ) : null}
          </GraphicContainer>

          <Subtitle
            style={{
              marginBottom: "8px",
            }}
          >
            {articleCard.heading}
          </Subtitle>
          <Body
            style={{
              marginBottom: "16px",
            }}
          >
            {articleCard.paragraph}
          </Body>
          <SecondaryButton
            style={{
              alignSelf: "flex-start",
            }}
            href={articleCard.link}
          >
            {articleCard.button}Learn more
          </SecondaryButton>
        </ArticleCard>
      ))}
    </CardContainer>
  );
};

export default ArticleCards;

export const CardContainer = styled(ParentContainer)`
  flex-wrap: wrap;
  /* justify-content: center; */
  margin: 0px 10px 24px 10px;
  gap: 20px 0px;
`;

export const ArticleCard = styled.div`
  width: calc(33.3333333333% - 20px);
  margin: 0px 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin: 0px 10px 24px 10px;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  display: flex;
  aspect-ratio: 1/1;
  margin: 0px 0px 16px 0px;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Graphic = styled.img`
  object-fit: cover;
  width: 100%;
`;
