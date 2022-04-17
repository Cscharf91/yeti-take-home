import React, { useState } from "react";
import styles from "./Header.module.css";
import HamburgerMenu from "../../assets/images/hamburger-menu.svg";

const links = [
  { href: "#about", text: "About" },
  { href: "#vision", text: "Our Vision" },
  { href: "#values", text: "Our Values" },
];

const Menu = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const handleToggle = () => setNavOpen((prev) => !prev);
  return (
    <>
      <div className="flex-center" onClick={handleToggle} data-testid="menu">
        <span className={styles.menu}>Menu</span>
        <img
          src={HamburgerMenu}
          alt="hamburger menu"
          className="cursor-pointer"
        />
      </div>

      <ul className={`menu ${navOpen ? "show-menu" : ""}`}>
        <div className="flex-end">
          <span className={styles.xBtn} onClick={handleToggle}>
            X
          </span>
        </div>
        {links.map((link) => (
          <li onClick={handleToggle} key={link.text}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
