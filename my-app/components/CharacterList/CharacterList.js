import React from "react";
import Header from '../Header/Header'
import Search from "../Search/Search";
import GridListing from "./components/GridListing";

function CharacterList() {
  return (
    <>

    <div className='d-flex flex-column justify-content-start align-items-center'> 
    <Header></Header>
    <Search></Search>
    <GridListing></GridListing>
    </div>
    </>

   
  );
}

export default CharacterList;