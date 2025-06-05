import styled from "styled-components";
import LayoutImg from '../../Imgs/Layout/Layout.avif'
type LayoutProps = {
    dinamicPage: string
}

export const LayoutWrapper = styled.div<LayoutProps>`
position: relative;
display: flex;
flex-direction: column;
justify-content:  ${(props)=>(props.dinamicPage ? 'center' : 'flex-start')};;
align-items: center;
width: 100%;
min-height: 100vh;
height: auto;
padding: ${(props)=>(props.dinamicPage ? '0px' : '180px 0px')};
background-image: url(${LayoutImg});
background-attachment: fixed;
background-size: contain;
z-index: 0;
@media(max-width:500px) {
    padding-bottom: 110px;
}
@media(min-width:450px){
background-size: cover;
}
`
export const BluredLayout = styled.div<LayoutProps>`
position: absolute;
width: 100vw;
height: 100%;
padding: 0px;
backdrop-filter: blur(2px);
z-index: 1;
`

