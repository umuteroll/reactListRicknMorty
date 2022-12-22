import React from "react";
import styles from "./Row.module.css";
import Link from 'next/link';

function Row({locationProp}) {

  return (
    <div className="d-flex flex-row justify-content-between shadow border border-2 rounded m-2" >
      <div className="d-flex flex-row justify-content-start m-1">
        <img src="portalNew.png" className={styles.icon}></img>
        <div className="d-flex flex-column ms-3">
          <span> <b> Type : </b> {locationProp.type} </span>
          <span> <b> Dimension : </b>  {locationProp.dimension} </span>
          <span> <b> Residents : </b> {locationProp.residents.length} </span>
        </div>
      </div>
      <div className="d-flex align-items-center"> 
      <Link href="/some-route">
      <input className="btn btn-primary shadow m-1 me-3 h-10" type="button" value="Detaya Git!"/>
      </Link>
      </div>

    </div>

  );
}

export default Row;