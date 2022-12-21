import React from "react";
import Header from '../Header/Header'
import Search from "../Search/Search";
import Footer from '../Footer/Footer'
import styles from './LocationList.module.css'

function LocationList() {
  return (
    <div className={styles.container}> 
    <Header></Header>
    <Search></Search>
    <Search></Search>
    <Footer></Footer>
    </div>
    
   
  );
}

export default LocationList;