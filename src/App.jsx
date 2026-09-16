import { useEffect, useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import StickyHeader from "./components/StickyHeader";
import ListingTitle from "./components/ListingTitle";
import PhotoGallery from "./components/PhotoGallery";
import PropertyOverview from "./components/PropertyOverview";
import SleepingArrangements from "./components/SleepingArrangements";
import Amenities from "./components/Amenities";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import Reviews from "./components/Reviews";
import LocationSection from "./components/LocationSection";
import HostSection from "./components/HostSection";
import ThingsToKnow from "./components/ThingsToKnow";
import BookingCard from "./components/BookingCard";
import MoreStays from "./components/MoreStays";

export default function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <StickyHeader visible={showStickyHeader} />

      <main className="page-container">

        <ListingTitle />

        <PhotoGallery />

        {/* =====================================
            STICKY BOOKING AREA
            BookingCard stops after Calendar
        ====================================== */}
        <div className="listing-layout">

          {/* LEFT SIDE */}
          <div className="listing-content">

            <PropertyOverview />

            <SleepingArrangements />

            <Amenities />

            <AvailabilityCalendar />

          </div>

          {/* RIGHT SIDE */}
          <BookingCard />

        </div>


        {/* =====================================
            BELOW CALENDAR
            BookingCard is no longer present
        ====================================== */}

        <div className="listing-content listing-content-below">

          <Reviews />

          <LocationSection />

          <HostSection />

          <ThingsToKnow />
          <MoreStays/>

        </div>

      </main>
    </>
  );
}