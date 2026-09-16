import { useState } from "react";

import LivingRoom from "../assets/images/Living-room-2.jpeg";
import BathRoom from "../assets/images/Bath-room.jpeg";
import Bedroom from "../assets/images/Bedroom.jpeg";
import Exterior from "../assets/images/Exterior.jpeg";
import Kitchen from "../assets/images/Kitchen.jpeg";

import PhotoTour from "./PhotoTour";



const galleryImages = [
  LivingRoom,
  BathRoom,
  Bedroom,
  Exterior,
  Kitchen,
];

export default function PhotoGallery() {
  const [open, setOpen] = useState(false);

  const openPhotoTour = () => {
    window.history.pushState(
      {},
      "",
      "?modal=PHOTO_TOUR_SCROLLABLE"
    );

    setOpen(true);
  };

  const closePhotoTour = () => {
    window.history.pushState(
      {},
      "",
      window.location.pathname
    );

    setOpen(false);
  };

  return (
    <>
      <section
        className="photo-gallery"
        id="photos"
        aria-label="Photos of this place"
      >

        <div className="gallery-grid">

          {galleryImages.map((image, index) => (
            <button
              className="gallery-image-button"
              key={index}
              type="button"
              aria-label={`View photo ${index + 1}`}
              onClick={openPhotoTour}
            >
              <img
                src={image}
                alt={`Property ${index + 1}`}
              />
            </button>
          ))}

        </div>


        <button
          className="show-all-photos"
          type="button"
          onClick={openPhotoTour}
        >
          ▧ Show all photos
        </button>

      </section>


      <PhotoTour
        open={open}
        onClose={closePhotoTour}
        images={galleryImages}
      />
    </>
  );
}