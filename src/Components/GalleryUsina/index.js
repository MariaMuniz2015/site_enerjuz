import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

export default function GalleryUsina() {
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
        <a href="usina04.png">
          <img alt="img1" src="usina4mini.png" class="col  p-4" />
        </a>
        <a href="usina03.png">
          <img alt="img2" src="usina3mini.png" class="col p-4" />
        </a>
        <a href="usina02.png">
          <img alt="img3" src="usina2mini.png" class="col p-4" />
        </a>
      </LightGallery>
    </div>
  );
}
