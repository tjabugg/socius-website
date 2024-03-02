import { useRef, React } from "react";
import {
  MyVideo,
  MyImage,
  PauseButton,
  Heading,
  ImageContainer,
} from "../styles";
import HeroVideo from "../assets/videos/montage.mp4";
import WebPattern from "../assets/videos/web_hero.json";
import TabletPattern from "../assets/videos/tablet_hero.json";
import MobilePattern from "../assets/videos/mobile_hero.json";
import PauseIcon from "../assets/meta/pause_button.svg";
import PlayIcon from "../assets/meta/play_button.svg";
import Lottie from "lottie-react";
import styled from "styled-components";

const Hero = () => {
  const desktopRef = useRef();
  const tabletRef = useRef();
  const mobileRef = useRef();
  const videoControls = useRef();
  const playButton = useRef();

  const Play = () => {
    if (videoControls.current.paused) {
      videoControls.current.play();
      playButton.current.src = PauseIcon;
      desktopRef.current.play();
      tabletRef.current.play();
      mobileRef.current.play();
    } else {
      playButton.current.src = PlayIcon;
      videoControls.current.pause();
      desktopRef.current.pause();
      tabletRef.current.pause();
      mobileRef.current.pause();
    }
  };

  return (
    <Container>
      {/* <HeroContainer> */}
      <MyVideo
        ref={videoControls}
        style={{
          borderRadius: "0px",
        }}
        alt="A video montage of nature and society"
        src={HeroVideo}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted={true}
      ></MyVideo>
      {/* Add controls */}
      {/* </HeroContainer> */}

      <ImageContainer>
        <DesktopHero lottieRef={desktopRef} animationData={WebPattern} />
        <TabletHero lottieRef={tabletRef} animationData={TabletPattern} />
        <MobileHero lottieRef={mobileRef} animationData={MobilePattern} />
      </ImageContainer>

      <PauseButton>
        <MyImage ref={playButton} src={PauseIcon} onClick={Play}></MyImage>
      </PauseButton>
      <HeroText>
        Empowering the pioneers of today’s social science research
      </HeroText>
    </Container>
  );
};

export default Hero;

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 70vh;
  margin: 67px auto 0px auto;
  max-width: 1729px;

  @media (max-width: 1729px) {
    margin: 67px 0px 0px 0px;
    height: 80vh;
  }

  @media (max-width: 768px) {
    margin: 64px 0px 0px 0px;
    height: 80vh;
  }

  @media (max-width: 414px) {
    height: 70vh;
  }
`;

export const HeroText = styled(Heading)`
  position: absolute;
  box-sizing: border-box;
  top: 24px;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  padding: 24px;
  color: white;
  max-width: 1729px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DesktopHero = styled(Lottie)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletHero = styled(Lottie)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;

  @media (max-width: 768px) and (min-width: 376px) {
    display: block;
  }
`;

export const MobileHero = styled(Lottie)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;
