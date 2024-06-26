import styled from "styled-components";
import {
  Body,
  Caption,
  ParentContainer,
  Subheading,
  TertiaryButton,
} from "../styles";

// Destructure blogs and title directly from the props
const TextBlocks = ({ textBlocks }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {textBlocks.map((textBlock) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextContainer key={textBlock.id}>
          {textBlock.caption ? <Caption>{textBlock.caption}</Caption> : null}

          <Heading>{textBlock.heading}</Heading>

          <Paragraph>{textBlock.paragraph}</Paragraph>
          {textBlock.link ? (
            <TertiaryButton
              style={{
                marginTop: "8px",
              }}
              href={textBlock.link}
              target={textBlock.target}
            >
              {" "}
              {textBlock.button}
            </TertiaryButton>
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
  margin: 56px auto 56px auto;
  max-width: 1728px;

  @media (max-width: 1728px) {
    margin: 56px 24px 56px 24px;
  }

  @media (max-width: 768px) {
    margin: 40px 20px 40px 20px;
  }
`;

export const Paragraph = styled(Body)`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Heading = styled(Subheading)`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
