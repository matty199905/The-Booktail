import React from 'react'
import { ResponsiveMenuContainer } from '../navbarStyled'


type ResponsiveMenuData = {
    children: React.ReactNode
}

const ResponsiveMenu: React.FC<ResponsiveMenuData> = ({ children }) => {
    return (

            <ResponsiveMenuContainer
      >

                {children}

            </ResponsiveMenuContainer>
   
    )
}

export default ResponsiveMenu
