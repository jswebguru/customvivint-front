import { SectionViewRow } from "../SectionView";
import ReportList from "../ReportList";
import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
const Navbar = ({ isOpen, onClose }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <SearchBar />
      <SectionViewRow title="Favorites" buttonTitle="See All" isNavbar={true} />
      <ReportList />
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
