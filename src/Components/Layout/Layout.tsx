import React from 'react'
import { Overlay, LayoutWrapper } from './layoutStyled'
import { useLocation } from 'react-router-dom'



type LayoutData = {
  children: React.ReactNode
}


const Layout: React.FC<LayoutData> = ({ children }) => {
  const location = useLocation()
  const dinamicPage = location.state?.page
const layoutWallpaper = location.pathname !== '/' && location.state?.page !== 'dinamicPage' 
const homeWallpaper = location.pathname === '/'

  return (
    
    <LayoutWrapper 
    dinamicPage={dinamicPage}
    layoutWallpaper={layoutWallpaper}
    homeWallpaper ={homeWallpaper}>
      {
        location.pathname !== '/' && location.state?.page !== 'dinamicPage' &&
        <Overlay dinamicPage={dinamicPage} />
      }

      {children}

    </LayoutWrapper>
  )
}

export default Layout
