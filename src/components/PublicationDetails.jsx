import { Body, TextContainer, Subtitle, Title } from "../styles";
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
          <Date
            style={{
              display: publicationDetail.dateDisplay,
              marginBottom: "16px",
            }}
          >
            {publicationDetail.date}
          </Date>
          <Subtitle>{publicationDetail.synopsis}</Subtitle>
          <Title
            style={{
              display: publicationDetail.headingDisplay,
              marginBottom: "16px",
            }}
          >
            {publicationDetail.heading}
          </Title>
          <Subtitle
            style={{
              display: publicationDetail.creditsDisplay,
              marginBottom: "16px",
            }}
          >
            {publicationDetail.credits}
          </Subtitle>
          <Body
            style={{
              display: publicationDetail.paragraphDisplay,
            }}
          >
            {publicationDetail.paragraph}
          </Body>
        </TextContainer>
      ))}
    </div>
  );
};

export default PublicationDetails;

export const Date = styled(Body)`
  margin-bottom: 16px;
  color: #808080;
`;
