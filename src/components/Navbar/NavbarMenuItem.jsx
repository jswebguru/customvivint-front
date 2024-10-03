import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdHomeFilled } from "react-icons/md";

const NavbarMenuItem = ({
  isActive,
  menuItemTitle = "Home",
  menuItemIcon,
  activeItem,
  setActiveItem,
  link,
}) => {
  const navigate = useNavigate();

  const handleMenuItemClick = () => {
    setActiveItem(link);
    navigate(link);
  };

  return (
    <button
      className={`h-[38px] w-[73.8px] flex-col justify-start items-center gap-0.5 inline-flex navbar-menu-item-text ${
        activeItem === link ? "active" : ""
      }`}
      onClick={handleMenuItemClick}
    >
      <div className="w-6 h-6 icon">
        {menuItemIcon ? menuItemIcon : <MdHomeFilled />}
      </div>
      <div className="text-center">{menuItemTitle}</div>
    </button>
  );
};

export default NavbarMenuItem;
