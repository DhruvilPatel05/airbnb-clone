import { useEffect, useState } from "react";
import discountIcon from "../assets/images/discount.svg";

export default function BookingCard() {
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
    <aside className="booking-sidebar">

      {/* ================= DISCOUNT CARD ================= */}
      <div className="discount-card">

        <img
          src={discountIcon}
          alt="Discount"
          className="discount-icon"
        />

        <div className="discount-content">
          <div>Get 10% off your next stay.</div>

          <a href="#">
            Terms apply
          </a>
        </div>

        <button className="discount-claim">
          Claim
        </button>

      </div>


      {/* ================= BOOKING CARD ================= */}
      <div className="booking-card">

        <div className="booking-price">
          <strong>₹28,499</strong>
          <span>for 5 nights</span>
        </div>


        <div className="booking-form">

          <div className="date-row">

            <div>
              <small>CHECK-IN</small>
              <span>10/18/2026</span>
            </div>

            <div>
              <small>CHECKOUT</small>
              <span>10/23/2026</span>
            </div>

          </div>


          <div className="guest-row">

            <div>
              <small>GUESTS</small>
              <span>2 guests</span>
            </div>

            <span className="guest-arrow">⌄</span>

          </div>

        </div>


        <div className="cancellation-box">
          <span>
            Free cancellation before{" "}
            <strong>17 October</strong>
          </span>
        </div>


        {/* RESERVE */}
        <button
          className="reserve-button"
          onClick={handleReserve}
        >
          Reserve
        </button>


        <p className="charge-note">
          You won't be charged yet
        </p>

      </div>


      {/* ================= REPORT ================= */}
      <button className="report-listing">
        <span className="report-icon">⚑</span>
        <span>Report this listing</span>
      </button>


      {/* ================= TOAST ================= */}
      {showToast && (
        <div className="action-toast">
          You won't be charged yet
        </div>
      )}

    </aside>
  );
}