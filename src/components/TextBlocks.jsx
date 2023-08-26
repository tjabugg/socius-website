import styled from "styled-components";
import { Body, Title, GridContainer, PrimaryButton } from "../styles";

// Destructure blogs and title directly from the props
const TextBlocks = ({ textBlocks }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {textBlocks.map((textBlock) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <Container
          key={textBlock.id}
          style={{
            paddingBottom: textBlock.paddingBottom,
          }}
        >
          <Title>{textBlock.heading}</Title>
          <Body>{textBlock.paragraph}</Body>
          {textBlock.link ? (
            <Button href={textBlock.link} target={textBlock.target}>
              {" "}
              {textBlock.button}
            </Button>
          ) : null}
        </Container>
      ))}
    </div>
  );
};

export default TextBlocks;

export const Container = styled(GridContainer)`
  display: grid;
  padding-bottom: 48px;

  @media (max-width: 768px) {
    padding-bottom: 24px;
  }
`;

export const Button = styled(PrimaryButton)`
  grid-column-start: 2;

  @media (max-width: 768px) {
    grid-column-start: 1;
  }
`;
