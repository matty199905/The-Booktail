import React from 'react'
import { LinksContainer, LogoContainer, NavbarContainer, NavbarLink } from './navbarStyled'
import Logo from '../../Imgs/Logo/Logo.png'
import Searcher from '../Searcher/Searcher'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'



const Navbar: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()





  return (

    <AnimatePresence>

      {

    <NavbarContainer
    initial={{translateY: -150}}
  animate={{translateY: 0}}
  transition={{ type:'spring',  damping: 20 }}>

      <LogoContainer>
        <img src={Logo} alt="The Booktail" />
        <span onClick={() => navigate('/')}>The Booktail</span>
      </LogoContainer>


      <LinksContainer>
        <ul>
          <li><NavbarLink to='/'>Home</NavbarLink></li>
          {
            location.pathname !== '/licores' &&

            <li><NavbarLink to='/licores'>Licores</NavbarLink></li>
          }
          {
            location.pathname !== '/cocktails' &&

            <li><NavbarLink to='/cocktails'>Cocktails</NavbarLink></li>
          }
          

        </ul>
          <Searcher />

      </LinksContainer>

    </NavbarContainer>
}
    </AnimatePresence>
  )
}

export default Navbar
