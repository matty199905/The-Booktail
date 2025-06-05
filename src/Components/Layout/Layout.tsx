import React from 'react'
import { BluredLayout, LayoutWrapper } from './layoutStyled'
import { useLocation } from 'react-router-dom'



type LayoutData = {
  children: React.ReactNode
}


const Layout: React.FC<LayoutData> = ({ children }) => {
  const location = useLocation()
  const dinamicPage = location.state?.page


  return (
    <LayoutWrapper dinamicPage={dinamicPage}>
      {
        location.pathname !== '/' &&
        <BluredLayout dinamicPage={dinamicPage} />
      }

      {children}

    </LayoutWrapper>
  )
}

export default Layout
