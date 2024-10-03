import { useState } from "react";
import NavbarMenuItem from "./NavbarMenuItem";
import { MdHomeFilled, MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiWalletLine } from "react-icons/ri";

const NavbarMenu = () => {
  const [activeItem, setActiveItem] = useState("/");

  // Define your menu items in an array
  const menuItems = [
    { title: "Home", icon: <MdHomeFilled />, link: "/" },
    { title: "Competitions", icon: <FaRegCompass />, link: "/competitions" },
    {
      title: "Leaderboard",
      icon: <MdOutlineLeaderboard />,
      link: "/leaderboard",
    },
    { title: "Search/AI", icon: <FiSearch />, link: "/search" },
    { title: "Pay", icon: <RiWalletLine />, link: "/payment" },
  ];

  return (
    <div className="w-full fixed bottom-0 left-0 px-3 py-4 flex flex-row bg-background-primary justify-center gap-1 ">
      {menuItems.map(({ title, icon, link }) => (
        <NavbarMenuItem
          key={link} // Use link as key since it's unique for each item
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          menuItemTitle={title}
          menuItemIcon={icon}
          link={link}
        />
      ))}
    </div>
  );
};

export default NavbarMenu;
