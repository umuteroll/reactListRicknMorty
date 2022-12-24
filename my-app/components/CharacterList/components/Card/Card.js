import React from "react";
import styles from './Card.module.css'
function Card({characterProp}) {
 const enumAlive = 'Alive';
 const backgroundColor = characterProp.status == enumAlive ? 'bg-success' : 'bg-danger';

  return (
    <>
<div className={`${styles.cardWidth} col card shadow m-1`  }>
  <img src={characterProp.image} className="card-img-top mt-2" alt="..."/>
  <div className="card-body">
    <h5 className="card-title d-flex flex-row align-items-center">
    {characterProp.name}
    <span className={`${styles.circle} ${backgroundColor}`  }> </span> 
   
    </h5>
    <div className="m-1 d-flex flex-column">
      <span> <b>Spicies :</b>  {characterProp.species} </span> 
      <span> <b>Type :</b> {characterProp.type} </span> 
      <span> <b>Gender : </b> {characterProp.gender} </span> 
      <span><b> Origin :</b> {characterProp.origin.name} </span> 

       </div>
     </div>
</div>

    </>

  );

}

export default Card;
