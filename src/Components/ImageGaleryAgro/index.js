import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryAgro() {
  const images = [
    {
      original: "Agro02.png",
      thumbnail: "Agro2mini.png",
    },
    {
      original: "Agro03.png",
      thumbnail: "Agro3mini.png",
    },
    {
      original: "Agro01.png",
      thumbnail: "Agro1mini.png",
    },
    {
      original: "Agro04.png",
      thumbnail: "Agro4mini.png",
    },
    {
      original: "Agro005.png",
      thumbnail: "Agro5mini.png",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} title="Agro" />;
    </div>
  );
}
