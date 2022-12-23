import { useState, useEffect } from 'react';
import RnMContext from './RnMContext';
import service    from './Service';
import { getCharacterIdString } from '../helper/helper'

const RnMProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [state2, setState2] = useState({});
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
    
    const getCharacterList = async () => {
      setLoading(true);
      try{
        // burası parametre olarak urldeki parametreyi alır location idsi 
        const response = await service.get(`/location/${location}`);
        const idList = getCharacterIdString(response.data.residents)
        const res = await service.get(`/character/${idList}`);

        //burada helper yardımıyla gelen arrayi 
        setState2(res.data)
      }
      catch{
       // error göster alert falan
      }
      finally{
        setLoading(false);
      }
     
    };
    const updateSelectedLocation = (newLocation) => {
      setLocation(newLocation);
      setLoading(true);

    };

  return (
    <RnMContext.Provider value={{ state, state2, getLocationList, getCharacterList, updateSelectedLocation, loading }}>
      {children}
    </RnMContext.Provider>
  );
};

export default RnMProvider;
