import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.navbar}>
      <img src="headerrick.png" className={styles.banner}></img>
   </div>
  );
}
export default Header;