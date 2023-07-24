import styled from "styled-components";
import {
  MyImage,
  H1,
  CentreContainer,
  CentreText,
  ImageContainer,
  MyVideo,
  PauseButton,
} from "../styles";
import PauseIcon from "../assets/meta/pause_button.svg";
import PlayIcon from "../assets/meta/play_button.svg";

// Destructure blogs and title directly from the props
const SecondaryHero = ({ secondaryHeroes }) => {
  return (
    <CentreContainer>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {secondaryHeroes.map((secondaryHero) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextAndImage key={secondaryHero.id}>
          <Heading>
            <H1>{secondaryHero.heading}</H1>
          </Heading>
          <GraphicContainer>
            <MyImage
              alt={secondaryHero.imageAlt}
              style={{
                display: secondaryHero.imageDisplay,
              }}
              src={secondaryHero.image}
            ></MyImage>

            <MyVideo
              alt={secondaryHero.videoAlt}
              id="myVideoControls"
              style={{
                display: secondaryHero.display,
              }}
              src={secondaryHero.video}
              autoplay
              loop
              playsinline
            ></MyVideo>
            {/* should create a conditional statement for the display of the button */}
            <PauseButton>
              <MyImage
                style={{
                  display: secondaryHero.buttonDisplay,
                }}
                id="playButton"
                src={PauseIcon}
                onClick={Play}
              ></MyImage>
            </PauseButton>
          </GraphicContainer>
        </TextAndImage>
      ))}
    </CentreContainer>
  );
};

const Play = () => {
  if (document.getElementById("myVideoControls").paused) {
    document.getElementById("myVideoControls").play();
    document.getElementById("playButton").src = PauseIcon;
  } else {
    document.getElementById("myVideoControls").pause();
    document.getElementById("playButton").src = PlayIcon;
  }
};

export default SecondaryHero;

export const Heading = styled(CentreText)`
  margin: 0px 10vw 16px 10vw;

  @media (max-width: 768px) {
    margin: 0vw 0vw 16px 0vw;
  }
`;

export const TextAndImage = styled(CentreContainer)`
  margin: 64px 20px 0px 20px;
  padding: 0px;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 80px 20px 0px 20px;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  height: 80vh;
  width: 100%;

  @media (max-width: 414px) {
    height: 50vh;
  }
`;
