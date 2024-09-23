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
        "https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/fir-9-tutorial-fe4c7.appspot.com/o/data.json?alt=media&token=b4435724-7c3c-4b76-8bef-5e90277b0ee0"
      );
      const data = response.json();
      console.log(data);
      data
        .then((realData) => setAllDatas(realData))
        .catch((error) => console.log(error));
    };

    const getSecondDataFunction = async () => {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://res.cloudinary.com/dmlrqezyo/raw/upload/v1727103735/data_gin003.json"
      );
      const data = response.json();
      console.log(data);
      data
        .then((realData) => console.log(realData))
        .catch((error) => console.log(error));
    };

    return () => {
      getDataFunction();
      getSecondDataFunction();
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
