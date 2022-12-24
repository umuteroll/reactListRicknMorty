import React, { useContext, useEffect } from "react";
import Card from './Card/Card'
import RnMContext from "../../../context/RnMContext";
import { useRouter } from 'next/router';

function GridListing() {
  const { characterState, getCharacterList } = useContext(RnMContext);
  const router = useRouter();
  const id = router.query.id

useEffect(() => {
  getCharacterList(id);
},[id])

if (Object.keys(characterState).length === 0) {
  return  <div>No one live in here!</div>;
}
if (!Array.isArray(characterState)){
  return    <div  className="row row-cols-3"> <Card key={characterState.id} characterProp={characterState}></Card></div>;
}

return (
    <>
<h1>{characterState[0].location.name} Character List</h1>
<section className={`mb-5 container`}>
    <div className="row row-cols-md-5 row-cols-xs-1"> 
    {characterState.map((item)=>(
       <Card key={item.id} characterProp={item}></Card>
   ))}
    </div>
</section>
    </>
  );
}

export default GridListing;