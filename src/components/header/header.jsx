import React from "react";
import Logo from "./logo.png"

export const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className="header__logo"/>
      <p className="header__menu">
        <a href="#fatemeh">fatemeh</a>
        <a href="#aboutus">about us</a>
        <a href="#contactus">contact us</a>
        </p>
    </div>
  );
};
export default Header;
