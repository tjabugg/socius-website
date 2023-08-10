import {
  Body,
  Caption,
  Subtitle,
  Title,
} from "../styles";
import styled from "styled-components";

// Destructure blogs and title directly from the props
const PublicationDetails = ({ publicationDetails }) => {
  return (
    <Container>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {publicationDetails.map((publicationDetail) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextContainer key={publicationDetail.id}>
          <BodyContainer>
            {publicationDetail.date ? (
              <Date
                style={{
                  marginBottom: "16px",
                }}
              >
                {publicationDetail.date}
              </Date>
            ) : null}

            {publicationDetail.synopsis ? (
              <Subtitle>{publicationDetail.synopsis}</Subtitle>
            ) : null}

            {publicationDetail.heading ? (
              <Title
                style={{
                  marginBottom: "16px",
                }}
              >
                {publicationDetail.heading}
              </Title>
            ) : null}

            {publicationDetail.credits ? (
              <Subtitle
                style={{
                  marginBottom: "16px",
                }}
              >
                {publicationDetail.credits}
              </Subtitle>
            ) : null}

            {publicationDetail.paragraph ? (
              <Body>{publicationDetail.paragraph}</Body>
            ) : null}

            {/* {publicationDetail.image ? (
              <ImageContainer
                style={{
                  aspectRatio: publicationDetail.aspectRatio,
                  width: publicationDetail.width,
                }}
              >
                <MyImage
                  alt={publicationDetail.imageAlt}
                  src={publicationDetail.image}
                ></MyImage>
              </ImageContainer>
            ) : null} */}
          </BodyContainer>

          <NotesContainer>
            {publicationDetail.caption ? (
              <Caption>{publicationDetail.caption}</Caption>
            ) : null}
          </NotesContainer>
        </TextContainer>
      ))}
    </Container>
  );
};

export default PublicationDetails;

export const Date = styled(Body)`
  margin-bottom: 16px;
  color: #808080;
`;

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
  /* border-style: solid; */
`;

export const TextContainer = styled.div`
  /* border-style: solid; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  margin-left: 10vw;

  @media (max-width: 768px) {
    gap: 0px;
    margin: 0px;
    flex-direction: column;
  }
`;

export const BodyContainer = styled.div`
  /* border-style: solid; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0.5;
  /* gap: 20px; */
  margin: 20px;
  /* border-color: blue; */

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const NotesContainer = styled.div`
  /* border-style: solid; */
  /* border-color: red; */
  flex: 0.1;
  text-align: end;
  margin: 20px;

  @media (max-width: 768px) {
    display: none;

  }
`;

// export const ImageContainer = styled.div`
//   flex: 1;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const LargeContainer = styled(MediumContainer)`
//   width: 80%;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const SmallContainer = styled(ImageContainer)`
//   aspect-ratio: 1/1;
//   width: 50%;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
