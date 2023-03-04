import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ImageSlide } from "../image/SlideShowImage";

const Slideshow = () => {
  return (
    <div className="slide-container">
      <div className="w-[50%] mx-auto h-full mt-auto">
        <Fade>
          {ImageSlide.fadeImages.map((fadeImage) => (
            <div key={fadeImage}>
              <img style={{ width: "100%" }} src={fadeImage.url} alt="index" />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Slideshow;
