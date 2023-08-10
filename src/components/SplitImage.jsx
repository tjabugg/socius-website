import styled from "styled-components";
import { MyImage, ImageContainer, MyVideo, GridContainer } from "../styles";
// import PauseControls from "../assets/meta/pause_button.svg";
// import PlayControls from "../assets/meta/play_button.svg";

// Destructure blogs and title directly from the props
const SplitImages = ({ splitImages }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {splitImages.map((splitImage) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <GridContainer key={splitImage.id}>
          <GraphicContainer
            style={{
              aspectRatio: splitImage.aspectRatioOne,
            }}
          >
            <MyImage
              alt={splitImage.imageOneAlt}
              src={splitImage.imageOne}
            ></MyImage>
          </GraphicContainer>

          <GraphicContainer
            style={{
              aspectRatio: splitImage.aspectRatioTwo,
            }}
          >
            {splitImage.imageTwo ? (
              <MyImage
                alt={splitImage.imageTwoAlt}
                src={splitImage.imageTwo}
              ></MyImage>
            ) : null}

            {splitImage.videoTwo ? (
              <MyVideo
                alt={splitImage.videoAlt}
                src={splitImage.videoTwo}
                autoPlay={true}
                loop={true}
                playsInline={true}
              ></MyVideo>
            ) : null}
          </GraphicContainer>
        </GridContainer>
      ))}
    </div>
  );
};

export default SplitImages;

export const GraphicContainer = styled(ImageContainer)`
  flex: 1;
  width: 100%;
  position: relative;
  display: inline-block;
`;
