import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "./usinaGaleryStyle.css";

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
        <a href="usina05.png">
          <img
            alt="@enerjuz usina de investimento 5"
            src="usina05mini.png"
            className="image"
          />
        </a>
        <a href="usina04.png">
          <img
            alt="@enerjuz usina de investimento 4"
            src="usina04mini.png"
            className="image"
          />
        </a>
        <a href="usina03.png">
          <img
            alt="@enerjuz usina de investimento 3"
            src="usina03mini.png"
            className="image"
          />
        </a>
        <a href="usina02.png">
          <img
            alt="@enerjuz usina de investimento 2"
            src="usina02mini.png"
            className="image"
          />
        </a>

        <a href="usina01.png">
          <img
            alt="@enerjuz usina de investimento 1"
            src="usina01mini.png"
            className="image"
          />
        </a>
      </LightGallery>
    </div>
  );
}
