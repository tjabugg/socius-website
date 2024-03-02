import React from "react";
import "./Thumbnail.css";

export const Thumbnail = (props) => {
  const { selected, imgSrc, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <video
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
        />
      </button>
    </div>
  );
};
