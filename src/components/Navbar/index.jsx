import ReportList from "../ReportList";
import { SectionViewRow } from "../SectionView";
import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
const Navbar = ({ isOpen, onClose }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <SearchBar />
      <SectionViewRow title="Favorites" buttonTitle="See All" isNavbar={true} />

      <NavbarMenu />
    </div>
  );
};

export default Navbar;
