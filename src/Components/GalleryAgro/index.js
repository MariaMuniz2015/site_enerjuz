import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./galery-style.css";

export default function GalleryAgro() {
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
        <a href="agro002.png">
          <img
            alt="@enerjuz instalação fotovoltaíca agro 1"
            className="image"
            src="agro002mini.png"
          />
        </a>

        <a href="agro003.png">
          <img
            alt="@enerjuz - inversor energia fotovoltaíca"
            className="image"
            src="agro003mini.png"
          />
        </a>
        <a href="agro001.png">
          <img
            alt="@enerjuz instalação fotovoltaíca agro 2"
            className="image"
            src="agro001mini.png"
          />
        </a>
        <a href="agro007.png">
          <img
            alt="@enerjuz - inversor energia fotovoltaíca "
            className="image"
            src="agro007mini.png"
          />
        </a>
        <a href="agro006.png">
          <img
            alt="@enerjuz instalação fotovoltaíca agro 3"
            className="image"
            src="agro006mini.png"
          />
        </a>
      </LightGallery>
    </div>
  );
}
