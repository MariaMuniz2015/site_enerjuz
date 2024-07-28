import React from "react";

import images from "../data/images";

import CustomSlider from "../CustomCarousel";

import "./style.css";

export default function SliderAgro2() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
    </div>
  );
}
