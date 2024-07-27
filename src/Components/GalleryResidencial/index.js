import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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
        <a href="residecial1.png">
          <img
            alt="@enerjuz residencial 1"
            src="residecial1mini.png"
            class="col  p-4"
          />
        </a>
        <a href="residencial02.png">
          <img
            alt="@enerjuz residencial 2"
            src="residencial2mini.png"
            class="col p-4"
          />
        </a>
        <a href="residencial3.png">
          <img
            alt="@enerjuz residencial 3"
            src="residencial3mini.png"
            class="col p-4"
          />
        </a>
        <a href="residencial4.png">
          <img
            alt="@enerjuz residencial 4"
            src="residencial4mini.png"
            class="col p-4"
          />
        </a>
      </LightGallery>
    </div>
  );
}
