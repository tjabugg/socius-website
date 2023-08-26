import { Body, Caption, Subtitle, Title } from "../styles";
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
              <Date>{publicationDetail.date}</Date>
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

            {publicationDetail.paragraph ? (
              <Body>{publicationDetail.paragraph}</Body>
            ) : null}
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
  color: #808080;
`;

export const Container = styled.div`
  padding: 0px;
  margin: 0px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  margin-left: 14vw;

  @media (max-width: 768px) {
    gap: 0px;
    margin: 0px;
    flex-direction: column;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 0.5;
  gap: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const NotesContainer = styled.div`
  flex: 0.1;
  text-align: end;
  margin: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;
