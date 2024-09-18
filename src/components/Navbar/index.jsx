import { SectionViewRow } from "../SectionView";
import ReportList from "../ReportList";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
import "./Navbar.css";
const Navbar = ({ isOpen, onClose }) => {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-content">
        <SearchBar />
        <SectionViewRow
          title="Favorites"
          buttonTitle="See All"
          isNavbar={true}
        />
        <ReportList />
      </div>
      <div className="navbar-menu">
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
