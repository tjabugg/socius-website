import styled from "styled-components";
import {
  Body,
  Small,
  PaddedContainer,
  TagContainer,
  Tag,
  H4,
  H5,
  SecondaryButton,
  PrimaryButton,
  TertiaryButton,
  ButtonContainer,
  ImageContainer,
  MyImage,
} from "../styles";

// Destructure blogs and title directly from the props
const TextBlocks = ({ textBlocks }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {textBlocks.map((textBlock) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <CustomContainer key={textBlock.id}>
          {(textBlock.captionOne || textBlock.captionTwo) && (
            <TagContainer
              style={{
                gap: "24px",
                justifyContent: textBlock.justify,
              }}
            >
              {textBlock.captionOne && (
                <Tag
                  style={{
                    backgroundColor: textBlock.tagOneBgColour,
                  }}
                >
                  <Small
                    style={{
                      color: textBlock.tagOneColour,
                    }}
                  >
                    {textBlock.captionOne}
                  </Small>
                </Tag>
              )}
              {textBlock.captionTwo && (
                <Tag
                  style={{
                    backgroundColor: textBlock.tagTwoBgColour,
                  }}
                >
                  <Small
                    style={{
                      color: textBlock.tagTwoColour,
                    }}
                  >
                    {textBlock.captionTwo}
                  </Small>
                </Tag>
              )}
            </TagContainer>
          )}

          {textBlock.github && (
            <Share>
              <a href={textBlock.gitLink} target="blank">
                <IconContainer>
                  <MyImage src={textBlock.github} alt="GitHub Icon" />
                </IconContainer>
              </a>
            </Share>
          )}

          {(textBlock.paper || textBlock.share) && (
            <Share>
              {textBlock.share && (
                <TertiaryButton
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(window.location.href);
                    // Optional: show a "Copied!" message
                    // alert("Link copied to clipboard!");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {textBlock.share}
                </TertiaryButton>
              )}
              {textBlock.paper && (
                <TertiaryButton href={textBlock.paperLink} target="blank">
                  {textBlock.paper}
                </TertiaryButton>
              )}
            </Share>
          )}
          {textBlock.heading && (
            <TagContainer
              style={{
                justifyContent: textBlock.justify,
              }}
            >
              {textBlock.heading && (
                <CustomHead
                  style={{
                    color: textBlock.textColour,
                  }}
                >
                  {textBlock.heading}
                </CustomHead>
              )}
            </TagContainer>
          )}

          {(textBlock.subheading || textBlock.subheadingButton) && (
            <TagContainer
              style={{
                justifyContent: textBlock.justify,
              }}
            >
              {textBlock.subheading && (
                <CustomSub
                  style={{
                    color: textBlock.textColour,
                  }}
                >
                  {textBlock.subheading}
                </CustomSub>
              )}
              {textBlock.subheadingButton && (
                <TertiaryButton href={textBlock.link}>
                  {textBlock.subheadingButton}
                </TertiaryButton>
              )}
            </TagContainer>
          )}

          {(textBlock.paragraph ||
            textBlock.altParagraph ||
            textBlock.paragraphButton) && (
            <ButtonContainer
              style={{
                justifyContent: textBlock.justify,
              }}
            >
              {textBlock.paragraph && (
                <Paragraph
                  style={{
                    color: textBlock.textColour,
                  }}
                >
                  {textBlock.paragraph}
                </Paragraph>
              )}
              {textBlock.altParagraph && (
                <AltParagraph
                  style={{
                    color: textBlock.textColour,
                  }}
                >
                  {textBlock.altParagraph}
                </AltParagraph>
              )}
              {textBlock.paragraphButton && (
                <TertiaryButton href={textBlock.link} target={textBlock.target}>
                  {textBlock.paragraphButton}
                </TertiaryButton>
              )}
            </ButtonContainer>
          )}

          {(textBlock.primaryButton ||
            textBlock.secondaryButton ||
            textBlock.tertiaryButton) && (
            <TagContainer
              style={{
                gap: "24px",
                justifyContent: textBlock.justify,
              }}
            >
              {textBlock.primaryButton && (
                <PrimaryButton
                  href={textBlock.primaryLink}
                  target={textBlock.primaryTarget}
                >
                  {textBlock.primaryButton}
                </PrimaryButton>
              )}
              {textBlock.secondaryButton && (
                <SecondaryButton href={textBlock.secondaryLink}>
                  {textBlock.secondaryButton}
                </SecondaryButton>
              )}
              {textBlock.tertiaryButton && (
                <TertiaryButton
                  style={{
                    color: textBlock.textColour,
                  }}
                  href={textBlock.tertiaryLink}
                  target={textBlock.tertiaryTarget}
                >
                  {textBlock.tertiaryButton}
                </TertiaryButton>
              )}
            </TagContainer>
          )}
        </CustomContainer>
      ))}
    </div>
  );
};

export default TextBlocks;

export const Paragraph = styled(Body)`
  width: 40%;

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AltParagraph = styled(Body)`
  /* width: 80%; */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CustomSub = styled(H5)`
  width: 40%;

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CustomHead = styled(H4)`
  width: 40%;

  @media (max-width: 1280px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Share = styled(TagContainer)`
  gap: 40px;
  width: 40%;
  margin-left: auto;
  // Aligns it to the right

  @media (max-width: 1280px) {
    /* margin-left: 24px; */
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CustomContainer = styled(PaddedContainer)`
  /* justify-content: flex-end; */
  gap: 24px;

  @media (max-width: 1729px) {
    margin: 0px;
  }

  @media (max-width: 414px) {
    gap: 20px;
  }
`;

export const IconContainer = styled(ImageContainer)`
  width: 24px;
  transition: opacity 0.2s ease-in-out;

  @media (max-width: 1729px) {
    margin: 0px;
  }

  @media (max-width: 414px) {
    gap: 20px;
  }

  &:hover {
    opacity: 33%;
  }
`;
