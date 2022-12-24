import React , { useState, useContext } from 'react';
import styles from "./Search.module.css";
import RnMContext from '../../context/RnMContext'

function Search(prop) {
const { getFilteredLocationList, getFilteredCharacter } = useContext(RnMContext);
const [value, setValue] = useState('');
const getFilteredResult = () => {
  if(prop.prop == 'Location'){
    debugger;
    getFilteredLocationList(value);
  }
  else{
    getFilteredCharacter(value);
  }
}
const handleChange = (event) => {
  setValue(event.target.value);
}
  return (
    <div className='container mt-5 mb-5 d-flex flex-row'>
      <input
        id="rick-and-morty-search"
        type="search"
        placeholder="Filter"
        className= {`${styles.input} form-control form-control-lg shadow`  }
        onChange={handleChange}
        value={value}
      />
      <input className="btn btn-primary shadow m-1 me-3 h-10" type="button" value="Bul" onClick={getFilteredResult} />

    </div>
  );
}

export default Search;