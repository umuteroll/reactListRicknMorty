import React from "react";
import Header from '../Header/Header'
import Search from "../Search/Search";
import Footer from '../Footer/Footer'
import GridListing from "./components/GridListing";

function CharacterList() {
  return (
    <>

    <div className='d-flex flex-column justify-content-start align-items-center'> 
    <Header></Header>
    <Search></Search>
    <GridListing></GridListing>
    <Footer></Footer>
    </div>
    </>

   
  );
}

export default CharacterList;