import React, { useEffect } from 'react'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'
import { useSelectorTS } from '../../Redux/store';

const BySearch: React.FC = () => {

   const { searchValue } = useSelectorTS(state => state.Searcher);
   


    useEffect(()=>{
      if(searchValue){
        window.scrollTo(0,200)
      }
    },[])

  const seachedValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);


  
  return (
    <CocktailsContainer title={`Resultados de: "${seachedValue}"`} />
  )
}

export default BySearch
