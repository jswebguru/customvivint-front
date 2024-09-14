import { FaBars } from "react-icons/fa6";
import "./Header.css";
const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="mr-2">
          <div>
            <FaBars />
          </div>
        </div>
        <div className="flex items-center header-title">
          <h1 className="text-lg font-bold">Home</h1>
        </div>
      </div>
      <div className="flex items-center text-gray-400">
        <span className="text-sm font-light mr-1">Last Week</span>
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h8m-6 4h6m-4 4h4m2 2a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h12z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
