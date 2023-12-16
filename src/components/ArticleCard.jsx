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
              <Player hover src={articleCard.animation}></Player>
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
            Learn more
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
  /* margin: 0px 12px 24px 12px; */
  margin: 0px auto 80px auto;
  gap: 20px 0px;
  max-width: 1728px;

  @media (max-width: 1728px) {
    margin: 0px 12px 80px 12px;
  }

  // margin: 48px auto 48px auto;
  // max-width: 1728px;

  // @media (max-width: 1728px) {
  //   margin: 48px 24px 48px 24px;
  // }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 414px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.div`
  width: calc(33.3333333333% - 24px);
  margin: 0px 12px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin: 0px 10px 10px 10px;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  display: flex;
  aspect-ratio: 1/1;
  margin: 0px 0px 20px 0px;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 24px;
  }
`;

export const Graphic = styled.img`
  object-fit: cover;
  width: 100%;
`;
