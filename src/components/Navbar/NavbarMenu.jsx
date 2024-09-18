import NavbarMenuItem from "./NavbarMenuItem";
import { MdHomeFilled, MdOutlineLeaderboard } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiWalletLine } from "react-icons/ri";
const NavbarMenu = () => {
  return (
    <div className="w-full fixed bottom-0 left-0 px-3 py-4 flex flex-row bg-black justify-center gap-1 ">
      <NavbarMenuItem isActive={true} menuItemIcon={<MdHomeFilled />} />
      <NavbarMenuItem
        menuItemTitle="Competitoins"
        menuItemIcon={<FaRegCompass />}
      />
      <NavbarMenuItem
        menuItemTitle="Leaderboard"
        menuItemIcon={<MdOutlineLeaderboard />}
      />
      <NavbarMenuItem menuItemTitle="Search/AI" menuItemIcon={<FiSearch />} />
      <NavbarMenuItem menuItemTitle="Pay" menuItemIcon={<RiWalletLine />} />
    </div>
  );
};

export default NavbarMenu;
