import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const NavbarContainer = styled(motion.nav)`
position: fixed;
top: 0px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(40, 40, 40);
height: 110px;
width: 100vw;
padding: 0 30px ;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
border-bottom: 1px solid rgba(255, 255, 255, 0.52);
box-shadow: 0 0 10px black;
`

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
img {
   width: 90px; 
}
span{
    align-self: flex-end;
    margin: 0 0 15px -10px;
    font-size: 20px;
    font-weight: 600;
         transition: all 0.8s ease;
    &:hover{
        cursor: pointer;
          color: orange;
               transition: all 0.8s ease;
      }
}
`

export const LinksContainer = styled.ul`
display: flex;
justify-content: center;
align-items: center;

ul{
   display: flex;
justify-content: center;
align-items: center; 
gap: 25px;
margin: 30px 30px 0 0;
li{
      
        &:hover{
            cursor: pointer;
            
            
        }
    }
}
`

export const NavbarLink = styled(NavLink)`
font-size: 17px;
transition: all 0.6s ease;
&:hover{
          color: orange;
          transition: all 0.6s ease;
      }
`