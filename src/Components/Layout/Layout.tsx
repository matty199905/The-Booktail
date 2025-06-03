import React from 'react'
import { LayoutWrapper } from './layoutStyled'
import { useLocation } from 'react-router-dom'
import LayoutImg from '../../Imgs/Layout/Layout.avif'


type LayoutData = {
  children: React.ReactNode
}


const Layout: React.FC<LayoutData> = ({children}) => {
const location = useLocation()

const dinamicPage = location.state?.page


  return (
    <LayoutWrapper dinamicPage={dinamicPage} style={{ backgroundImage: `url(${LayoutImg})` }}>
      {children}
    </LayoutWrapper>
  )
}

export default Layout
