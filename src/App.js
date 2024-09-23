import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import MobileOffcanvas from "./components/mobileOffcanvas";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Tech from "./pages/tech";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [allDatas, setAllDatas] = useState([]);

  useEffect(() => {
    const getDataFunction = async () => {
      const response = await fetch(
        "https://res.cloudinary.com/dmlrqezyo/raw/upload/v1727103735/data_gin003.json",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      const data = response.json();
      console.log(response)
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
        <Route
          path="/destinations"
          element={
            <Destination destinationData={allDatas && allDatas.destinations} />
          }
        />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Tech />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
