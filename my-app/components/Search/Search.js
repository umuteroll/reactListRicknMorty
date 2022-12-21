import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.container}>
      <input
        id="rick-and-morty-search"
        type="search"
        placeholder="Enter a character name or episode title"
        className={styles.input}
      />
    </div>
  );
}

export default Search;