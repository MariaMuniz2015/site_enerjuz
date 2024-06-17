import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryComercial() {
  const images = [
    {
      original: "comercio1.png",
      thumbnail: "comercio1mini.png",
    },
    {
      original: "comercio2.png",
      thumbnail: "comercio2mini.png",
    },
    {
      original: "comercio3.png",
      thumbnail: "comercio3mini.png",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} title="residencial" />;
    </div>
  );
}
