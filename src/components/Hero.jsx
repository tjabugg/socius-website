import { useRef } from "react";
import { H2, H5, GridContainer } from "../styles";
import WebPattern from "../assets/videos/web_hero.json";
import TabletPattern from "../assets/videos/tablet_hero.json";
import MobilePattern from "../assets/videos/mobile_hero.json";
import Lottie from "lottie-react";
import styled from "styled-components";

const Hero = () => {
  const desktopRef = useRef();
  const tabletRef = useRef();
  const mobileRef = useRef();

  //   if (videoControls.current.paused) {
  //     videoControls.current.play();
  //     playButton.current.src = PauseIcon;
  //     desktopRef.current.play();
  //     tabletRef.current.play();
  //     mobileRef.current.play();
  //   } else {
  //     playButton.current.src = PlayIcon;
  //     videoControls.current.pause();
  //     desktopRef.current.pause();
  //     tabletRef.current.pause();
  //     mobileRef.current.pause();
  //   }
  // };

  return (
    <div>
      <Container>
        {/* <ImageContainer> */}
        <DesktopHero lottieRef={desktopRef} animationData={WebPattern} />
        <TabletHero lottieRef={tabletRef} animationData={TabletPattern} />
        <MobileHero lottieRef={mobileRef} animationData={MobilePattern} />
        {/* </ImageContainer> */}
      </Container>

      <CustomGridContainer>
        <H2>
          Experimental<br></br>Intelligence Lab
        </H2>
        <H5>
          We have a theory: Intelligence is too weird for one field understand.
          So we experiment at the intersections — between every field that ever
          studied “thinking” and every machine that's trying to “think”.
        </H5>
      </CustomGridContainer>
    </div>

    /* <PauseButton>
        <MyImage ref={playButton} src={PauseIcon} onClick={Play}></MyImage>
      </PauseButton> */
    // <HeroText>
    //   Empowering the pioneers of today’s social science research
    // </HeroText>
  );
};

export default Hero;

export const Container = styled.div`
  background-color: #193718;
  position: relative;
  height: 70vh; /* Adjust if needed */
  width: 100%;
  max-width: none;
  overflow: hidden; /* Ensures animation doesn’t spill out */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomGridContainer = styled(GridContainer)`
  gap: 180px;
  max-width: 1681px;
  margin: 40px auto 160px auto;

  @media (max-width: 1681px) {
    padding: 0px;
    margin: 24px 24px 160px 24px;
  }

  @media (max-width: 1024px) {
    margin: 20px;
    gap: 40px 24px;
  }

  @media (max-width: 414px) {
    gap: 24px;
  }
`;

export const DesktopHero = styled(Lottie)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletHero = styled(Lottie)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileHero = styled(Lottie)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;
