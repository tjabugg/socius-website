import styled from "styled-components";
import { Body, Title, ParentContainer, PrimaryButton } from "../styles";

// Destructure blogs and title directly from the props
const TextBlocks = ({ textBlocks }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {textBlocks.map((textBlock) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextContainer key={textBlock.id}>
          <Title>{textBlock.heading}</Title>
          <Paragraph
            style={{
              paddingBottom: "8px",
            }}
          >
            {textBlock.paragraph}
          </Paragraph>
          {textBlock.link ? (
            <PrimaryButton href={textBlock.link} target={textBlock.target}>
              {" "}
              {textBlock.button}
            </PrimaryButton>
          ) : null}
        </TextContainer>
      ))}
    </div>
  );
};

export default TextBlocks;

export const TextContainer = styled(ParentContainer)`
  gap: 16px;
  flex-direction: column;
  margin: 48px auto 48px auto;
  max-width: 1728px;

  @media (max-width: 1728px) {
    margin: 48px 24px 48px 24px;
  }
`;

export const Paragraph = styled(Body)`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
