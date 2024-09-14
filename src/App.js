import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="h-screen justify-center items-center bg-black">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
