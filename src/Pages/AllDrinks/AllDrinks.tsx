import React, { useEffect } from 'react'
import CocktailsContainer from '../../Components/Cocktails/CocktailsContainer/CocktailsContainer'
import { useSelectorTS } from '../../Redux/store'







const AllDrinks: React.FC = () => {

  const letter = useSelectorTS(state => state.Searcher.searchByLetter)
  const value = useSelectorTS(state => state.Searcher.searchValue)
  const liquor = useSelectorTS(state => state.Searcher.searchByLiquor)


  useEffect(() => {

    if (value && liquor == '') {
      window.scrollTo(0, 0)
    }

    if (letter !== '') {
      window.scrollTo(0, 0)
    }
  }, [letter, value, liquor])

  return (


    <CocktailsContainer title={'Todos los Cocktails'} />

  )
}

export default AllDrinks
