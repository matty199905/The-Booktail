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
  console.log(searchValue);




  return (
    <SearcherContainer>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/bySearch'); }}>
        <input
          type="search"
          placeholder='Ingrese su cocktail aqui...'
          onChange={(e) => {dispatch(setSearchValue(e.target.value)); navigate('/bySearch')}}
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
