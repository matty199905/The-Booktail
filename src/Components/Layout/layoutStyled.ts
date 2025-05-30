import styled from "styled-components";

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
`