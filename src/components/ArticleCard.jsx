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
const ArticleCard = ({ articleCards, grid }) => {
  return (
    <CardContainer grid={grid}>
      {articleCards.map((articleCard) => (
        <a href={articleCard.link} target={articleCard.target}>
          <ArticleCardContainer
            style={{
              flexDirection: articleCard.flexDirection,
            }}
            key={articleCard.id}
          >
            <ImageContainer
              style={{
                backgroundColor: articleCard.bgColour,
                padding: articleCard.padding,
                aspectRatio: articleCard.aspectRatio,
              }}
            >
              {articleCard.image ? (
                <ImageHover
                  src={articleCard.image}
                  alt={articleCard.alt}
                ></ImageHover>
              ) : null}
            </ImageContainer>
            {/* </a> */}
            {/* <a href={articleCard.link} target={articleCard.target}> */}
            <TextContainer>
              {articleCard.captionOne ? (
                <TagContainer>
                  <Tag
                    style={{
                      backgroundColor: articleCard.tagOneBgColour,
                    }}
                  >
                    <Small
                      style={{
                        color: articleCard.tagOneColour,
                      }}
                    >
                      {articleCard.captionOne}
                    </Small>
                  </Tag>

                  <Tag
                    style={{
                      backgroundColor: articleCard.tagTwoBgColour,
                    }}
                  >
                    <Small
                      style={{
                        color: articleCard.tagTwoColour,
                      }}
                    >
                      {articleCard.captionTwo}
                    </Small>
                  </Tag>
                </TagContainer>
              ) : null}

              <H5>{articleCard.heading}</H5>
              <CardBody>{articleCard.paragraph}</CardBody>
            </TextContainer>
          </ArticleCardContainer>
        </a>
      ))}
    </CardContainer>
  );
};

export default ArticleCard;

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

export const ArticleCardContainer = styled.div`
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

export const CardBody = styled(Body)`
  /* Tighten title-to-description spacing without touching the container
     gap that also separates the tag row. */
  @media (min-width: 769px) {
    margin-top: -8px;
  }
`;
