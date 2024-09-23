import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));

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
    <ThemeProvider>
      <Router>
        <div className="h-screen justify-center items-center bg-background-primary">
          <Header onOpenDrawer={handleOpenDrawer} />
          <Suspense>
            <Navbar isOpen={isDrawerOpen} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
