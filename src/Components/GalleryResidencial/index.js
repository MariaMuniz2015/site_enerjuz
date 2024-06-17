import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryResidencial() {
  const images = [
    {
      original: "residecial1.png",
      thumbnail: "residecial1mini.png",
    },
    {
      original: "residencial02.png",
      thumbnail: "residencial2mini.png",
    },
    {
      original: "residencial3.png",
      thumbnail: "residencial3mini.png",
    },
    {
      original: "residencial4.png",
      thumbnail: "residencial4mini.png",
    },
    {
      original: "residencial6.png",
      thumbnail: "residencial6mini.png",
    },
  ];
  return (
    <div className="App">
      <ImageGallery items={images} title="residencial" />;
    </div>
  );
}
