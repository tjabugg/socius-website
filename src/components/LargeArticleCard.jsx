import styled from "styled-components";
import {
  H5,
  Tag,
  Body,
  TagContainer,
  GridContainer,
  ImageContainer,
  Small,
  MyImage,
  TextContainer,
} from "../styles";

// Destructure blogs and title directly from the props
const LargeArticleCards = ({ largeArticleCards, grid }) => {
  return (
    <CardContainer grid={grid}>
      {largeArticleCards.map((largeArticleCard) => (
        <a href={largeArticleCard.link} target={largeArticleCard.target}>
          <LargeArticleCard
            style={{
              flexDirection: largeArticleCard.flexDirection,
            }}
            key={largeArticleCard.id}
          >
            <ImageContainer
              style={{
                backgroundColor: largeArticleCard.bgColour,
                padding: largeArticleCard.padding,
                aspectRatio: largeArticleCard.aspectRatio,
              }}
            >
              {largeArticleCard.image ? (
                <ImageHover
                  src={largeArticleCard.image}
                  alt={largeArticleCard.alt}
                ></ImageHover>
              ) : null}
            </ImageContainer>

            <TextContainer>
              {largeArticleCard.captionOne ? (
                <TagContainer>
                  <Tag
                    style={{
                      backgroundColor: largeArticleCard.tagOneBgColour,
                    }}
                  >
                    <Small
                      style={{
                        color: largeArticleCard.tagOneColour,
                      }}
                    >
                      {largeArticleCard.captionOne}
                    </Small>
                  </Tag>

                  <Tag
                    style={{
                      backgroundColor: largeArticleCard.tagTwoBgColour,
                    }}
                  >
                    <Small
                      style={{
                        color: largeArticleCard.tagTwoColour,
                      }}
                    >
                      {largeArticleCard.captionTwo}
                    </Small>
                  </Tag>
                </TagContainer>
              ) : null}

              <H5>{largeArticleCard.heading}</H5>
              <Body>{largeArticleCard.paragraph}</Body>
            </TextContainer>
          </LargeArticleCard>
        </a>
      ))}
    </CardContainer>
  );
};

export default LargeArticleCards;

export const CardContainer = styled(GridContainer)`
  grid-template-columns: ${(props) => props.grid || "1fr"};
  padding: 0px;
  max-width: 1728px;
  grid-template-rows: auto;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 40px;
    margin-bottom: 16px;
  }
`;

export const LargeArticleCard = styled.div`
  /* width: calc(33.3333333333% - 24px); */
  display: flex;
  flex-direction: column;
  /* margin: 0px 12px; */
  gap: 16px;
  /* display: flex; */

  @media (min-width: 1024px) {
    ${ImageContainer} {
      ${(props) =>
        props.style?.flexDirection === "row"
          ? `
      flex: 0 1 50%;
    `
          : ""}
    }

    ${TextContainer} {
      ${(props) =>
        props.style?.flexDirection === "row"
          ? `
      flex: 1 1 50%;
    `
          : ""}
    }
    @media (max-width: 1024px) {
      ${ImageContainer} {
        ${(props) =>
          props.style?.flexDirection === "row"
            ? `
      flex: 0 1 50%;
    `
            : ""}
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const ImageHover = styled(MyImage)`
  transition: scale 0.4s ease-in-out;

  &:hover {
    scale: 102%;
  }
`;
