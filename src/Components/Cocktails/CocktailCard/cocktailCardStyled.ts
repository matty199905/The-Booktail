import styled from "styled-components";


export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 17px;
width: 230px;
height: 330px;
padding: 8px;
background:  linear-gradient(var(--UI-Primary),rgb(29, 15, 51)) ;
border-radius: 15px;
box-shadow: 0 0 20px black;
transition: all 0.2s ease;
&:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease;
    box-shadow: 0 0 10px black;
}
h3 {
text-align: center;
}

`

type imgContainerProps = {
    img: string
}
export const ImgContainer = styled.div<imgContainerProps>` 
width: 100%;
height: 85%;
border-radius: 15px;
background-image: ${(props) => (props.img ? `url(${props.img})` : 'none'
    )};
background-size: cover;
background-position: bottom;

`