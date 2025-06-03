import styled from "styled-components"


export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 17px;
width: 180px;
height: 220px;
padding: 10px;
border-radius: 15px;
box-shadow: 0 0 20px black;
transition: all 0.2s ease;
background: linear-gradient(var(--UI-Primary),rgb(29, 15, 51)) ;
&:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease;
    box-shadow: 0 0 10px black;
}
h3 {
text-align: center;
font-size: 16px;
}

`

type imgContainerProps = {
    img: string
}
export const ImgContainer = styled.div<imgContainerProps>` 
width: 100%;
height: 75%;
border-radius: 15px;
background-image: ${(props) => (props.img ? `url(${props.img})` : 'none'
    )};
background-size: cover;
background-position: center;

`