import styled from "styled-components";
import LayoutImg from '../../Imgs/Layout/Layout.avif'
import Hero from '../../Imgs/Hero/wallpaper.jpg'


type LayoutProps = {
    dinamicPage: string,
    layoutWallpaper?: boolean,
    homeWallpaper?: boolean
}

export const LayoutWrapper = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props)=>(props.dinamicPage ? 'center' : 'flex-start')};
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: ${(props)=>(props.layoutWallpaper ? `url(${LayoutImg})` : props.homeWallpaper ? `url(${Hero})` : 'none')};
  background-attachment: fixed;
  background-size: cover;
  background-position-y: -540px;
  z-index: 0;
  
  @media (min-width: 550px){
      background-image:  ${(props)=>(props.dinamicPage ? `url(${LayoutImg})`  : undefined)};
  }
    @media (max-width: 1200px){
  background-position-y: -350px;
  }
  @media (max-width: 890px){
  background-position-y: -180px;
  }
    @media (max-width: 600px){
  background-position-y: 0px;
  }
`
export const Overlay = styled.div<LayoutProps>`
position: absolute;
width: 100vw;
height: 100%;
backdrop-filter: blur(2px);
z-index: 1;
`

