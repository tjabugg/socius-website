import styled from "styled-components";
import Pause from "../assets/meta/pause_button.svg";
import Play from "../assets/meta/play_button.svg";

import {
  H5,
  Body,
  GridContainer,
  ImageContainer,
  MyImage,
  TextContainer,
  SecondaryButton,
} from "../styles";
import { useRef, useState } from "react";

// Destructure blogs and title directly from the props
const GraphicCard = ({ graphicCards, grid }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <CardContainer grid={grid}>
      {graphicCards.map((graphicCard) => (
        <a href={graphicCard.link} target={graphicCard.target}>
          <GraphicCardContainer
            style={{
              backgroundColor: graphicCard.bgColour,
              flexDirection: graphicCard.flexDirection,
            }}
            key={graphicCard.id}
          >
            <ImageContainer
              style={{
                aspectRatio: graphicCard.aspectRatio,
              }}
            >
              {graphicCard.image ? (
                <ImageHover
                  src={graphicCard.image}
                  alt={graphicCard.alt}
                ></ImageHover>
              ) : null}

              {graphicCard.video ? (
                <VideoWrapper
                  onClick={(e) => {
                    e.preventDefault();
                    toggleVideo();
                  }}
                  isPlaying={isPlaying}
                >
                  <MyVideo
                    ref={videoRef}
                    src={graphicCard.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </VideoWrapper>
              ) : null}
            </ImageContainer>
            <TextContainer>
              <H5
                style={{
                  color: graphicCard.textColour,
                }}
              >
                {graphicCard.heading}
              </H5>
              <Body
                style={{
                  color: graphicCard.textColour,
                }}
              >
                {graphicCard.paragraph}
              </Body>
              <SecondaryButton
                href={graphicCard.link}
                target={graphicCard.target}
              >
                Read more
              </SecondaryButton>
            </TextContainer>
          </GraphicCardContainer>
        </a>
      ))}
    </CardContainer>
  );
};

export default GraphicCard;

export const CardContainer = styled(GridContainer)`
  grid-template-columns: ${(props) => props.grid || "1fr"};
  padding: 0px;
  max-width: 1681px;
  grid-template-rows: auto;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 40px;
    margin-bottom: 16px;
  }
`;

export const GraphicCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  padding: 24px;

  @media (min-width: 1024px) {
    padding: 20px;
    ${ImageContainer} {
      ${(props) =>
        props.style?.flexDirection === "row"
          ? `
      flex: 0 1 50%;
    `
          : ""}
    }

    ${TextContainer} {
      ${(props) =>
        props.style?.flexDirection === "row"
          ? `
      flex: 1 1 50%;
    `
          : ""}
    }
    @media (max-width: 1024px) {
      ${ImageContainer} {
        ${(props) =>
          props.style?.flexDirection === "row"
            ? `
      flex: 0 1 50%;
    `
            : ""}
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const ImageHover = styled(MyImage)`
  transition: scale 0.4s ease-in-out;

  &:hover {
    scale: 102%;
  }
`;
export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: ${({ isPlaying }) =>
    isPlaying
      ? "url('/assets/pause.svg') 12 12, pointer"
      : "url('/assets/play.svg') 12 12, pointer"};

  /* Safari fallback */
  &:hover {
    cursor: ${({ isPlaying }) =>
      isPlaying
        ? `url(${Pause}) 12 12, pointer`
        : `url(${Play}) 12 12, pointer`};
  }
`;

export const VideoButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  @media (max-width: 1024px) {
    bottom: 20px;
    right: 20px;
  }
`;

export const MyVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: scale 0.4s ease-in-out;

  &:hover {
    scale: 102%;
  }
`;
