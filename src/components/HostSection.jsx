import React from "react";


import hostImage from "../assets/images/host.jpeg";
import sharathImage from "../assets/images/avatars/rev1.jpeg";
import amanImage from "../assets/images/avatars/rev2.jpeg";
import mariaImage from "../assets/images/avatars/rev3.jpeg";
import simranImage from "../assets/images/avatars/rev4.jpeg";
import pallaviImage from "../assets/images/avatars/rev5.jpeg";
import sanyuktaImage from "../assets/images/avatars/rev1.jpeg";

const coHosts = [
  {
    name: "Sharath",
    image: sharathImage,
  },
  {
    name: "Aman Dev Pahwa",
    image: amanImage,
  },
  {
    name: "Maria Karen Priyanka",
    image: mariaImage,
  },
  {
    name: "Simran",
    image: simranImage,
  },
  {
    name: "Pallavi",
    image: pallaviImage,
  },
  {
    name: "Sanyukta",
    image: sanyuktaImage,
  },
];
function BalloonIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="12" r="8" />
      <path d="M16 20v7" />
      <path d="M13 27h6" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 12l12-7 12 7-12 7z" />
      <path d="M8 15v8l8 5 8-5v-8" />
      <path d="M28 13v8" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4l10 4v8c0 7-4.5 11-10 13-5.5-2-10-6-10-13V8z" />
      <path d="M16 4v25" />
    </svg>
  );
}

export default function HostSection() {
  return (
    <section className="host-section">

      <h2 className="host-section-title">
        Meet your host
      </h2>

      <div className="host-layout">

        {/* LEFT */}
        <div className="host-left">

          <div className="host-card">

      <div className="host-profile">

        <div className="host-image-wrap">
          <img
            src={hostImage}
            alt=""
          />

          <span className="host-verified">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm7 7.59L24.41 12 13.5 22.91 7.59 17 9 15.59l4.5 4.5z" />
            </svg>
          </span>
        </div>

      <div className="host-name">
  Mirashya
  <br />
  Homes
</div>

        <div className="host-role">
          Host
        </div>

      </div>


      <div className="host-stats">

        <div className="host-stat">
          <div className="stat-value">
            1,463
          </div>

          <div className="stat-label">
            Reviews
          </div>
        </div>


        <div className="host-stat">
          <div className="stat-value">
            4.68★
          </div>

          <div className="stat-label">
            Rating
          </div>
        </div>


        <div className="host-stat">
          <div className="stat-value">
            2
          </div>

          <div className="stat-label">
            Years hosting
          </div>
        </div>

      </div>

    </div>

          <div className="host-facts">

            <div className="host-fact">
              <span className="fact-icon">
                <BalloonIcon />
              </span>

              <span>
                Born in the 80s
              </span>
            </div>

            <div className="host-fact">
              <span className="fact-icon">
                <SchoolIcon />
              </span>

              <span>
                Where I went to school: NICMAR GOA
              </span>
            </div>

          </div>

        </div>


        {/* RIGHT */}
        <div className="host-right">

          <h3 className="cohost-title">
            Co-Hosts
          </h3>

          <div className="cohost-grid">

            {coHosts.map((host) => (
              <div
                className="cohost-item"
                key={host.name}
              >
                <img
                  src={host.image}
                  alt={host.name}
                  className="cohost-image"
                />

                <span className="cohost-name">
                  {host.name}
                </span>
              </div>
            ))}

            <div className="cohost-item">
              <div className="cohost-initial pink">
                S
              </div>

              <span className="cohost-name">
                Shruti
              </span>
            </div>

            <div className="cohost-item">
              <div className="cohost-initial blue">
                A
              </div>

              <span className="cohost-name">
                Amisha
              </span>
            </div>

          </div>


          <h3 className="host-details-title">
            Host details
          </h3>

          <div className="host-details">
            <div>
              Response rate: 100%
            </div>

            <div>
              Responds within an hour
            </div>
          </div>


          <button className="message-host">
            Message host
          </button>


          <div className="payment-note">

            <span className="payment-icon">
              <ShieldIcon />
            </span>

            <span>
              To help protect your payment, always use Airbnb
              to send money and communicate with hosts.
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}