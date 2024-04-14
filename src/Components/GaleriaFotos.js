import React, { useState, useCallback } from "react";

/* import Gallery from "react-photo-gallery"; */
import { Carousel } from "react-responsive-carousel";
import { photos } from "./photos";

export function GaleriaFotos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  /* const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }; */

  return (
    <div>
      {viewerIsOpen ? (
        <Carousel
          showArrows={true}
          onClickItem={openLightbox}
          currentIndex={currentImage}
          views={photos.map((x) => ({
            ...x,
            srcset: x.srcSet,
            caption: x.title,
          }))}
        />
      ) : null}
    </div>
  );
}
