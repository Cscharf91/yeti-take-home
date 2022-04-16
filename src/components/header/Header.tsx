import React from "react";
import Logo from "../../assets/images/logo-black.svg";
import styles from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={styles.container}>
      <a href="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </a>
      <Menu />
    </header>
  );
};

export default Header;
