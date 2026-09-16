import { useCallback, useEffect, useRef } from "react";


/* =========================
   LIVING ROOM 1
========================= */

import livingRoom1 from "../assets/images/a9831aeb-f441-44f5-a38f-4cf54e3f0fcf.jpeg";
import livingRoom1_2 from "../assets/images/a45feaa2-b607-4092-83ac-5fd4b2894959.jpeg";
import livingRoom1_3 from "../assets/images/f1da1c3d-0d10-481e-9b63-c71f9073f30b.jpeg";


/* =========================
   LIVING ROOM 2
========================= */

import livingRoom2 from "../assets/images/090d8b0b-b539-42c0-84f8-e1fb0cdf9a93.jpeg";
import livingRoom2_2 from "../assets/images/9be71047-fc52-438a-9270-75cb470f6752.jpeg";
import livingRoom2_3 from "../assets/images/f6de1663-4e9c-4414-b63b-29a154a92ee1.jpeg";
import livingRoom2_4 from "../assets/images/2367476f-11c4-4a14-a7c6-267be62c1d59.jpeg";
import livingRoom2_5 from "../assets/images/34529829-a971-44d3-ac2f-90ea3678a34d.jpeg";
import livingRoom2_6 from "../assets/images/153aa732-4935-48b8-a6fe-b469b6af5efc.jpeg";
import livingRoom2_7 from "../assets/images/3c6e6809-1bb1-47a6-8e24-aff593e1c28f.jpeg";


/* =========================
   KITCHEN
========================= */

import kitchen1 from "../assets/images/56c44812-52c0-4481-90d8-101ec1f34c7a.jpeg";
import kitchen2 from "../assets/images/ddc853d7-e658-405c-bedc-8f31106c447e.jpeg";


/* =========================
   BEDROOM
========================= */

import bedroom1 from "../assets/images/67c61c6f-6260-4809-9510-0360e58a345d.jpeg";
import bedroom2 from "../assets/images/1c827136-4a85-4fe0-8e69-3fd8ea19bb17.jpeg";
import bedroom3 from "../assets/images/0622ab42-b851-4d55-9d9f-df3143bc5909.jpeg";
import bedroom4 from "../assets/images/a74e3c0b-3188-4442-9146-1cd4d6ea45df.jpeg";
import bedroom5 from "../assets/images/48a8ffbc-fbf7-4f84-bc29-ee400da3f08b.jpeg";
import bedroom6 from "../assets/images/3cf31697-f3f3-4c60-82c4-029acb119ae4.jpeg";


/* =========================
   BATHROOM
========================= */

import bathroom1 from "../assets/images/97c78f8a-5090-4663-aebc-ba4e13b47092.jpeg";


/* =========================
   GYM
========================= */

import gym1 from "../assets/images/9aa8e65f-94ac-4ba0-9a10-9ec91e536d22.jpeg";
import gym2 from "../assets/images/246bd88d-4dd6-4117-a401-02a36ebfcf16.jpeg";
import gym3 from "../assets/images/4fede77d-7a71-446f-89e3-263af937f3fa.jpeg";
import gym4 from "../assets/images/79f59adb-5a5f-4d6c-8109-1f01f4ca0d03.jpeg";
import gym5 from "../assets/images/f19d8c0a-1d88-42a4-9218-686d4f0db7e4.jpeg";


/* =========================
   EXTERIOR
========================= */

import exterior1 from "../assets/images/23ea6621-6f74-4baa-acea-2fd03e312b41.jpeg";
import exterior2 from "../assets/images/5adfdf3e-d497-4efc-ab8c-fc559dab311e.jpeg";
import exterior3 from "../assets/images/608748cd-6ee7-4a71-88a2-ba79d3ddba5a.jpeg";
import exterior4 from "../assets/images/5b856fde-a393-41bf-b373-c9d02e64221f.jpeg";
import exterior5 from "../assets/images/c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d.jpeg";
import exterior6 from "../assets/images/42befad7-fb29-473d-91db-b03e7a544d1d.jpeg";


/* =========================
   POOL
========================= */

import pool1 from "../assets/images/fc02f48f-a937-42c5-895d-f9cc3113d6ca.jpeg";
import pool2 from "../assets/images/929545d3-e241-46c0-8a70-c24531ce7b54.jpeg";
import pool3 from "../assets/images/8eb65a8b-e795-4870-b141-6f63b1be24ae.jpeg";


/* =========================
   ADDITIONAL PHOTOS
========================= */

import additional1 from "../assets/images/70325367-cbae-4993-b560-18cd3f6edd53.jpeg";
import additional2 from "../assets/images/cc7a56bd-242c-498a-9aef-0cffac619e54.jpeg";
import additional3 from "../assets/images/30ad93b2-293f-494d-b645-626303c6cb93.jpeg";
import additional4 from "../assets/images/9642a60d-e9de-4e1a-89c2-9ebd230f4a74.jpeg";
import additional5 from "../assets/images/b6599f26-d65c-4df0-baf2-ef18c82a86a3.jpeg";
import additional6 from "../assets/images/dc01fd46-b119-48d3-a43b-f6c093e26eca.jpeg";
import additional7 from "../assets/images/fe37b80e-da8a-4225-b27b-dfbb5d763c01.jpeg";
import additional8 from "../assets/images/3c90338e-86b4-423f-aae1-279e0ccc3a18.jpeg";
import additional9 from "../assets/images/862d936c-0f34-4e50-af87-b519e2781d19.jpeg";
import additional10 from "../assets/images/79addceb-8c2d-419b-80ff-e29af426a94c.jpeg";


/* =========================
   ROOMS
========================= */

const rooms = [
  {
    title: "Living room 1",
    features: "Sofa · Air conditioning · Ceiling fan · TV",
    images: [
      livingRoom1,
      livingRoom1_2,
      livingRoom1_3,
    ],
  },

  {
    title: "Living room 2",
    features: "Ceiling fan · Hot tub",
    images: [
      livingRoom2,
      livingRoom2_2,
      livingRoom2_3,
      livingRoom2_4,
      livingRoom2_5,
      livingRoom2_6,
      livingRoom2_7,
    ],
  },

  {
    title: "Full kitchen",
    features:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    images: [
      kitchen1,
      kitchen2,
    ],
  },

  {
    title: "Bedroom",
    features:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    images: [
      bedroom1,
      bedroom2,
      bedroom3,
      bedroom4,
      bedroom5,
      bedroom6,
    ],
  },

  {
    title: "Full bathroom",
    features:
      "Hairdryer · Hot water · Shampoo · Shower gel",
    images: [
      bathroom1,
    ],
  },

  {
    title: "Gym",
    features:
      "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    images: [
      gym1,
      gym2,
      gym3,
      gym4,
      gym5,
    ],
  },

  {
    title: "Exterior",
    features: "",
    images: [
      exterior1,
      exterior2,
      exterior3,
      exterior4,
      exterior5,
      exterior6,
    ],
  },

  {
    title: "Pool",
    features: "Pool",
    images: [
      pool1,
      pool2,
      pool3,
    ],
  },

  {
    title: "Additional photos",
    features: "",
    images: [
      additional1,
      additional2,
      additional3,
      additional4,
      additional5,
      additional6,
      additional7,
      additional8,
      additional9,
      additional10,
    ],
  },
];
const FOCUSABLE =
  'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';


/* =========================================
   PHOTO DATA
========================================= */



/* =========================================
   COMPONENT
========================================= */

export default function PhotoTour({
  open,
  onClose,
}) {
  const overlayRef = useRef(null);
  const backRef = useRef(null);
  const restoreFocusRef = useRef(null);


  /* =========================================
     SCROLL LOCK + ESCAPE + FOCUS
  ========================================= */

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current =
      document.activeElement;

    const scrollbar =
      window.innerWidth -
      document.documentElement.clientWidth;

    const {
      overflow,
      paddingRight,
    } = document.body.style;

    document.body.style.overflow = "hidden";

    if (scrollbar > 0) {
      document.body.style.paddingRight =
        `${scrollbar}px`;
    }

    const raf =
      requestAnimationFrame(() => {
        backRef.current?.focus();
      });

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const nodes =
        overlayRef.current?.querySelectorAll(
          FOCUSABLE
        );

      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last =
        nodes[nodes.length - 1];

      if (
        e.shiftKey &&
        document.activeElement === first
      ) {
        e.preventDefault();
        last.focus();
      }

      if (
        !e.shiftKey &&
        document.activeElement === last
      ) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      cancelAnimationFrame(raf);

      document.removeEventListener(
        "keydown",
        onKeyDown
      );

      document.body.style.overflow =
        overflow;

      document.body.style.paddingRight =
        paddingRight;

      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose]);


  /* =========================================
     BROWSER BACK
  ========================================= */

  useEffect(() => {
    if (!open) return;

    const onPopState = () => {
      onClose({
        fromHistory: true,
      });
    };

    window.addEventListener(
      "popstate",
      onPopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        onPopState
      );
    };
  }, [open, onClose]);


  /* =========================================
     BACK
  ========================================= */

  const handleBack =
    useCallback(() => {
      onClose();
    }, [onClose]);


  /* =========================================
     CATEGORY CLICK
  ========================================= */

  const handleCategoryClick = (
    index
  ) => {
    const room =
      document.getElementById(
        `tour-room-${index}`
      );

    room?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  if (!open) {
    return null;
  }


  return (
    <div
      className="tour-overlay"
      id="photoTour"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >

      {/* =====================================
          HEADER
      ===================================== */}

      <header
        className="tour-bar"
        id="tourBar"
      >

        <button
          className="tour-icon-btn tour-back"
          type="button"
          aria-label="Back"
          ref={backRef}
          onClick={handleBack}
        >
          <span className="tour-icon tour-icon--16">
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              <path
                d="m13.7 16.29a1 1 0 1 1-1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>


        <h2 className="tour-title">
          Photo tour
        </h2>


        <div className="tour-actions">

          <button
            className="tour-icon-btn"
            type="button"
            aria-label="Share"
          >
            <span className="tour-icon">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </button>


          <button
            className="tour-icon-btn"
            type="button"
            aria-label="Save"
          >
            <span className="tour-icon">
              <svg
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </button>

        </div>
      </header>


      {/* =====================================
          SCROLL AREA
      ===================================== */}

      <div
        className="tour-scroll"
        id="tourScroll"
      >

        <div className="tour-content">


          {/* =================================
              CATEGORY NAV
          ================================= */}

          <nav
            className="tour-nav"
            id="tourNav"
            aria-label="Photo categories"
          >

            {rooms.map(
              (room, index) => (
                <button
                  className="tour-category"
                  type="button"
                  key={room.title}
                  aria-label={room.title}
                  onClick={() =>
                    handleCategoryClick(
                      index
                    )
                  }
                >

                  <img
                    src={room.images[0]}
                    alt=""
                    loading="lazy"
                  />

                  <span>
                    {room.title}
                  </span>

                </button>
              )
            )}

          </nav>


          {/* =================================
              ROOMS
          ================================= */}

          <div
            className="tour-rooms"
            id="tourRooms"
          >

            {rooms.map(
              (room, roomIndex) => (
                <section
                  className="tour-room"
                  id={`tour-room-${roomIndex}`}
                  key={room.title}
                >

                  {/* ROOM TEXT */}

                  <div className="tour-room-info">

                    <div className="tour-room-title">
                      {room.title}
                    </div>

                    {room.features && (
                      <div className="tour-room-features">
                        {room.features}
                      </div>
                    )}

                  </div>


                  {/* ROOM IMAGES */}

               {/* ROOM IMAGES */}

<div className="tour-room-images">

  {room.images.map((image, imageIndex) => (
    <div
      className={
        imageIndex === 0
          ? "tour-image-main"
          : "tour-image-small"
      }
      key={`${room.title}-${imageIndex}`}
    >
      <button
        type="button"
        className="tour-image-button"
        aria-label={`${room.title} image ${imageIndex + 1}`}
      >
        <img
          src={image}
          alt={room.title}
          loading="lazy"
        />
      </button>
    </div>
  ))}

</div>

                </section>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}