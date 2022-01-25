import React from "react";
import Logo from "./logo.png";

export const Header = ({ setTab }) => {
  return (
    <div className="header">
      <div className="header__top">

      </div>
      <img src={Logo} alt="" className="header__logo" />
      <p className="header__menu">
        <a
          onClick={() => {
            setTab(0);
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            setTab(1);
          }}
        >
          about us
        </a>
        <a
          onClick={() => {
            setTab(2);
          }}
        >
          contact us
        </a>
        <a
          onClick={() => {
            setTab(3);
          }}
        >
          slideshow
          </a>  
      </p>
    </div>
  );
};
export default Header;