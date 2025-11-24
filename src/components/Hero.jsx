import { useRef, useState } from "react";
import { H2, H5, GridContainer } from "../styles";
import WebPattern from "../assets/videos/Web_Graphic_V3_1.mp4";
import TabletPattern from "../assets/videos/Tablet_Graphic_V3.mp4";
import MobilePattern from "../assets/videos/Mobile_Graphic_V3.mp4";
import styled from "styled-components";
import Pause from "../assets/meta/pause_button.svg";
import Play from "../assets/meta/play_button.svg";

import Lottie from "lottie-react";

const Hero = () => {
  const desktopRef = useRef(null);
  const tabletRef = useRef(null);
  const mobileRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const ref =
      window.innerWidth > 1024
        ? desktopRef
        : window.innerWidth > 414
        ? tabletRef
        : mobileRef;

    if (!ref.current) return;

    if (isPlaying) {
      ref.current.pause();
    } else {
      ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Container>
        {/* --------------------- DESKTOP --------------------- */}
        <DesktopWrapper
          isPlaying={isPlaying}
          onClick={(e) => {
            e.preventDefault();
            toggleVideo();
          }}
        >
          <DesktopVideo
            ref={desktopRef}
            src={WebPattern}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* LOTTIE VERSION (future use)
          <DesktopHero
            animationData={JsonPattern}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          /> */}
        </DesktopWrapper>

        {/* --------------------- TABLET --------------------- */}
        <TabletWrapper
          isPlaying={isPlaying}
          onClick={(e) => {
            e.preventDefault();
            toggleVideo();
          }}
        >
          <TabletVideo
            ref={tabletRef}
            src={TabletPattern}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* TabletHero Lottie */}
        </TabletWrapper>

        {/* --------------------- MOBILE --------------------- */}
        <MobileWrapper
          isPlaying={isPlaying}
          onClick={(e) => {
            e.preventDefault();
            toggleVideo();
          }}
        >
          <MobileVideo
            ref={mobileRef}
            src={MobilePattern}
            autoPlay
            muted
            loop
            playsInline
          />

          {/* MobileHero Lottie */}
        </MobileWrapper>
      </Container>

      {/* --------------------- TEXT --------------------- */}
      <CustomGridContainer>
        <H2>
          Experimental
          <br />
          Intelligence Lab
        </H2>
        <H5>
          We have a theory: Intelligence is too weird for one field to understand.
          So we experiment at the intersections — between every field that ever
          studied “thinking” and every machine that's trying to “think”.
        </H5>
      </CustomGridContainer>
    </div>
  );
};

export default Hero;

/* ========================================================= */
/* =======================  STYLES  ======================== */
/* ========================================================= */

export const Container = styled.div`
  background-color: #193718;
  position: relative;
  width: 100%;
  overflow: hidden;

  /* DESKTOP */
  padding-top: 115px;
  padding-bottom: 24px;

  /* TABLET */
  @media (max-width: 1024px) {
    padding-top: 115px;
    padding-bottom: 20px;
  }

  /* MOBILE */
  @media (max-width: 414px) {
    padding-top: 52px;
    padding-bottom: 20px;
  }
`;

/* Grid content below animation */
export const CustomGridContainer = styled(GridContainer)`
  gap: 180px;
  max-width: 1681px;
  margin: 40px auto 240px auto;

  @media (max-width: 1681px) {
    padding: 0 24px;
    margin: 24px auto 160px auto;
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
    margin: 20px auto;
    gap: 40px 24px;
  }

  @media (max-width: 414px) {
    gap: 24px;
    padding: 0 20px;
  }
`;

/* ========================================================= */
/* ==================== DESKTOP WRAPPER ==================== */
/* ========================================================= */

export const DesktopWrapper = styled.div`
  width: 100%;
  max-width: 1681px;
  margin: 0 auto;
  position: relative;

  cursor: ${({ isPlaying }) =>
    isPlaying
      ? "url('/assets/pause.svg') 12 12, pointer"
      : "url('/assets/play.svg') 12 12, pointer"};

  &:hover {
    cursor: ${({ isPlaying }) =>
      isPlaying
        ? `url(${Pause}) 12 12, pointer`
        : `url(${Play}) 12 12, pointer`};
  }

  /* DESKTOP UNDER 1681px → side margins */
  @media (max-width: 1681px) {
    margin: 0 24px;
  }

  /* HIDE ON TABLET + MOBILE */
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const DesktopVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const DesktopHero = styled(Lottie)`
  width: 100%;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 0 24px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

/* ========================================================= */
/* ===================== TABLET WRAPPER ==================== */
/* ========================================================= */

export const TabletWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) and (min-width: 415px) {
    display: block;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export const TabletVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TabletHero = styled(Lottie)`
  display: none;

  @media (max-width: 1024px) and (min-width: 415px) {
    display: block;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

/* ========================================================= */
/* ===================== MOBILE WRAPPER ==================== */
/* ========================================================= */

export const MobileWrapper = styled.div`
  display: none;

  @media (max-width: 414px) {
    display: block;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;

export const MobileVideo = styled.video`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const MobileHero = styled(Lottie)`
  display: none;

  @media (max-width: 414px) {
    display: block;
    width: calc(100% - 40px);
    margin: 0 20px;
  }
`;
