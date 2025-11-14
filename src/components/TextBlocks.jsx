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
import Clipboard from "../assets/meta/clipboard.svg"; // your icon

import { useState } from "react";

// Destructure blogs and title directly from the props
const TextBlocks = ({ textBlocks }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

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
                <ShareWrapper>
                  <TertiaryButton
                    onClick={handleShare}
                    style={{ cursor: "pointer" }}
                  >
                    {textBlock.share}
                  </TertiaryButton>

                  {copied && (
                    <ClipboardPopup>
                      <ClipboardIcon src={Clipboard} alt="Copied" />
                    </ClipboardPopup>
                  )}
                </ShareWrapper>
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

const ShareWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const ClipboardPopup = styled.div`
  position: absolute;
  top: -36px;
  right: -8px;
  padding: 6px;
  background: #f1f0ec;
  border-radius: 8px;
  animation: fadePop 1.8s ease forwards;
  display: flex;
  align-items: center;

  @keyframes fadePop {
    0% {
      opacity: 0;
      transform: translateY(6px) scale(0.9);
    }
    15% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    85% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-6px) scale(0.9);
    }
  }
`;

const ClipboardIcon = styled.img`
  width: 18px;
  height: 18px;
  /* filter: invert(1); */
`;
