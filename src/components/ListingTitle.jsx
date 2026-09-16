import { useEffect, useState } from "react";

export default function ListingTitle() {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
  };

  const handleSave = () => {
    const newSavedState = !saved;

    setSaved(newSavedState);

    showToast(
      newSavedState
        ? "Saved to wishlist"
        : "Removed from wishlist"
    );
  };

  const handleShare = async () => {
    // Try native share on supported devices
    if (navigator.share) {
      try {
        await navigator.share({
          title:
            "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled share
      }
    }

    // Show Airbnb-style toast
    showToast("Share options");
  };

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2500);

    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <>
      <section className="listing-title-row">
        <h1>
          Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
        </h1>

        <div className="listing-actions">
          {/* SHARE */}
          <button
            className="text-action"
            type="button"
            onClick={handleShare}
          >
            <span className="share-icon">↗</span>
            <span>Share</span>
          </button>

          {/* SAVE */}
          <button
            className={`text-action save-action ${
              saved ? "saved" : ""
            }`}
            type="button"
            onClick={handleSave}
          >
            <span className="heart-icon">
              {saved ? "♥" : "♡"}
            </span>

            <span>
              {saved ? "Saved" : "Save"}
            </span>
          </button>
        </div>
      </section>

      {/* TOAST */}
      {toast && (
        <div className="action-toast">
          {toast}
        </div>
      )}
    </>
  );
}