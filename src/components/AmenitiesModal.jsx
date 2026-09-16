import { useEffect } from "react";

export default function AmenitiesModal({
  open,
  onClose,
  amenities,
}) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const groups = [
    {
      title: "Bathroom",
      items: [
        "Hairdryer",
        "Cleaning products",
        "Shampoo",
        "Hot water",
        "Shower gel",
      ],
    },

    {
      title: "Bedroom and laundry",
      items: [
        "Washing machine",
        "Hangers",
        "Bed linen",
        "Room-darkening blinds",
        "Iron",
        "Clothes storage",
        "Cot",
      ],
    },

    {
      title: "Entertainment",
      items: ["TV"],
    },

    {
      title: "Family",
      items: ["Cot"],
    },

    {
      title: "Heating and cooling",
      items: [
        "Air conditioning",
        "Ceiling fan",
      ],
    },

    {
      title: "Home safety",
      items: [
        "Exterior security cameras on property",
        "Carbon monoxide alarm",
        "Smoke alarm",
      ],
    },

    {
      title: "Internet and office",
      items: [
        "Wifi",
        "Dedicated workspace",
      ],
    },

    {
      title: "Kitchen and dining",
      items: [
        "Kitchen",
        "Fridge",
        "Freezer",
        "Microwave",
        "Cooking basics",
        "Crockery and cutlery",
        "Kettle",
        "Coffee",
        "Toaster",
        "Blender",
      ],
    },
  ];

  const normalize = (item) => {
    if (item === "Free parking") {
      return "Free parking on premises";
    }

    if (item === "Exterior security cameras") {
      return "Exterior security cameras on property";
    }

    return item;
  };

  const getIcon = (item) => {
    switch (item) {
      case "Wifi":
        return "⌁";

      case "Kitchen":
        return "♨";

      case "Dedicated workspace":
        return "▣";

      case "TV":
        return "▣";

      case "Pool":
        return "≋";

      case "Air conditioning":
        return "❄";

      case "Ceiling fan":
        return "✽";

      case "Hairdryer":
        return "⌁";

      case "Washing machine":
        return "◉";

      case "Iron":
        return "▱";

      case "Cot":
        return "▥";

      case "Fridge":
      case "Freezer":
        return "▯";

      case "Microwave":
        return "▤";

      case "Coffee":
        return "♨";

      case "Toaster":
        return "▥";

      case "Blender":
        return "▱";

      case "Crockery and cutlery":
        return "♜";

      case "Hot water":
        return "♨";

      case "Shampoo":
        return "♢";

      case "Shower gel":
        return "♢";

      default:
        return "○";
    }
  };

  return (
    <div
      className="amenities-modal-overlay"
      onClick={onClose}
    >
      <div
        className="amenities-modal"
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <div className="amenities-modal-header">
          <button
            type="button"
            className="amenities-close"
            aria-label="Close"
            onClick={onClose}
          >
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M6 6l20 20M26 6 6 26" />
            </svg>
          </button>
        </div>

        {/* BODY */}
        <div className="amenities-modal-body">

          <h2>What this place offers</h2>

          {groups.map((group) => (
            <section
              className="amenity-category"
              key={group.title}
            >
              <h3>{group.title}</h3>

              <div className="amenity-category-list">

                {group.items.map((item) => {
                  const label = normalize(item);

                  const unavailable =
                    item === "Carbon monoxide alarm" ||
                    item === "Smoke alarm";

                  return (
                    <div
                      className={`amenity-modal-item ${
                        unavailable
                          ? "amenity-modal-unavailable"
                          : ""
                      }`}
                      key={item}
                    >

                      <span className="amenity-modal-icon">
                        {getIcon(item)}
                      </span>

                      <span className="amenity-modal-label">
                        {label}
                      </span>

                    </div>
                  );
                })}

              </div>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
}