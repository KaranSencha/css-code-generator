import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
function Header() {
  const [menuShow, setMenuShow] = useState(false);

  const changeMenu = () => {
    setMenuShow(!menuShow);
  };

   const location = useLocation();
   const isActive = (path) => {
     return location.pathname === path ? "active" : "";
  };
  
  return (
    <header className={`${menuShow ? styles.expandMenu : ""}`}>
      <div className={styles.menuIcon} onClick={changeMenu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      <div className={styles.logo}>CSS Generator</div>

      <div className={styles.menu}>
        <Link to="/" onClick={changeMenu} className={isActive("/")}>
          Box Shadow
        </Link>
        <Link to="/textshadow" onClick={changeMenu} className={isActive("/textshadow")}>
          Text Shadow
        </Link>
        <Link to="/textstyle" onClick={changeMenu} className={isActive("/textstyle")}>
          Text Style
        </Link>
        <Link to="/transform" onClick={changeMenu} className={isActive("/transform")}>
          Transform
        </Link>
        <Link to="/flexbox" onClick={changeMenu} className={isActive("/flexbox")}>
          Flexbox
        </Link>
        <Link to="/filter" onClick={changeMenu} className={isActive("/filter")}>
          Image Filter
        </Link>
      </div>
    </header>
  );
}

export default Header;
