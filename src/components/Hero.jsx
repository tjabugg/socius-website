import React from "react";
import { MyVideo, MyImage, PauseButton, H1 } from "../styles";
import HeroVideo from "../assets/videos/video_montage.mp4";
import PauseIcon from "../assets/meta/pause_button.svg";
import PlayIcon from "../assets/meta/play_button.svg";

import styled from "styled-components";

const Hero = () => (
  <HeroContainer>
    <MyVideo
      id="myVideoControls"
      style={{
        borderRadius: "0px",
      }}
      alt={`A portrait of Tony Bugg`}
      src={HeroVideo}
      autoplay
      loop
      playsinline
    ></MyVideo>
    <PauseButton>
      <MyImage
        id="playButton"
        src={PauseIcon}
        onClick={Play}
        alt="A video montage of nature and society"
      ></MyImage>
    </PauseButton>

    <Heading>
      Empowering the pioneers of today’s social science research
    </Heading>
  </HeroContainer>
);

const Play = () => {
  if (document.getElementById("myVideoControls").paused) {
    document.getElementById("myVideoControls").play();
    document.getElementById("playButton").src = PauseIcon;
  } else {
    document.getElementById("myVideoControls").pause();
    document.getElementById("playButton").src = PlayIcon;
  }
};

export default Hero;

export const HeroContainer = styled.div`
  height: 90vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
`;

export const Heading = styled(H1)`
  width: 80%;
  position: absolute;
  top: 80px;
  left: 16px;
  color: white;
`;

export const DesktopPattern = styled(MyImage)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletPattern = styled(MyImage)`
  display: none;

  @media (max-width: 768px) and (min-width: 376px) {
    display: block;
  }
`;

export const MobilePattern = styled(MyImage)`
  display: none;

  @media (max-width: 375px) {
    display: block;
  }
`;
