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

  // const lottieRef = useRef<LottieRefCurrentProps |

  return (
    <Container>
      <HeroContainer>
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
      </HeroContainer>

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

export const HeroContainer = styled.div`
  /* padding: 0px; */
  /* margin: 24px; */
  /* height: 90vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  top: -1px;
  display: inline-block; */
  /* height: 80vh; */
  /* width: 100%; */
  box-sizing: border-box;
  height: 80vh;
  /* width: 100%; */

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const Container = styled.div`
  /* padding: 0px; */
  /* height: 90vh; */
  margin: 84px 0px 0px 0px;
  display: inline-block;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin: 64px 0px 0px 0px;
    height: 80vh;
  }
`;

export const HeroText = styled(Heading)`
  width: 70%;
  position: absolute;
  top: 40px;
  left: 24px;
  color: white;

  @media (max-width: 768px) {
    left: 16px;
  }
`;

export const DesktopHero = styled(Lottie)`
  position: absolute;
  bottom: 0px;
  width: 100vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletHero = styled(Lottie)`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  display: none;

  @media (max-width: 768px) and (min-width: 376px) {
    display: block;
  }
`;

export const MobileHero = styled(Lottie)`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;
