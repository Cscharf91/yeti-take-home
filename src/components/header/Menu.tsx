import React from "react";
import styles from "./Header.module.css";
import HamburgerMenu from "../../assets/images/hamburger-menu.svg";

const Menu = () => {
  return (
    <div className="flex-center">
      <span className={styles.menu}>Menu</span>
      <img
        src={HamburgerMenu}
        alt="hamburger menu"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Menu;
