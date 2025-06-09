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
justify-content:  ${(props)=>(props.dinamicPage ? 'center' : 'flex-start')};
align-items: center;
width: 100vw;
min-height: 100vh;
height: auto;
background-image:${(props)=>(props.layoutWallpaper ? `url(${LayoutImg})` : props.homeWallpaper ? `url(${Hero})` : 'none')};
background-attachment:fixed ;
background-size: cover;
z-index: 0;
@media (min-width: 550px){
    background-image:  ${(props)=>(props.dinamicPage ? `url(${LayoutImg})`  : undefined)};
    background-attachment: scroll;
}
`
export const Overlay = styled.div<LayoutProps>`
position: absolute;
width: 100vw;
height: 100%;
backdrop-filter: blur(2px);
z-index: 1;
`

