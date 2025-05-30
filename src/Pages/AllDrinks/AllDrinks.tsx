import React from 'react'
import { AllDrinksWrapper } from './allDrinksStyled'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'







const AllDrinks: React.FC = () => {


  return (
<AllDrinksWrapper>

  <CocktailsContainer title={'Todos los Cocktails'}/>

  
</AllDrinksWrapper>
  )
}

export default AllDrinks
