import React from 'react'
import { HomeWrapper, SearchBy_Container, SearchBy_Wrapper, Title } from './homeStyled'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router'
import Searcher from '../../Components/Searcher/Searcher'

const Home: React.FC = () => {

  const navigate = useNavigate()


  return (
    <HomeWrapper>

      <Title>The BookTail</Title>

      <SearchBy_Wrapper>

        <h2>Busque su Cocktail por...</h2>



        <SearchBy_Container>

          <ul>
            <li><button onClick={() => navigate('licores')}>Licores</button></li>
            
            <li><button onClick={() => navigate('cocktails')}>Todos los Cocktails</button></li>

            <li><Searcher /></li>
          </ul>


        </SearchBy_Container>

      </SearchBy_Wrapper>

      <Footer />
    </HomeWrapper>
  )
}

export default Home
