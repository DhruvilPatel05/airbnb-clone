import { useEffect, useState } from "react";

export default function StickyHeader({ visible }) {
  const [showToast, setShowToast] = useState(false);

  const handleReserve = () => {
    setShowToast(true);
  };

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => {
      setShowToast(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showToast]);

  return (
    <>
      <div
        className={`sticky-header ${
          visible ? "sticky-header-visible" : ""
        }`}
      >
        <div className="sticky-header-inner">

          <nav
            className="listing-navigation"
            aria-label="Listing sections"
          >
            <a className="active" href="#photos">
              Photos
            </a>

            <a href="#amenities">
              Amenities
            </a>

            <a href="#reviews">
              Reviews
            </a>

            <a href="#location">
              Location
            </a>
          </nav>


          <div className="sticky-booking-summary">

            <div className="sticky-price">
              <div>
                <strong>₹28,499</strong> for 5 nights
              </div>

              <div>
                ★ 4.95 · <span>19 reviews</span>
              </div>
            </div>


            {/* RESERVE */}
            <button
              className="reserve-button reserve-button-small"
              onClick={handleReserve}
            >
              Reserve
            </button>

          </div>

        </div>
      </div>


      {/* TOAST */}
      {showToast && (
        <div className="action-toast">
          You won't be charged yet
        </div>
      )}
    </>
  );
}