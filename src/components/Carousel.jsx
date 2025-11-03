import { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import LeftArrow from "../assets/meta/Left_Arrow.svg";
import RightArrow from "../assets/meta/Right_Arrow.svg";

const CursorStyles = createGlobalStyle`
  .dot {
    width: 8px;
    height: 8px;
    background: #C8CED0;
    border-radius: 50%;
    margin: 0 4px;
    transition: 0.3s ease-in-out;

    @media (max-width: 1024px) {
  width: 6px;
    height: 6px;  }
  }

  .dot.active {
    background: #0F2133;
    opacity: 1;
    transform: scale(1.2);
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 1024px) {
    border-radius: 4px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 20px;

  @media (max-width: 1024px) {
    border-radius: 4px;
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  /* gap: 6px; */
`;

export default function ImageCarousel({ images }) {
  const wrapperRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursor] = useState("default");

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const bounds = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const midpoint = bounds.width / 2;
    setCursor(
      x < midpoint
        ? `url(${LeftArrow}) 16 16, pointer`
        : `url(${RightArrow}) 16 16, pointer`
    );
  };

  return (
    <>
      <CursorStyles />

      <CarouselWrapper
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursor("default")}
        onClick={(e) => {
          const bounds = wrapperRef.current.getBoundingClientRect();
          const x = e.clientX - bounds.left;
          const midpoint = bounds.width / 2;
          if (x < midpoint) swiperRef.current.slidePrev();
          else swiperRef.current.slideNext();
        }}
        style={{ cursor }}
      >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={0}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <SlideImage src={src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselWrapper>

      {/* Dots BELOW carousel */}
      <DotsWrapper>
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => swiperRef.current.slideTo(i)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </DotsWrapper>
    </>
  );
}
