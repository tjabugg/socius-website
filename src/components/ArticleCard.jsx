import React from "react";
import styled from "styled-components";
import {
  Subtitle,
  SecondaryButton,
  Body,
  ParentContainer,
  ImageContainer,
} from "../styles";

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
            <Graphic src={articleCard.image} alt={articleCard.alt}></Graphic>
          </GraphicContainer>

          <Heading>{articleCard.heading}</Heading>
          <Paragraph>{articleCard.paragraph}</Paragraph>
          <SecondaryButton href={articleCard.link}>
            {articleCard.button}Read more
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
  margin: 8px;
  gap: 0px;
`;

export const ArticleCard = styled.div`
  width: calc(33.3333333333% - 20px);
  margin: 20px 8px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Heading = styled(Subtitle)`
  margin: 0px 0px 8px 0px;
`;

export const Paragraph = styled(Body)`
  margin: 0px 0px 24px 0px;
`;

export const GraphicContainer = styled(ImageContainer)`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
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
