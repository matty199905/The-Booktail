import React, { useEffect } from 'react'
import { AllDrinksWrapper } from './allDrinksStyled'
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
<AllDrinksWrapper>

  <CocktailsContainer title={'Todos los Cocktails'}/>

  
</AllDrinksWrapper>
  )
}

export default AllDrinks
