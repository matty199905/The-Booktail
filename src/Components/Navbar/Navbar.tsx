import React, { useState } from 'react'
import { LinksContainer, LogoContainer, NavbarContainer, NavbarLink, NavDivider, ResponsiveMenuContainer, ResponsiveMenuIcon } from './navbarStyled'
import Logo from '../../Imgs/Logo/Logo.png'
import Searcher from '../Searcher/Searcher'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { resetValues } from '../../Redux/Searcher/searcherSlice'
import type { AppDispatch } from '../../Redux/store'
import { useDispatch } from 'react-redux'
import { CgMenu } from "react-icons/cg";



const Navbar: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch<AppDispatch>()
  const [openMenu, setOpenMenu] = useState(false)





  return (

    <AnimatePresence>

      <NavbarContainer
        initial={{ translateY: -150 }}
        animate={{ translateY: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        key='navbar'>

        <LogoContainer>
          <img src={Logo} alt="The Booktail" />
          <span onClick={() => navigate('/')}>The Booktail</span>
        </LogoContainer>


        <LinksContainer>
          <ul>
            <li><NavbarLink to='/' onClick={() => dispatch(resetValues())}>Home</NavbarLink></li>
            {
              location.pathname !== '/licores' &&

              <li><NavbarLink to='/licores' onClick={() => dispatch(resetValues())}>Licores</NavbarLink></li>
            }
            {
              location.pathname !== '/cocktails' &&

              <li><NavbarLink to='/cocktails' onClick={() => dispatch(resetValues())}>Cocktails</NavbarLink></li>
            }


          </ul>
          <Searcher navbar={true} />

        </LinksContainer>


        {/* REsponsiveMenu */}

        <ResponsiveMenuIcon onClick={() => setOpenMenu(!openMenu)}>
          <CgMenu />
        </ResponsiveMenuIcon>


      </NavbarContainer>

      {
        openMenu &&

        <ResponsiveMenuContainer
          initial={{ translateY: -350 }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -450 }}
          transition={{ type: 'spring', damping: 20 }}
          key='responsive'>

          <ul>
            <li><NavbarLink to='/' onClick={() => dispatch(resetValues())}>Home</NavbarLink></li>
<NavDivider/>
            {
              location.pathname !== '/licores' &&
<>
              <li><NavbarLink to='/licores' onClick={() => dispatch(resetValues())}>Licores</NavbarLink></li>
              <NavDivider/>
              </>
            }
            {
              location.pathname !== '/cocktails' &&

              <>
              <li><NavbarLink to='/cocktails' onClick={() => dispatch(resetValues())}>Cocktails</NavbarLink></li>
              <NavDivider/>
              </>
            }

           <li><Searcher onKeyDown={(e)=>{if(e.key === 'Enter'){setOpenMenu(false)}}}/></li>

          </ul>

        </ResponsiveMenuContainer>

      }


    </AnimatePresence>
  )

}

export default Navbar
