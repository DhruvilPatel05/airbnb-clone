import Icon from "./Icon";
import hostImage from "../assets/images/host.jpeg";
import { useState } from "react";
export default function PropertyOverview() {
    const [showMore, setShowMore] = useState(false);
  return (
    <section className="listing-section property-overview">
      <div className="property-heading">
        <h2>Entire serviced apartment in Candolim, India</h2>
        <p>3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
      </div>

      <div className="guest-favourite-card">
        <div className="favourite-badge">
          <span className="favourite-heart">♥</span>
          <strong>Guest<br />favourite</strong>
        </div>
        <p>One of the most loved homes on Airbnb, according to guests</p>
        <div className="favourite-stats">
          <div><strong>4.95</strong><span>19 reviews</span></div>
          <div className="stat-divider" />
          <div><strong>★</strong><span>Guest favourite</span></div>
        </div>
      </div>

     <div className="host-summary">

  <img
    src={hostImage}
    alt="Mirashya Homes"
  />

  <div className="host-info">
    <strong>Hosted by Mirashya Homes</strong>
    <span>2 years hosting</span>
  </div>

</div>


<div className="property-highlights">

  <div className="highlight">
    <div className="highlight-icon">
      <svg viewBox="0 0 48 48">
        <path d="M12 30h24v10H12z" />
        <path d="M16 30c0-7 4-12 8-18 4 6 8 11 8 18" />
        <path d="M8 40h32" />
      </svg>
    </div>

    <div className="highlight-content">
      <strong>Outdoor entertainment</strong>
      <span>
        The pool and alfresco dining are great for summer trips.
      </span>
    </div>
  </div>


  <div className="highlight">
    <div className="highlight-icon">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="4" />
        <path d="M24 20C16 8 8 14 13 21c3 4 7 5 11 3" />
        <path d="M28 24c12-8 18 0 12 6-4 3-8 2-12-2" />
        <path d="M24 28c8 12 0 18-6 12-3-4-2-8 2-12" />
        <path d="M20 24C8 32 2 24 8 18c4-3 8-2 12 2" />
      </svg>
    </div>

    <div className="highlight-content">
      <strong>Designed for staying cool</strong>
      <span>
        Beat the heat with the A/C and ceiling fan.
      </span>
    </div>
  </div>


  <div className="highlight">
    <div className="highlight-icon">
      <svg viewBox="0 0 48 48">
        <path d="M13 40V10h22v30" />
        <path d="M9 40h30" />
        <circle cx="29" cy="25" r="1.5" />
      </svg>
    </div>

    <div className="highlight-content">
      <strong>Self check-in</strong>
      <span>
        You can check in with the building staff.
      </span>
    </div>
  </div>

</div>

<div className="property-description">

  <div className="translation-notice">
    <span>
      Some info has been automatically translated.
    </span>

    <button type="button">
      Show original
    </button>
  </div>


  <p
    id="descText"
    className={showMore ? "description-full" : "description-collapsed"}
  >
    🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in
    this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁
    for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺,
    pet-friendly comfort 🐾, and stylish interiors. Just minutes from
    Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹,
    it’s ideal for couples seeking romance, relaxation, and a touch of
    luxury in North Goa. ❤️🌴
  </p>


  <button
    type="button"
    className="show-more-button"
    onClick={() => setShowMore(!showMore)}
  >
    {showMore ? "Show less" : "Show more"}

    <span>
      {showMore ? "⌃" : "›"}
    </span>
  </button>

</div>
    </section>
  );
}
