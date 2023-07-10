import styled from "styled-components";
import {
  MyImage,
  H1,
  CentreContainer,
  CentreText,
  ImageContainer,
} from "../styles";

// Destructure blogs and title directly from the props
const SecondaryHero = ({ secondaryHeroes }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {secondaryHeroes.map((secondaryHero) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <CentreContainer>
          <TextAndImage key={secondaryHero.id}>
            <Heading>
              <H1>{secondaryHero.heading}</H1>
            </Heading>
            <GraphicContainer>
              <MyImage src={secondaryHero.image}></MyImage>
            </GraphicContainer>
          </TextAndImage>
        </CentreContainer>
      ))}
    </div>
  );
};

export default SecondaryHero;

export const Heading = styled(CentreText)`
  margin: 0vw 10vw;

  @media (max-width: 768px) {
    margin: 0vw 0vw;
  }
`;

export const TextAndImage = styled(CentreContainer)`
  gap: 16px;
  margin: 64px 16px 0px 16px;
  padding: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  height: 80vh;
  width: 100%;

  @media (max-width: 375px) {
    height: 50vh;
  }
`;
