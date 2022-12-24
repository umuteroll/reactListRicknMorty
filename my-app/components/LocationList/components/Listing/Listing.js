import React,{ useContext, useEffect } from "react";
import styles from "./Listing.module.css";
import Row from '../Row/Row'
import RnMContext from "../../../../context/RnMContext";
function Listing() {

  const { state, getLocationList, loading } = useContext(RnMContext);
  useEffect(() => {
    getLocationList();
  }, []);

  if (loading) {
    return <div> Loading...</div>;
  }
  
  return (
    <>
      <h1 className={styles.header}>List of Locations</h1>
      <section className={`mb-5 container`}>
        {state.map((item) => (
          <Row key={item.id} locationProp={item}></Row>
        ))}
      </section>
    </>
  );
}
export default Listing;



