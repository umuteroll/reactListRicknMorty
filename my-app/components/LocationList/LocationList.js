import React from "react";
import Header from '../Header/Header'
import Search from "../Search/Search";
import Listing from "./components/Listing/Listing";
import Footer from '../Footer/Footer'
import styles from './LocationList.module.css'

function LocationList() {
  return (
    <div className={styles.container}> 
    <Header></Header>
    <Search></Search>
    <Listing></Listing>
    <Footer></Footer>
    </div>
    
   
  );
}

export default LocationList;