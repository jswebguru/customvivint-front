import { useEffect, useState } from "react";
import { SectionViewRow } from "../SectionView";
import ReportList from "../ReportList";
import NavbarMenu from "./NavbarMenu";
import SearchBar from "./SearchBar";
import apiClient from "../../lib/api-client";
import "./Navbar.css";
const Navbar = ({ isOpen, onClose }) => {
  const [sidebarData, setSidebarData] = useState(null);

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const response = await apiClient.get("/sidebar");
        setSidebarData(response.sidebar_items);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
      }
    };

    fetchSidebarData();
  }, []);

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-content">
        <SearchBar />
        <SectionViewRow
          title="Favorites"
          buttonTitle="See All"
          isNavbar={true}
        />
        {sidebarData ? (
          <ReportList reports={sidebarData} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="navbar-menu">
        <NavbarMenu />
      </div>
    </div>
  );
};

export default Navbar;
