import React, { useEffect } from 'react'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'
import { useSelectorTS } from '../../Redux/store'







const AllDrinks: React.FC = () => {


  return (


  <CocktailsContainer title={'Todos los Cocktails'}/>

  )
}

export default AllDrinks
