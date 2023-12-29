import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumbnail } from "./Thumbnail";
import styled from "styled-components";
import { CentreContainer, MyVideo } from "../styles";

const EmblaCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel();

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <>
      <CentreContainer>
        <Container>
          <Viewport ref={emblaMainRef}>
            <CarouselContainer>
              {images.map((image, index) => (
                <Slide key={index}>
                  <MyVideo
                    style={{ objectFit: "contain", borderRadius: "8px" }}
                    src={image.src}
                    alt="Your alt text"
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    muted={true}
                  />
                </Slide>
              ))}
            </CarouselContainer>
          </Viewport>

          <ThumbnailCarousel ref={emblaThumbsRef}>
            <ThumbnailContainer>
              {images.map((image, index) => (
                <Thumbnail
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  imgSrc={image.src}
                  key={index}
                />
              ))}
            </ThumbnailContainer>
          </ThumbnailCarousel>
        </Container>
      </CentreContainer>
    </>
  );
};

export default EmblaCarousel;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
`;

export const Viewport = styled.div`
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y;
  border-radius: 8px;
  gap: 20px;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
  margin-left: -1px;
`;

export const ThumbnailCarousel = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin: 20px 0px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 12px;
`;
