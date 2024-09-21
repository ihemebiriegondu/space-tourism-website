import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import MobileOffcanvas from "./components/mobileOffcanvas";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Tech from "./pages/tech";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <BrowserRouter>
      <Nav setShowNavbar={setShowNavbar} />
      <MobileOffcanvas showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
