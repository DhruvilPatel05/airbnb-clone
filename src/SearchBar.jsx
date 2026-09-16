
import houseIcon from "./assets/images/searchbar-house.png";
export default function SearchBar() {
  return (
    <div
      role="search"
      className="
        absolute
        left-[533.21875px]
        top-[20px]
        flex
        h-[48px]
        w-[403.5546875px]
        items-center
        rounded-full
        border
        border-[#dddddd]
        bg-white
        shadow-[0_1px_2px_rgba(0,0,0,0.08)]
      "
    >
      {/* Anywhere */}
      <button
        type="button"
        className="
          flex
          h-full
          items-center
          whitespace-nowrap
          pl-[14px]
          pr-[14px]
          text-[14px]
          font-medium
          text-[#222222]
          hover:bg-[#f7f7f7]
          rounded-l-full
        "
      >
        <img
          src={houseIcon}
          alt=""
          aria-hidden="true"
          className="mr-[10px] h-[18px] w-[18px] object-contain"
        />

        Anywhere
      </button>

      <span className="h-[24px] w-px bg-[#dddddd]" />

      {/* Anytime */}
      <button
        type="button"
        className="
          flex
          h-full
          items-center
          px-[16px]
          text-[14px]
          font-medium
          text-[#222222]
          hover:bg-[#f7f7f7]
        "
      >
        Anytime
      </button>

      <span className="h-[24px] w-px bg-[#dddddd]" />

      {/* Guests */}
      <button
        type="button"
        className="
          flex
          h-full
          flex-1
          items-center
          px-[16px]
          text-[14px]
          font-normal
          text-[#717171]
          hover:bg-[#f7f7f7]
        "
      >
        Add guests
      </button>

      {/* Search button */}
      <button
        type="button"
        aria-label="Search"
        className="
          mr-[4px]
          flex
          h-[40px]
          w-[40px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#ff385c]
          text-white
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[17px] w-[17px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 5 5" />
        </svg>
      </button>
    </div>
  );
}