import { useState } from "react";
import { amenities } from "../data/listingData";
import AmenitiesModal from "./AmenitiesModal";
function AmenityIcon({ label }) {
  switch (label) {
    case "Kitchen":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M7 4v11M11 4v11M7 10h4M9 15v13" />
          <path d="M18 4v24" />
          <path d="M18 7c4 0 6 3 6 7v3h-6" />
        </svg>
      );

    case "Wifi":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 11c8-7 16-7 24 0" />
          <path d="M8 16c5-4 11-4 16 0" />
          <path d="M12 21c3-2 5-2 8 0" />
          <circle cx="16" cy="26" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );

    case "Dedicated workspace":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 19h24v9H4z" />
          <path d="M7 19v-5h18v5" />
          <path d="M10 14V9h6v5" />
          <path d="M20 14V8" />
          <path d="M19 8h3" />
          <path d="M4 28v2M28 28v2" />
        </svg>
      );

    case "Free parking":
    case "Free parking on premises":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M5 13l2-5h18l2 5v13H5z" />
          <path d="M5 14h22" />
          <circle cx="10" cy="23" r="1.5" />
          <circle cx="22" cy="23" r="1.5" />
          <path d="M10 13V9h10v4" />
        </svg>
      );

    case "Pool":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M4 14c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
          <path d="M4 19c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
          <path d="M4 24c3 0 3-3 6-3s3 3 6 3 3-3 6-3 3 3 6 3" />
        </svg>
      );

    case "Hot tub":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M5 17h22v10H5z" />
          <path d="M5 17h22" />
          <path d="M9 13c-2-2 2-3 0-6" />
          <path d="M16 13c-2-2 2-3 0-6" />
          <path d="M23 13c-2-2 2-3 0-6" />
        </svg>
      );

    case "Pets allowed":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="8" cy="12" r="3" />
          <circle cx="14" cy="7" r="3" />
          <circle cx="21" cy="7" r="3" />
          <circle cx="26" cy="12" r="3" />
          <path d="M16 25c-5 0-8-3-8-6 0-3 3-5 8-5s8 2 8 5c0 3-3 6-8 6z" />
        </svg>
      );

    case "Exterior security cameras":
    case "Exterior security cameras on property":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M5 10h18v12H5z" />
          <path d="M23 13l5-2v10l-5-2" />
          <circle cx="12" cy="16" r="3" />
          <path d="M9 25h6" />
        </svg>
      );

    case "Carbon monoxide alarm":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="10" />
          <path d="M9 9l14 14" />
          <path d="M12 13c1-2 3-3 5-3" />
          <circle cx="16" cy="21" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    case "Smoke alarm":
      return (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="10" />
          <path d="M9 9l14 14" />
          <path d="M13 13c2-2 5-2 7 0" />
          <path d="M13 19c2 2 5 2 7 0" />
        </svg>
      );

    default:
      return null;
  }
}

export default function Amenities() {
  const [showAll, setShowAll] = useState(false);

  // Take the first 10 items for the preview view
  const visibleAmenities = amenities.slice(0, 10);

  return (
    <>
      <section className="listing-section amenities-section" id="amenities">
        <h2 className="section-title" style={{ marginBottom: "24px", fontSize: "22px", fontWeight: 600 }}>
          What this place offers
        </h2>

        <div className="amenities-grid">
          {visibleAmenities.map((item) => {
            const iconSymbol = item[0];
            const labelText = item[1];

            // Check if the item is unavailable based on the text label
            const unavailable =
              labelText === "Carbon monoxide alarm" ||
              labelText === "Smoke alarm";

            return (
              <div className="amenity-item" key={labelText}>
                {/* 1. Icon container displaying the symbol symbol */}
                <span className={`amenity-icon ${unavailable ? "icon-unavailable" : ""}`}>
                  {iconSymbol}
                </span>

                {/* 2. Text label container with text string modification */}
                <span className={`amenity-label ${unavailable ? "amenity-unavailable" : ""}`}>
                  {labelText === "Free parking"
                    ? "Free parking on premises"
                    : labelText === "Exterior security cameras"
                    ? "Exterior security cameras on property"
                    : labelText}
                </span>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="outline-button"
          onClick={() => setShowAll(true)}
        >
          Show all 50 amenities
        </button>
      </section>

      <AmenitiesModal
        open={showAll}
        onClose={() => setShowAll(false)}
        amenities={amenities}
      />
    </>
  );
}