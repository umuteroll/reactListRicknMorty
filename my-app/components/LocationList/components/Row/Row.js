import React from "react";
import styles from "./Row.module.css";

function Row(props) {
  return (
    <div className="d-flex flex-row justify-content-between shadow border border-2 rounded m-2" >
      <div className="d-flex flex-row justify-content-start m-1">
        <img src="portalNew.png" className={styles.icon}></img>
        <div className="d-flex flex-column ms-3">
          <span> <b> Type : </b> Planet </span>
          <span> <b> Dimension : </b>  asdasd </span>
          <span> <b> Resident : </b> 10 </span>
        </div>
      </div>
      <div className="d-flex align-items-center"> 
      <input class="btn btn-primary shadow m-1 me-3 h-10" type="button" value="Detaya Git!"/>
      </div>

    </div>

  );
}

export default Row;