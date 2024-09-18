import "./Navbar.css";
import { MdHomeFilled } from "react-icons/md";

const NavbarMenuItem = ({ isActive, menuItemTitle = "Home", menuItemIcon }) => {
  return (
    <div
      className={`h-[38px] w-[73.8px] flex-col justify-start items-center gap-0.5 inline-flex navbar-menu-item-text ${
        isActive ? "active" : ""
      }`}
    >
      <div className="w-6 h-6 icon">
        {menuItemIcon ? menuItemIcon : <MdHomeFilled />}
      </div>
      <div className="text-center">{menuItemTitle}</div>
    </div>
  );
};

export default NavbarMenuItem;
