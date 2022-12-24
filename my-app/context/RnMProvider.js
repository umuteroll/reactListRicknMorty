import React,{ useState, useEffect } from 'react';
import RnMContext from './RnMContext';
import service    from './Service';
import { getCharacterIdString } from '../helper/helper'

const RnMProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [characterState, setCharacterState] = useState({});
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();


    const getLocationList = async () => {
      setLoading(true);
      try{
        const response = await service.get('/location');
        setState(response.data.results);
      }
      catch{
       // error göster alert falan
      }
      finally{
        setLoading(false);
      }
     
    };
    const getFilteredLocationList = async (locationName) => {
      setLoading(true);
      try{
        const response = await service.get(`/location/?name=${locationName}`);
        setState(response.data.results);
      }
      catch{
       // error göster alert falan
      }
      finally{
        setLoading(false);
      }
     
    };
    
    const getCharacterList = async (id) => {
      if(!id){
        console.log('id boş');
        return;
      }
      try{
        // burası parametre olarak urldeki parametreyi alır location idsi 
        const response = await service.get(`/location/${id}`);
        const idList = getCharacterIdString(response.data.residents)
        if(idList==''){
          setCharacterState({});
          return;
        }
        const res = await service.get(`/character/${idList}`);
        //burada helper yardımıyla gelen arrayi 
        setCharacterState(res.data)
      }
      catch (err){
       // error göster alert falan
       console.log(err);
      }
      finally{
      }
     
    };
  

  return (
    <RnMContext.Provider value={{ state, characterState, getLocationList, getCharacterList, getFilteredLocationList,loading }}>
      {children}
    </RnMContext.Provider>
  );
};

export default RnMProvider;
