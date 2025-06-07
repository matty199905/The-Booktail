import React from 'react'
import { SearcherContainer } from './searcherStyled'
import { useSelectorTS, type AppDispatch } from '../../Redux/store'
import { useLocation, useNavigate } from 'react-router-dom';
import { setSearchValue } from '../../Redux/Searcher/searcherSlice';
import { useDispatch } from 'react-redux';



export type SearcherProps = {
  navbar?: boolean,
  cocktailsWrapper?: boolean,
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

const Searcher: React.FC<SearcherProps> = ({navbar, cocktailsWrapper, onKeyDown}) => {

  const { searchValue } = useSelectorTS(state => state.Searcher);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setSearchValue(e.target.value)); 
}

const handleOnSubmit = (e:  React.FormEvent<HTMLFormElement>) => { 
  e.preventDefault(); 
  if(searchValue === '') {return}
  navigate('/cocktails'); }




  return (
    <SearcherContainer 
    navbar={navbar}
    cocktailsWrapper={cocktailsWrapper}>

      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="search"
          placeholder='Ingrese su cocktail aqui...'
          onChange={(e) => handleOnChange(e)}
          value={searchValue}
          onKeyDown={onKeyDown}
        />
        {
          location.pathname === '/' &&
          <button type='submit'>Buscar</button>
        }
      </form>

    </SearcherContainer>
  )
}

export default Searcher
