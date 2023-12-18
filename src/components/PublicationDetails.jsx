import { Body, Subtitle } from "../styles";
import styled from "styled-components";

// Destructure blogs and title directly from the props
const PublicationDetails = ({ publicationDetails }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {publicationDetails.map((publicationDetail) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextContainer key={publicationDetail.id}>
          <BodyContainer>
            {publicationDetail.link ? (
              <Date>{publicationDetail.link}</Date>
            ) : null}

            {publicationDetail.date ? (
              <Date>{publicationDetail.date}</Date>
            ) : null}

            {publicationDetail.synopsis ? (
              <Subtitle>{publicationDetail.synopsis}</Subtitle>
            ) : null}

            {publicationDetail.heading ? (
              <Subtitle
                style={{
                  marginBottom: "8px",
                }}
              >
                {publicationDetail.heading}
              </Subtitle>
            ) : null}

            {publicationDetail.paragraph ? (
              <Body>{publicationDetail.paragraph}</Body>
            ) : null}

            {publicationDetail.code ? (
              <CodeContainer>
                <Code>{publicationDetail.code}</Code>
              </CodeContainer>
            ) : null}
          </BodyContainer>

          {/* <NotesContainer>
            {publicationDetail.caption ? (
              <Caption>{publicationDetail.caption}</Caption>
            ) : null}
          </NotesContainer> */}
        </TextContainer>
      ))}
    </div>
  );
};

export default PublicationDetails;

export const Date = styled(Body)`
  color: #808080;
  font-size: 16px;
`;

export const Code = styled(Body)`
  font-family: "Source Code Pro", monospace;
  font-size: 14px;

`;

export const CodeContainer = styled.div`
  padding: 20px;
  background-color: rgba(28, 28, 30, 0.04);
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 80px;
  /* margin-left: 14vw; */

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
  flex: 0.35;
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
