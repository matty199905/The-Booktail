import React, { useEffect } from 'react'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'
import { useSelectorTS } from '../../Redux/store'







const AllDrinks: React.FC = () => {

  const letter = useSelectorTS(state => state.Searcher.searchByLetter)

  useEffect(()=>{
    if(letter !== ''){
      window.scrollTo(0,200)
    }
  },[letter])

  return (


  <CocktailsContainer title={'Todos los Cocktails'}/>

  )
}

export default AllDrinks
