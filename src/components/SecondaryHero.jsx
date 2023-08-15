import styled from "styled-components";
import {
  MyImage,
  Heading,
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
          <TextContainer>
            <Heading>{secondaryHero.heading}</Heading>
          </TextContainer>
          <GraphicContainer>
            {secondaryHero.image ? (
              <MyImage
                alt={secondaryHero.imageAlt}
                src={secondaryHero.image}
              ></MyImage>
            ) : null}

            {secondaryHero.video ? (
              <MyVideo
                alt={secondaryHero.videoAlt}
                id="myVideoControls"
                src={secondaryHero.video}
                autoPlay={true}
                loop={true}
                playsInline={true}
                muted={true}
              ></MyVideo>
            ) : null}

            {secondaryHero.video ? (
              <PauseButton>
                <MyImage
                  id="playButton"
                  src={PauseIcon}
                  onClick={Play}
                ></MyImage>
              </PauseButton>
            ) : null}
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

export const TextContainer = styled(CentreText)`
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
