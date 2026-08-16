import styled from "styled-components";
import {
  MyImage,
  H2,
  ImageContainer,
  Small,
  PaddedContainer,
  TagContainer,
} from "../styles";

// Destructure blogs and title directly from the props
const PublicationHero = ({ publicationHeroes }) => {
  return (
    <div>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      {/* Fires callback function for each item, whereby we return a jsx template */}
      {publicationHeroes.map((publicationHero) => (
        // When we .map(), each root element we return must have a 'key' property which react uses to keep track of items in the dom
        <TextAndImage key={publicationHero.id}>
          <HeroContainer>
            <TagContainer
              style={{
                gap: "24px",
              }}
            >
              <Small>{publicationHero.tagOne}</Small>
              <Small>{publicationHero.tagTwo}</Small>
            </TagContainer>

            <H2>{publicationHero.heading}</H2>
          </HeroContainer>

          <ImageContainer>
            {publicationHero.video ? (
              <HeroVideo
                src={publicationHero.video}
                poster={publicationHero.image}
                aria-label={publicationHero.imageAlt}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <MyImage
                alt={publicationHero.imageAlt}
                src={publicationHero.image}
              ></MyImage>
            )}
          </ImageContainer>
        </TextAndImage>
      ))}
    </div>
  );
};

export default PublicationHero;

export const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  /* White backing so Chromium's edge-pixel blend stays invisible against
     the page (see the pattern videos in Hero.jsx). */
  background-color: #ffffff;
`;

export const TextAndImage = styled.div`
  margin: 120px auto 60px auto;
  position: relative;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 120px 24px 60px 24px;
  }

  @media (max-width: 414px) {
    margin: 100px 20px 20px 20px;
  }
`;

export const GraphicContainer = styled(ImageContainer)`
  height: 70vh;

  @media (max-width: 414px) {
    height: 50vh;
  }
`;

export const HeroContainer = styled(PaddedContainer)`
  padding-bottom: 24px;
  gap: 20px;
  max-width: 1681px;

  @media (max-width: 1681px) {
    margin: 0px;
  }

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
