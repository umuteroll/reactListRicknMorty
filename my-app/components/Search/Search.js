import React  from 'react';
import styles from "./Search.module.css";

const getFilteredResult = () => {
  if(prop == 'Location'){
    getFilteredLocationList(value);
  }
  else{
    getFilteredCharacter(value);
  }
}
const handleChange = (event) => {
}

function Search() {
  return (
    <div className='container mt-5 mb-5 d-flex flex-row'>
      <input
        id="rick-and-morty-search"
        type="search"
        placeholder="Enter a Location"
        className= {`${styles.input} form-control form-control-lg shadow`  }
        onChange={handleChange}
      />
      <input className="btn btn-primary shadow m-1 me-3 h-10" type="button" value="Bul" />

    </div>
  );
}

export default Search;