import React, { useState } from 'react'
import { FooterWrapper, LettersContainer } from './footerStyled'
import { useSelectorTS, type AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { setLetter } from '../../Redux/Searcher/searcherSlice';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {

  const letter = useSelectorTS(state => state.Searcher.searchByLetter);
  const [activeLetter, setActiveLetter] = useState('')
  const [hideLetters, setHideLetters] = useState(true)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const letters = [
    ..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  ];




  return (
  <FooterWrapper hidden={hideLetters}>
      <button className='footer_title' onClick={() => setHideLetters(!hideLetters)}>
        Búsqueda por Letra
      </button>
      <LettersContainer
        animate={{ y: hideLetters ? 200 : 0}}
        initial={false}
        transition={{ type: 'spring', damping: 20 }}
      >
        <ul>
          {letters.map((item) => (
            <li key={item}>
              <button
                onClick={() => { dispatch(setLetter(item)); setActiveLetter(item); navigate('/cocktails'); setHideLetters(true) }}
                className={(activeLetter === item && letter !== '') ? 'active' : ''}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </LettersContainer>
    </FooterWrapper>
  );
};

export default Footer;
