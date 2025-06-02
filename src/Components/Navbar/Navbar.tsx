import React from 'react'
import { LinksContainer, LogoContainer, NavbarContainer, NavbarLink } from './navbarStyled'
import Logo from '../../Imgs/Logo/Logo.png'
import Searcher from '../Searcher/Searcher'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { resetValues } from '../../Redux/Searcher/searcherSlice'
import type { AppDispatch } from '../../Redux/store'
import { useDispatch } from 'react-redux'



const Navbar: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()





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
          <li><NavbarLink to='/' onClick={()=> dispatch(resetValues())}>Home</NavbarLink></li>
          {
            location.pathname !== '/licores' &&

            <li><NavbarLink to='/licores' onClick={()=> dispatch(resetValues())}>Licores</NavbarLink></li>
          }
          {
            location.pathname !== '/cocktails' &&

            <li><NavbarLink to='/cocktails' onClick={()=> dispatch(resetValues())}>Cocktails</NavbarLink></li>
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
