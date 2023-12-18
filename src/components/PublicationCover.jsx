import styled from "styled-components";
import {
  Title,
  GridContainer,
  MyImage,
  Body,
  CentreText,
  SecondaryButton,
} from "../styles";

// Destructure blogs and title directly from the props
const PublicationCovers = ({ publicationCovers }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {publicationCovers.map((publicationCover) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <Container key={publicationCover.id}>
          <TextContainer>
            <Date>{publicationCover.date}</Date>
            <Title>{publicationCover.heading}</Title>
            <Body
              style={{
                margin: "8px",
              }}
            >
              {publicationCover.paragraph}
            </Body>

            {publicationCover.link ? (
              <SecondaryButton
                href={publicationCover.link}
                style={{
                  display: publicationCover.display,
                }}
              >
                Learn more
              </SecondaryButton>
            ) : null}
          </TextContainer>

          <ImageContainer>
            <GraphicImage
              alt={publicationCover.alt}
              src={publicationCover.graphic}
              style={{
                backgroundColor: publicationCover.bgColour,
                backgroundImage: `url(${publicationCover.bgImage})`,
                backgroundSize: "100%",
              }}
            ></GraphicImage>
          </ImageContainer>
        </Container>
      ))}
    </div>
  );
};

export default PublicationCovers;

export const Container = styled(GridContainer)`
  align-items: center;
  justify-content: center;
  margin: 40px auto;

  @media (max-width: 1728px) {
    margin: 40px 24px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    gap: 24px;
  }
`;

export const Date = styled(Body)`
  color: #808080;
`;

export const ImageContainer = styled.div`
  aspect-ratio: 1/1;
  box-sizing: border-box;
  border-radius: 20px;
  background-size: contain;

  @media (max-width: 768px) {
    order: -1;
  }
`;

export const GraphicImage = styled(MyImage)`
  border-radius: 20px;
  box-sizing: border-box;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 20px;
  }
`;

export const TextContainer = styled(CentreText)`
  margin: 24px;
  gap: 8px;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;
