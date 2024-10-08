import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./residencialGaleryStyle.css";

export default function GalleryResidencial() {
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  return (
    <div class="row justify-content-center">
      <LightGallery
        elementClassNames="custom-wrapper-class"
        onBeforeSlide={onBeforeSlide}
      >
        <a href="residencial004.png">
          <img
            alt="@enerjuz - instalação energia fotovoltaíca residencial 1"
            src="residencial004mini.png"
            className="image"
          />
        </a>
        <a href="residencial003.png">
          <img
            alt="@enerjuz - inversor energia fotovoltaica residencial"
            src="residencial003mini.png"
            className="image"
          />
        </a>
        <a href="residencial001.png">
          <img
            alt="@enerjuz instalação energia fotovoltaíca residencial 2"
            src="residencial001mini.png"
            className="image"
          />
        </a>
        <a href="residencial002.png">
          <img
            alt="@enerjuz - inversor energia fotovoltaica residencial"
            src="residencial002mini.png"
            className="image"
          />
        </a>
      </LightGallery>
    </div>
  );
}
