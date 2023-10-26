import React from "react";

const HeaderMenu = () => {
  const menuData = [{ title: "menu1" }, { title: "menu2" }, { title: "menu3" }, { title: "menu4" }];
  return (
    <ul className="header-list">
      {menuData.map((it, idx) => {
        return (
          <li key={`header-menu-${idx}`}>
            <a href="#none">{menuData[idx].title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderMenu;
