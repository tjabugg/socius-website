import styled from "styled-components";
import { MyImage, ParentContainer, ImageContainer } from "../styles";

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
            <MyImage src={splitImage.imageTwo}></MyImage>
          </GraphicContainer>
        </ParentContainer>
      ))}
    </div>
  );
};

export default SplitImages;

export const GraphicContainer = styled(ImageContainer)`
  flex: 1;
  width: 100%;
`;
