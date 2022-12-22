import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className='container mt-5 mb-5'>
      <input
        id="rick-and-morty-search"
        type="search"
        placeholder="Enter a Location"
        className= {`${styles.input} form-control form-control-lg shadow`  }
      />
    </div>
  );
}

export default Search;