import React from "react";
import Header from '../Header/Header'
import Search from "../Search/Search";
import Listing from "./components/Listing/Listing";
import styles from './LocationList.module.css'

function LocationList() {
  return (
    <>
    <div className={styles.container}> 
      <Header></Header>
      <Search prop='Location'></Search>
      <Listing></Listing>
    </div>
    </>
  );
}

export default LocationList;