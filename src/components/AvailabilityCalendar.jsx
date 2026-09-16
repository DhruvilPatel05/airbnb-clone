const weekdays = ["S", "M", "T", "W", "T", "F", "S"];

function Month({
  name,
  days,
  startDay,
  selectedStart,
  selectedEnd,
  disabledDays = [],
}) {
  const emptyDays = Array.from(
    { length: startDay },
    (_, index) => (
      <span
        className="calendar-empty"
        key={`empty-${index}`}
      />
    )
  );

  const calendarDays = Array.from(
    { length: days },
    (_, index) => {
      const day = index + 1;

      const isStart = day === selectedStart;
      const isEnd = day === selectedEnd;

      const isSelected =
        selectedStart &&
        selectedEnd &&
        day >= selectedStart &&
        day <= selectedEnd;

      const isDisabled = disabledDays.includes(day);

      return (
        <button
          key={day}
          type="button"
          disabled={isDisabled}
          className={[
            isSelected ? "calendar-selected" : "",
            isStart ? "calendar-start" : "",
            isEnd ? "calendar-end" : "",
            isDisabled ? "calendar-disabled" : "",
          ].join(" ")}
        >
          {day}
        </button>
      );
    }
  );

  return (
    <div className="calendar-month">

      <h3>{name}</h3>

      <div className="calendar-weekdays">
        {weekdays.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </div>

      <div className="calendar-days">
        {emptyDays}
        {calendarDays}
      </div>

    </div>
  );
}


export default function AvailabilityCalendar() {
  return (
    <section className="listing-section availability-section">

      {/* Heading */}
      <h2 className="section-title">
        5 nights in Candolim
      </h2>

      <p className="section-subtitle">
        18 Oct 2026 - 23 Oct 2026
      </p>


      {/* Calendar header */}
      <div className="calendar-navigation">

        <button
          type="button"
          className="calendar-arrow calendar-prev"
        >
          ‹
        </button>

        <h3>October 2026</h3>

        <h3>November 2026</h3>

        <button
          type="button"
          className="calendar-arrow calendar-next"
        >
          ›
        </button>

      </div>


      {/* Two months */}
      <div className="availability-calendar">

        <Month
          name=""
          days={31}
          startDay={4}
          selectedStart={18}
          selectedEnd={23}
        />

        <Month
          name=""
          days={30}
          startDay={0}
          disabledDays={[
            18, 19, 20, 21,
            22, 23, 24,
            29, 30
          ]}
        />

      </div>


      {/* Bottom controls */}
      <div className="calendar-bottom">

        <button
          type="button"
          className="calendar-keyboard"
          aria-label="Keyboard"
        >
          ▭
        </button>

        <button
          type="button"
          className="clear-dates"
        >
          Clear dates
        </button>

      </div>

    </section>
  );
}