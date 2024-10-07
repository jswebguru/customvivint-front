import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { GoStar, GoStarFill } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import ThemeButton from "../ThemeButton";
import "./Header.css";

const Header = ({ title = "Home", onOpenDrawer }) => {
  const { headerState, setHeaderState } = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDateRangeSelection = (option) => {
    setHeaderState((prev) => ({
      ...prev,
      dateRange: option, // Assuming 'dateRange' is a valid key in headerState
    }));
    setDropdownVisible(false); // Optionally hide the dropdown after selection
  };

  return (
    <header className="sticky top-0 bg-background-primary text-text-primary h-[53px] p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          className="font-albert font-bold header-icon"
          onClick={onOpenDrawer}
        >
          <FaBars />
        </button>
        <div className="w-px h-[21px] bg-[#383434]" />
        <div className="flex items-center header-title gap-2">
          {headerState.favoritesIcon && <GoStar className="w-6 h-6" />}
          <h1 className="font-albert font-bold">{headerState.title}</h1>
        </div>
      </div>
      <div className="flex items-center text-text-secondary relative">
        {headerState.title === "Home" && <ThemeButton />}
        {headerState.calendarComponent && (
          <>
            <div className="flex items-center header-title gap-2">
              <p className="text-sm font-semibold font-albert">
                {headerState.dateRange}
              </p>
              <button
                className="font-albert font-bold "
                onClick={toggleDropdown}
              >
                <MdOutlineCalendarMonth className="w-6 h-6" />
              </button>
            </div>
            {dropdownVisible && (
              <div className="text-black absolute right-2 top-6 mt-2 w-48 bg-white border rounded shadow-md z-10">
                <ul className="list-none p-0 m-0">
                  {["Last Year", "Last Month", "Last Week", "Last Day"].map(
                    (option) => (
                      <li
                        key={option}
                        className="p-2"
                        onClick={() => handleDateRangeSelection(option)}
                      >
                        {option}
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
