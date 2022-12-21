import React from "react";
import styles from "./Listing.module.css";

function Listing() {
  return (
    <div className={styles.container}>
      <p>Locations</p>
      <div className={styles.listHeader}>
        <span>type</span>
        <span>dimension</span>
        <span>resident</span>
      </div>
      <hr />
      <div className={styles.listRow}>
        <div className={styles.row}>
          <img src="portal.png" className={styles.avatar}></img>
          <div className={styles.rowInfo}>
            <span>planet</span>
            <span>c-137</span>
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;