import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

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
        <a href="Agro03.png">
          <img alt="@enerjuz agro 1" src="Agro3minie.png" class="col  p-4" />
        </a>
        <a href="Agro01.png">
          <img alt="@enerjuz agro 2" src="Agro1minie.png" class="col p-4" />
        </a>
        <a href="Agro04.png">
          <img alt="@enerjuz agro 3" src="Agro4minie.png" class="col p-4" />
        </a>
        <a href="Agro05.png">
          <img alt="@enerjuz agro 4" src="Agro5minie.png" class="col p-4" />
        </a>
      </LightGallery>
    </div>
  );
}
