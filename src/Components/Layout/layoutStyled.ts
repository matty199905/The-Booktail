import styled from "styled-components";
import LayoutImg from '../../Imgs/Layout/Layout.avif'
import Hero from '../../Imgs/Hero/wallpaper.jpg'

type LayoutProps = {
    dinamicPage: string,
    layoutWallpaper?: boolean,
    homeWallpaper?: boolean
}

export const LayoutWrapper = styled.div<LayoutProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=>(props.dinamicPage ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;
  min-height: 100vh; 
  height: auto;
  z-index: 0;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
      background-image:${(props)=>(props.layoutWallpaper ? `url(${LayoutImg})` : props.homeWallpaper ? `url(${Hero})` : undefined)};
  background-size: cover;
  background-position: center;
  padding-top: 500px;
  background-repeat: no-repeat;
  @media (max-width: 850px) {
   padding-top: 200px
}
 @media (min-width: 550px){
   background-image:  ${(props)=>(props.dinamicPage ? `url(${LayoutImg})`  : undefined)};
 }
  }
`
export const Overlay = styled.div<LayoutProps>`
position: absolute;
width: 100vw;
height: 100%;
backdrop-filter: blur(2px);
z-index: 1;
`

