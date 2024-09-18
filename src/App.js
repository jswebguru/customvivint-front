import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    if (isDrawerOpen) {
      document.body.style.overflow = "unset";
    } else if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <div className="h-screen justify-center items-center bg-black">
        <Header onOpenDrawer={handleOpenDrawer} />
        <Navbar isOpen={isDrawerOpen} />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
