import { useState, useEffect } from 'react';
import RnMContext from './RnMContext';
import service    from './Service';

const RnMProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

    const getLocationList = async () => {
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
      try{
        // burası parametre olarak urldeki parametreyi alır location idsi 
        const response = await service.get('/location');
        const lastNumbers = repsonse.data.results.residents.map(str => str.split("/").pop());
        const res = await service.get('/character/id');

        //burada helper yardımıyla gelen arrayi 
        setState(response.data.results)
      }
      catch{
       // error göster alert falan
      }
      finally{
        setLoading(false);
      }
     
    };

  return (
    <RnMContext.Provider value={{ state, getLocationList, getCharacterList, loading }}>
      {children}
    </RnMContext.Provider>
  );
};

export default RnMProvider;
