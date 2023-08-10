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
            <Paragraph>{publicationCover.paragraph}</Paragraph>

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
                padding: publicationCover.padding,
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
  margin: 40px 20px;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px 20px;
    gap: 16px;
  }
`;

export const Date = styled(Body)`
  color: #808080;
`;

export const Paragraph = styled(Body)`
  margin: 0px 0px 8px 0px;
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
`;

export const TextContainer = styled(CentreText)`
  margin: 24px;

  @media (max-width: 768px) {
    margin: 8px;
  }
`;
