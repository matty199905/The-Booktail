import styled from "styled-components";
import LayoutImg from '../../Imgs/Layout/Layout.avif'



type LayoutProps = {
    dinamicPage: string,
    wallpaperTrue?: boolean
}

export const LayoutWrapper = styled.div<LayoutProps>`
position: relative;
display: flex;
flex-direction: column;
justify-content:  ${(props)=>(props.dinamicPage ? 'center' : 'flex-start')};
align-items: center;
width: 100%;
min-height: 100vh;
height: auto;
background-image:${(props)=>(props.wallpaperTrue ? `url(${LayoutImg})` : 'none')};
background-attachment: fixed;
background-size: contain;
z-index: 0;
@media(min-width:450px){
background-size: cover;
}
`
export const BluredLayout = styled.div<LayoutProps>`
position: absolute;
width: 100vw;
height: 100%;
backdrop-filter: blur(2px);
z-index: 1;
`

