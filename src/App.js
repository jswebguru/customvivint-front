import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const apiUrl = process.env.API_URL;

  console.log(`API URL: ${apiUrl}`);
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
        <AuthProvider>
          <div className="h-screen justify-center items-center bg-background-primary">
            <Header onOpenDrawer={handleOpenDrawer} />
            <Suspense>
              <Navbar isOpen={isDrawerOpen} />
            </Suspense>
            <Suspense>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
