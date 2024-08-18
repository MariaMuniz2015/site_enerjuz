import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./comercioGaleryStyle.css";

export default function GalleryComercial() {
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
        <a href="comercio01.png">
          <img
            alt="@enerjuz - instalacão fotovoltaíca comercial 1 "
            src="comercio01mini.png"
            className="image"
          />
        </a>
        <a href="comercio002.png">
          <img
            alt="@enerjuz - instalacão fotovoltaíca comercial 2"
            src="comercio002mini.png"
            className="image"
          />
        </a>
        <a href="comercio003.png">
          <img
            alt="@enerjuz - instalacão fotovoltaíca comercial 3"
            src="comercio003mini.png"
            className="image"
          />
        </a>
        <a href="comercio04.png">
          <img
            alt="@enerjuz - instalacão fotovoltaíca comercial 4"
            src="comercio04mini.png"
            className="image"
          />
        </a>
      </LightGallery>
    </div>
  );
}
