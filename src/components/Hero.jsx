import React from "react";
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
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";

const Hero = () => {
  const Play = () => {
    if (document.getElementById("myVideoControls").paused) {
      document.getElementById("myVideoControls").play();
      document.getElementById("playButton").src = PauseIcon;
    } else {
      document.getElementById("myVideoControls").pause();
      document.getElementById("playButton").src = PlayIcon;
    }
  };

  return (
    <HeroContainer>
      <MyVideo
        id="myVideoControls"
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
      <ImageContainer>
        <DesktopHero autoplay loop src={WebPattern}></DesktopHero>
        <TabletHero autoplay loop src={TabletPattern}></TabletHero>
        <MobileHero autoplay loop src={MobilePattern}></MobileHero>
      </ImageContainer>
      <PauseButton>
        <MyImage id="playButton" src={PauseIcon} onClick={Play}></MyImage>
      </PauseButton>
      <HeroText>
        Empowering the pioneers of today’s social science research
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;

export const HeroContainer = styled.div`
  padding: 0px;
  margin: 0px;
  height: 90vh;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  top: -1px;
  display: inline-block;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

export const HeroText = styled(Heading)`
  width: 70%;
  position: absolute;
  top: 80px;
  left: 20px;
  color: white;
`;

export const DesktopHero = styled(Player)`
  position: absolute;
  bottom: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TabletHero = styled(DesktopHero)`
  display: none;

  @media (max-width: 768px) and (min-width: 415px) {
    display: block;
  }
`;

export const MobileHero = styled(DesktopHero)`
  display: none;

  @media (max-width: 414px) {
    display: block;
  }
`;
