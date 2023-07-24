import styled from "styled-components";
import { MyImage, ParentContainer, ImageContainer, MyVideo } from "../styles";
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
        <ParentContainer key={splitImage.id}>
          <GraphicContainer
            style={{
              aspectRatio: splitImage.aspectRatioOne,
            }}
          >
            <MyImage src={splitImage.imageOne}></MyImage>
          </GraphicContainer>

          <GraphicContainer
            style={{
              aspectRatio: splitImage.aspectRatioTwo,
            }}
          >
            <MyImage
              style={{
                display: splitImage.imageDisplay,
              }}
              src={splitImage.imageTwo}
            ></MyImage>
            <MyVideo
              id="splitVideoControls"
              style={{
                display: splitImage.display,
              }}
              src={splitImage.videoTwo}
              autoPlay={true}
              loop={true}
            ></MyVideo>

            {/* <VideoButton>
              <MyImage
                id="videoButton"
                src={PauseControls}
                onClick={PlayVideo}
              ></MyImage>
            </VideoButton> */}
          </GraphicContainer>
        </ParentContainer>
      ))}
    </div>
  );
};

// const PlayVideo = () => {
//   if (document.getElementById("splitVideoControls").paused) {
//     document.getElementById("splitVideoControls").play();
//     document.getElementById("videoButton").src = PauseControls;
//   } else {
//     document.getElementById("splitVideoControls").pause();
//     document.getElementById("videoButton").src = PlayControls;
//   }
// };

export default SplitImages;

export const GraphicContainer = styled(ImageContainer)`
  flex: 1;
  width: 100%;
  position: relative;
  display: inline-block;
`;
