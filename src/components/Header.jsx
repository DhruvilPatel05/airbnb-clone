import Icon from "./Icon";

import airbnbLogo from "../assets/images/airbnb-logo.png";
import searchbarHouse from "../assets/images/searchbar-house.png";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        {/* Airbnb Logo */}
        <a className="airbnb-logo" href="#" aria-label="Airbnb homepage">
          <img src={airbnbLogo} alt="Airbnb" />
        </a>

        {/* Search Bar */}
        <div className="search-bar" role="search">

          <button className="search-option">
            <img
              src={searchbarHouse}
              alt=""
              className="search-house-icon"
            />
            Anywhere
          </button>

          <span className="search-divider" />

          <button className="search-option">
            Anytime
          </button>

          <span className="search-divider" />

          <button className="search-option search-guests">
            Add guests
          </button>

          <button
  className="search-button"
  aria-label="Search"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      cx="10.8"
      cy="10.8"
      r="6.8"
    />
    <path d="M16 16l5 5" />
  </svg>
</button>

        </div>

        {/* Right Side */}
        <nav className="header-actions">

          <a className="become-host" href="#">
            Become a host
          </a>

          <button className="round-action">
            🌐
          </button>

          <button className="round-action menu-button">
            ☰
          </button>

        </nav>

      </div>
    </header>
  );
}