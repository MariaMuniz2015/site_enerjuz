import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryUsina() {
  const images = [
    {
      original: "usina04.png",
      thumbnail: "usina4mini.png",
    },
    {
      original: "usina03.png",
      thumbnail: "usina3mini.png",
    },
    {
      original: "usina02.png",
      thumbnail: "usina2mini.png",
    },
    {
      original: "usina01.png",
      thumbnail: "usina1mini.png",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} title="usina" />;
    </div>
  );
}
