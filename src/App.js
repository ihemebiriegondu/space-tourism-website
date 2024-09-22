import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import MobileOffcanvas from "./components/mobileOffcanvas";
import Home from "./home";
import Destination from "./destination";
import Crew from "./crew";
import Tech from "./tech";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [allDatas, setAllDatas] = useState([]);

  useEffect(() => {
    const getDataFunction = async () => {
      const response = await fetch(
        "https://res.cloudinary.com/dmlrqezyo/raw/upload/v1727022552/data_zmy3rz.json"
      );
      const data = response.json();
      data
        .then((realData) => setAllDatas(realData))
        .catch((error) => console.log(error));
    };
    return () => {
      getDataFunction();
    };
  }, []);

  return (
    <BrowserRouter>
      <Nav setShowNavbar={setShowNavbar} />
      <MobileOffcanvas showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination destinationData={allDatas && allDatas.destinations} />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
