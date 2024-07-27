import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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
        <a href="comercio1.png">
          <img
            alt="@enerjuz comercio1"
            src="comercio1mini.png"
            class="col  p-4"
          />
        </a>
        <a href="comercio2.png">
          <img
            alt="@enerjuz comercio2"
            src="comercio2mini.png"
            class="col p-4"
          />
        </a>
        <a href="comercio3.png">
          <img
            alt="@enerjuz comercio3"
            src="comercio3mini.png"
            class="col p-4"
          />
        </a>
      </LightGallery>
    </div>
  );
}
