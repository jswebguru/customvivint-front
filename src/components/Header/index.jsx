import { FaBars } from "react-icons/fa6";
import ThemeButton from "../ThemeButton";
import "./Header.css";
const Header = ({ onOpenDrawer }) => {
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
        <div className="flex items-center header-title">
          <h1 className="font-albert font-bold">Home</h1>
        </div>
      </div>
      <div className="flex items-center text-text-secondary">
        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
