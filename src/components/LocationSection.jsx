import React, { useState } from "react";


const SearchIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2, overflow: "visible" }}>
    <circle cx="14" cy="14" r="9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21l7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ZoomInIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2, overflow: "visible" }}>
    <path d="M16 6v20M6 16h20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ZoomOutIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2, overflow: "visible" }}>
    <path d="M6 16h20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "none", stroke: "currentColor", strokeWidth: 2, overflow: "visible" }}>
    <path d="M6 29h20M9 29V15l7-6 7 6v14M13 29v-7h6v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style={{ display: "block", height: "100%", width: "100%", fill: "currentColor" }}>
    <path fillRule="evenodd" d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
  </svg>
);

const Location = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="location-section" id="location">
      <h2 className="location-heading">Where you'll be</h2>
      <div className="location-address">Candolim, Goa, India</div>

      <div className="map-wrap">
        <div className="map-bg" />

        <button className="map-search-btn" type="button" aria-label="Search">
          <span className="map-search-icon">
            <SearchIcon />
          </span>
        </button>

        <div className="map-zoom-controls">
          <button aria-label="Zoom in" type="button">
            <span className="zoom-icon"><ZoomInIcon /></span>
          </button>
          <button aria-label="Zoom out" type="button">
            <span className="zoom-icon"><ZoomOutIcon /></span>
          </button>
        </div>

        <div className="map-pin">
          <PinIcon />
        </div>
      </div>

      <div className="location-note">
        Exact location will be provided after booking.
      </div>

      <div className="neighbourhood-title">Neighbourhood highlights</div>
      <div className={`neighbourhood-text ${expanded ? "expanded" : "clamped"}`}>
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with
        easy access to beaches, cafés, and popular attractions.
      </div>

      <button
        className="show-more-btn"
        type="button"
        style={{ marginTop: "18px" }}
        onClick={() => setExpanded((e) => !e)}
      >
        {expanded ? "Show less" : "Show more"}
        <span className={`chevron ${expanded ? "rotated" : ""}`}>
          <ChevronIcon />
        </span>
      </button>
    </section>
  );
};

export default Location;
