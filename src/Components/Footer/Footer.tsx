import React, { useState } from 'react'
import { FooterWrapper } from './footerStyled'
import { useSelectorTS, type AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { setLetter } from '../../Redux/Searcher/searcherSlice';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {

  const letter = useSelectorTS(state => state.Searcher.searchByLetter);
  const [active, setActive] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const letters = [
    ..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  ];



  return (
    <FooterWrapper>
      <span>Búsqueda por Letra</span>
      <ul>
        {letters.map((item) => (
          <li key={item}>
            <button
              onClick={() => { dispatch(setLetter(item)); setActive(item); navigate('/cocktails') }}
                className={(active === item && letter !== '') ? 'active' : ''}>
              {item}
            </button>
          </li>
        ))}
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
