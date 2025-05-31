import React from 'react'
import { SearcherContainer } from './searcherStyled'
import { useSelectorTS, type AppDispatch } from '../../Redux/store'
import { useLocation, useNavigate } from 'react-router-dom';
import { setSearchValue } from '../../Redux/Searcher/searcherSlice';
import { useDispatch } from 'react-redux';

const Searcher: React.FC = () => {

  const { searchValue } = useSelectorTS(state => state.Searcher);
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  dispatch(setSearchValue(e.target.value)); 
  if(location.pathname !== '/') navigate('/bySearch')
}


  return (
    <SearcherContainer>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/bySearch'); }}>
        <input
          type="search"
          placeholder='Ingrese su cocktail aqui...'
          onChange={(e) => handleOnChange(e)}
          value={searchValue}
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
