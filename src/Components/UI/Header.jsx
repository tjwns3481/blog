import React from "react";
import HeaderMenu from "./HeaderMenu";
import Wrap from "./Wrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title-wrap">
        <h3 className="header-sub">This area will be main text area</h3>
        <h1 className="header-title">Taylor's Blog</h1>
      </div>
      <div className="header-banner-wrap"></div>
      <Wrap className="header-menu-wrap">
        <HeaderMenu />
      </Wrap>
    </div>
  );
};

export default Header;
