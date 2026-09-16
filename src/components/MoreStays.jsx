import React, { useRef, useState } from "react";


import s1 from "../assets/images/similar/s1.jpeg";
import s2 from "../assets/images/similar/s2.jpeg";
import s3 from "../assets/images/similar/s3.jpeg";
import s4 from "../assets/images/similar/s4.jpeg";
import s5 from "../assets/images/similar/s5.jpeg";
import s6 from "../assets/images/similar/s6.jpeg";

const stays = [
  {
    image: s1,
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: "4.91",
  },
  {
    image: s2,
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: "4.95",
  },
  {
    image: s3,
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: "4.94",
  },
  {
    image: s4,
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: "4.96",
  },
  {
    image: s5,
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: "4.95",
  },
  {
    image: s6,
    title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool",
    price: "₹45,648",
    rating: "5.0",
  },
  {
    image: s2,
    title: "Luxury Apt | Private Pool | 6 Mins from Beach",
    price: "₹48,786",
    rating: "4.93",
  },
  {
    image: s4,
    title: "Serendipity Cottage - Calm Stay in Calangute-Baga.",
    price: "₹22,824",
    rating: "4.92",
  },
];

function LeftArrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="m13.7 16.29a1 1 0 1 1-1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1-1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
      />
    </svg>
  );
}

export default function MoreStays() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(1);

  const scrollNext = () => {
    trackRef.current?.scrollBy({
      left: 880,
      behavior: "smooth",
    });

    setPage(2);
  };

  const scrollPrev = () => {
    trackRef.current?.scrollBy({
      left: -880,
      behavior: "smooth",
    });

    setPage(1);
  };

  return (
    <section className="more-stays-section">

      <div className="more-stays-header">

        <h2 className="more-stays-title">
          More stays nearby
        </h2>

        <div className="more-stays-controls">

          <span className="more-stays-page">
            {page} / 2
          </span>

          <button
            className="more-stays-arrow"
            type="button"
            aria-label="Previous"
            disabled={page === 1}
            onClick={scrollPrev}
          >
            <LeftArrow />
          </button>

          <button
            className="more-stays-arrow"
            type="button"
            aria-label="Next"
            disabled={page === 2}
            onClick={scrollNext}
          >
            <RightArrow />
          </button>

        </div>

      </div>


      <div
        className="more-stays-track"
        id="simTrack"
        ref={trackRef}
      >
        {stays.map((stay, index) => (
          <div
            className="stay-card"
            key={`${stay.title}-${index}`}
          >

            <img
              src={stay.image}
              alt=""
              loading="lazy"
              className="stay-image"
            />

            <div className="stay-title">
              {stay.title}
            </div>

            <div className="stay-price">
              {stay.price}

              <span className="stay-star">
                <StarIcon />
              </span>

              {stay.rating}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}