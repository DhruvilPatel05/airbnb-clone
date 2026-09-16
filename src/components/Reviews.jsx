import React, { useState } from "react";


import laurelLeft from "../assets/images/laurel-left.png";
import laurelRight from "../assets/images/laurel-right.png";

import comfortIcon from "../assets/images/chips/comfort.png";
import accuracyIcon from "../assets/images/chips/accuracy.png";
import hotTubIcon from "../assets/images/chips/hot-tub.png";
import conditionIcon from "../assets/images/chips/condition.png";
// import hospitalityIcon from "./assets/images/chips/hospitality.png";
import cleanlinessChipIcon from "../assets/images/chips/cleanliness.png";
import amenitiesIcon from "../assets/images/chips/amenities.png";
// import decorIcon from "../assets/images/chips/decor.png";
import indoorSpacesIcon from "../assets/images/chips/indoor-spaces.png";
import locationChipIcon from "../assets/images/chips/location.png";

import rev1 from "../assets/images/avatars/rev1.jpeg";
import rev2 from "../assets/images/avatars/rev2.jpeg";
import rev3 from "../assets/images/avatars/rev3.jpeg";
import rev4 from "../assets/images/avatars/rev4.jpeg";

/* ===== Real category icon paths, copied from DevTools outerHTML ===== */
const CategoryIcon = ({ type }) => {
  if (type === "communication") {
    // this one is stroke-based, not fill-based, in the real markup
    return (
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2, overflow: "visible" }}>
        <path d="m25.5 3.5c2.2091 0 4 1.79086 4 4v13.8333c0 2.2092-1.7909 4-4 4h-5.8192l-3.6808 4.5-3.6832-4.5h-5.8168c-2.20914 0-4-1.7908-4-4v-13.8333c0-2.20914 1.79086-4 4-4z" fill="none" />
      </svg>
    );
  }

  const paths = {
    cleanliness:
      "M24 0v6h-4.3c.13 1.4.67 2.72 1.52 3.78l.2.22-1.5 1.33a9.05 9.05 0 0 1-2.2-5.08c-.83.38-1.32 1.14-1.38 2.2v4.46l4.14 4.02a5 5 0 0 1 1.5 3.09l.01.25.01.25v8.63a3 3 0 0 1-2.64 2.98l-.18.01-.21.01-12-.13A3 3 0 0 1 4 29.2L4 29.02v-8.3a5 5 0 0 1 1.38-3.45l.19-.18L10 12.9V8.85l-4.01-3.4.02-.7A5 5 0 0 1 10.78 0H11zm-5.03 25.69a8.98 8.98 0 0 1-6.13-2.41l-.23-.23A6.97 6.97 0 0 0 6 21.2v7.82c0 .51.38.93.87 1H7l11.96.13h.13a1 1 0 0 0 .91-.88l.01-.12v-3.52c-.34.04-.69.06-1.03.06zM17.67 2H11a3 3 0 0 0-2.92 2.3l-.04.18-.01.08 3.67 3.1h2.72l.02-.1a4.29 4.29 0 0 1 3.23-3.4zM30 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0h-2.33v2H22zm8-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM20 20.52a3 3 0 0 0-.77-2l-.14-.15-4.76-4.61v-4.1H12v4.1l-5.06 4.78a3 3 0 0 0-.45.53 9.03 9.03 0 0 1 7.3 2.34l.23.23A6.98 6.98 0 0 0 20 23.6z",
    accuracy:
      "M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z",
    checkin:
      "M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z",
    location:
      "M30.95 3.81a2 2 0 0 0-2.38-1.52l-7.58 1.69-10-2-8.42 1.87A1.99 1.99 0 0 0 1 5.8v21.95a1.96 1.96 0 0 0 .05.44 2 2 0 0 0 2.38 1.52l7.58-1.69 10 2 8.42-1.87A1.99 1.99 0 0 0 31 26.2V4.25a1.99 1.99 0 0 0-.05-.44zM12 4.22l8 1.6v21.96l-8-1.6zM3 27.75V5.8l-.22-.97.22.97 7-1.55V26.2zm26-1.55-7 1.55V5.8l7-1.55z",
    value:
      "M16.17 2a3 3 0 0 1 1.98.74l.14.14 11 11a3 3 0 0 1 .14 4.1l-.14.14L18.12 29.3a3 3 0 0 1-4.1.14l-.14-.14-11-11A3 3 0 0 1 2 16.37l-.01-.2V5a3 3 0 0 1 2.82-3h11.35zm0 2H5a1 1 0 0 0-1 .88v11.29a1 1 0 0 0 .2.61l.1.1 11 11a1 1 0 0 0 1.31.08l.1-.08L27.88 16.7a1 1 0 0 0 .08-1.32l-.08-.1-11-11a1 1 0 0 0-.58-.28L16.17 4zM9 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "currentColor" }}>
      <path d={paths[type]} />
    </svg>
  );
};

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: filled ? "currentColor" : "#dddddd" }}>
    <path fillRule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
  </svg>
);

const categories = [
  { key: "cleanliness", label: "Cleanliness", score: "5.0", icon: "cleanliness" },
  { key: "accuracy", label: "Accuracy", score: "5.0", icon: "accuracy" },
  { key: "checkin", label: "Check-in", score: "5.0", icon: "checkin" },
  { key: "communication", label: "Communication", score: "5.0", icon: "communication" },
  { key: "location", label: "Location", score: "4.8", icon: "location" },
  { key: "value", label: "Value", score: "4.8", icon: "value" },
];

const ratingBars = [
  { stars: 5, pct: 95 },
  { stars: 4, pct: 5 },
  { stars: 3, pct: 0 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];

const highlightTags = [
  { icon: comfortIcon, label: "Comfort", count: 6 },
  { icon: accuracyIcon, label: "Accuracy", count: 5 },
  { icon: hotTubIcon, label: "Hot tub", count: 5 },
  { icon: conditionIcon, label: "Condition", count: 4 },
  // { icon: hospitalityIcon, label: "Hospitality", count: 8 },
  { icon: cleanlinessChipIcon, label: "Cleanliness", count: 4 },
  { icon: amenitiesIcon, label: "Amenities", count: 2 },
  // { icon: decorIcon, label: "Decor", count: 2 },
  { icon: indoorSpacesIcon, label: "Indoor spaces", count: 2 },
  { icon: locationChipIcon, label: "Location", count: 2 },
];

const reviews = [
  {
    id: 1,
    name: "Amit",
    tenure: "2 months on Airbnb",
    avatarBg: "rgb(247, 237, 226)",
    avatarColor: "rgb(193, 133, 42)",
    avatarText: "A",
    rating: 5,
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    id: 2,
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    avatarImg: rev1,
    rating: 5,
    date: "2 weeks ago",
    truncated: true,
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
  },
  {
    id: 3,
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    avatarImg: rev2,
    rating: 5,
    date: "May 2026",
    text: "the host nitish was really great help",
  },
  {
    id: 4,
    name: "Vedant",
    tenure: "4 years on Airbnb",
    avatarBg: "rgb(239, 234, 247)",
    avatarColor: "rgb(139, 111, 196)",
    avatarText: "V",
    rating: 5,
    date: "May 2026",
    truncated: true,
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!",
  },
  {
    id: 5,
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    avatarImg: rev3,
    rating: 5,
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    id: 6,
    name: "Mohd",
    tenure: "5 years on Airbnb",
    avatarImg: rev4,
    rating: 5,
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
  },
];

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="review-card">
      <div className="review-head">
        {review.avatarImg ? (
          <img className="review-avatar-img" src={review.avatarImg} alt="" />
        ) : (
          <div
            className="review-avatar-fallback"
            style={{ background: review.avatarBg, color: review.avatarColor }}
          >
            {review.avatarText}
          </div>
        )}
        <div>
          <div className="review-name">{review.name}</div>
          <div className="review-tenure">{review.tenure}</div>
        </div>
      </div>

      <div className="review-rating-row">
        <span className="review-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <span className="star-wrap" key={i}>
              <StarIcon filled={i < review.rating} />
            </span>
          ))}
        </span>
        <span>·</span>
        <span>{review.date}</span>
      </div>

      <div className={`review-text ${review.truncated && !expanded ? "clamped" : ""}`}>
        {review.text}
      </div>

      {review.truncated && (
        <button className="show-more-btn" type="button" onClick={() => setExpanded((e) => !e)}>
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="rating-summary">
        <div className="rating-badge">
          <img src={laurelLeft} alt="" />
          <div className="rating-number">4.95</div>
          <img src={laurelRight} alt="" />
        </div>
        <div className="guest-favourite-title">Guest favourite</div>
        <div className="guest-favourite-desc">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button className="how-reviews-link" type="button">
          How reviews work
        </button>
      </div>

      <div className="rating-breakdown">
        <div className="rating-bars-col">
          <div className="breakdown-label">Overall rating</div>
          <div className="rating-bars">
            {ratingBars.map((row) => (
              <div className="rating-bar-row" key={row.stars}>
                <span className="rating-bar-num">{row.stars}</span>
                <div className="rating-bar-track">
                  <div className="rating-bar-fill" style={{ width: `${row.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {categories.map((cat) => (
          <div className="category-col" key={cat.key}>
            <div className="breakdown-label">{cat.label}</div>
            <div className="category-value">{cat.score}</div>
            <div className="category-icon">
              <CategoryIcon type={cat.icon} />
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-tags">
        {highlightTags.map((tag) => (
          <button className="highlight-pill" type="button" key={tag.label}>
            <img className="pill-icon" src={tag.icon} alt="" aria-hidden="true" />
            {tag.label} <span className="pill-count">{tag.count}</span>
          </button>
        ))}
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>

      <button className="show-all-reviews-btn" type="button">
        Show all 19 reviews
      </button>
    </section>
  );
};

export default Reviews;
