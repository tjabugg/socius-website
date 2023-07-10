import styled from "styled-components";
import {
  H3,
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
            <H3>{publicationCover.heading}</H3>
            <Paragraph>{publicationCover.paragraph}</Paragraph>
            <SecondaryButton
              href={publicationCover.link}
              style={{
                display: publicationCover.display,
              }}
            >
              Learn more
            </SecondaryButton>
          </TextContainer>

          <ImageContainer>
            <GraphicImage
              src={publicationCover.graphic}
              style={{
                padding: publicationCover.padding,
                backgroundColor: publicationCover.bgColour,
                backgroundImage: `url(${publicationCover.bgImage})`,
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
  margin: 40px 16px;
  justify-content: center;
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
`;

export const GraphicImage = styled(MyImage)`
  border-radius: 20px;
  box-sizing: border-box;
`;

export const TextContainer = styled(CentreText)`
  margin: 24px;

  @media (max-width: 768px) {
    margin: 0px;
  }
`;
