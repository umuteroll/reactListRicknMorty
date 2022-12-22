import React from "react";
import styles from "./Listing.module.css";
import Row    from '../Row/Row'
function Listing() {
  return (
    <>
<h1 className={styles.header}>List of Locations</h1>
<section className={`mb-5 container`}>
  <div className="card">
    <div className="card-body shadow"> 
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    <Row></Row>
    </div>
  </div>
</section>


    </>

  );
}

export default Listing;