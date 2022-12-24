import React,{ useState } from 'react';
import RnMContext from './RnMContext';
import service    from './Service';
import { getCharacterIdString } from '../helper/helper'

const RnMProvider = ({ children }) => {
  const [state, setState] = useState({});
  const [characterState, setCharacterState] = useState({});
  const [loading, setLoading] = useState(true);

    const getLocationList = async () => {
      setLoading(true);
      try{
        const response = await service.get('/location');
        setState(response.data.results);
      }
      catch{
        alert('Serviste Hata! İnternet bağlantınızı kontrol edin!');
      }
      finally{
        setLoading(false);
      }
    };
    const getFilteredLocationList = async (locationName) => {
      setLoading(true);
      try{
        const response = await service.get(`/location/?type=${locationName}`);
        setState(response.data.results);
      }
      catch{
        alert('Serviste Hata! İnternet bağlantınızı kontrol edin!');
      }
      finally{
        setLoading(false);
      }
     
    };  
    const getCharacterList = async (id) => {
      if(!id){
        return;
      }
      try{
        const response = await service.get(`/location/${id}`);
        const idList = getCharacterIdString(response.data.residents)
        if(idList==''){
          setCharacterState({});
          return;
        }
        const res = await service.get(`/character/${idList}`);
        setCharacterState(res.data)
      }
      catch (err){
       alert('Serviste Hata! İnternet bağlantınızı kontrol edin!');
      }
    };

    const getFilteredCharacter = (characterName) => {
      debugger;
      const filteredCharacter = [];
      filteredCharacter.push(characterState.filter(val =>  val.name.includes(characterName)));    
      setCharacterState(filteredCharacter);
    };  
    

  return (
    <RnMContext.Provider value={{ state, characterState, getLocationList, getCharacterList,getFilteredLocationList,getFilteredCharacter,loading }}>
      {children}
    </RnMContext.Provider>
  );
};

export default RnMProvider;
