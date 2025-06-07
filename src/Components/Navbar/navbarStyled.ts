import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const NavbarContainer = styled(motion.nav)`
position: fixed;
top: 0px;
display: flex;
justify-content: space-between;
align-items: flex-end;
background-color: rgb(40, 40, 40);
height: 110px;
width: 100vw;
padding: 0 30px 10px 30px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
border-bottom: 1px solid rgba(255, 255, 255, 0.52);
box-shadow:inset 0 0 5px black;
background: linear-gradient(to bottom, rgb(24, 27, 58), rgb(41, 44, 86),var(--UI-Primary));
z-index: 4;
`

export const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
img {
   width: 90px; 
   @media(max-width:850px){
   width: 70px;
   margin-left: -10px;
}
}
span{
    align-self: flex-end;
    font-family: serif;
    margin: 0 30px 15px -10px;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.8s ease;
cursor: pointer;
    @media(max-width:502px){
      margin-bottom: 10px;
      font-size: 17px;
    }
     @media(max-width:400px){
width: 100px;
    }
}
`

export const LinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

ul{
   display: flex;
justify-content: center;
align-items: center; 
gap: 25px;
margin: 30px 30px 10px 0;
    @media(max-width:850px){
      display: none;
    }
li{

            cursor: pointer;
    }
}
`

export const NavbarLink = styled(NavLink)`
font-size: 17px;
transition: all 0.6s ease;
`


// ResponsiveMenu
export const ResponsiveMenuIcon = styled.div`
display: none;
@media(max-width:850px){
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
margin-bottom: 10px;
cursor: pointer;
}

`


export const ResponsiveMenuContainer = styled(motion.div)`
display: none;
@media(max-width:850px){
position: fixed;
top: 100px;
right: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: auto;
padding: 40px 0 26px 0 ;
background: linear-gradient(to bottom, rgba(3, 3, 3, 0.36), rgba(85, 101, 125, 0.4) );
backdrop-filter: blur(5px);
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
box-shadow: inset 0 0 10px black;
z-index: 3;
ul{
  display: flex;
  flex-direction: column;
justify-content: space-between;
align-items: center;
gap: 20px;
}
}
@media(max-width: 550px){
  width: 100vw;
}
`


export const NavDivider = styled.div`
width: 150%;
height: 1px;
background-color: rgba(255, 255, 255, 0.75);
@media(max-width: 550px){
  width: 100vw;
}
`