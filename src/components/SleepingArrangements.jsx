import BedroomImage from "../assets/images/Bedroom.jpeg";
import LivingRoomImage from "../assets/images/livingroom1.jpeg";

export default function SleepingArrangements() {
  return (
    <section className="listing-section sleeping-section">

      <h2 className="section-title">
        Where you’ll sleep
      </h2>

      <div className="sleeping-grid">

        {/* Bedroom */}
        <div className="sleeping-room">

          <img
            src={BedroomImage}
            alt="Bedroom"
          />

          <div className="sleeping-room-info">
            <strong>Bedroom</strong>
            <span>1 double bed</span>
          </div>

        </div>


        {/* Living Room */}
        <div className="sleeping-room">

          <img
            src={LivingRoomImage}
            alt="Living room"
          />

          <div className="sleeping-room-info">
            <strong>Living room</strong>
            <span>1 sofa</span>
          </div>

        </div>

      </div>

    </section>
  );
}