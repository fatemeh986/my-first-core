import React from "react";
import Home from "../pages/home";
import Aboutus from "../pages/aboutus";
import Contactus from "../pages/contactus";
import Slider from "../pages/slider";

const Main = ({ tab }) => {
  return (
    <div className="main">
      {tab === 0 && <Home />}
      {tab === 1 && <Aboutus />}
      {tab === 2 && <Contactus />}
      {tab === 3 && <Slider />}
    </div>
  );
};
export default Main;
