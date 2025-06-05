import React, { useEffect } from 'react'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'
import { useSelectorTS } from '../../Redux/store';
import { useNavigate } from 'react-router-dom';

const BySearch: React.FC = () => {

   const { searchValue } = useSelectorTS(state => state.Searcher);
   const navigate = useNavigate()


    useEffect(()=>{

      if(searchValue === ''){
        navigate('/cocktails')
      }
           window.scrollTo(0,0)
    },[searchValue])

  const seachedValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);


  
  return (
    <CocktailsContainer title={`Resultados de: "${seachedValue}"`} />
  )
}

export default BySearch
