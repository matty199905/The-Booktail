import styled from "styled-components";


export const CardContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 17px;
width: 230px;
height: 330px;
padding: 6px;
background:  linear-gradient(var(--UI-Primary),rgb(29, 15, 51)) ;
border-radius: 15px;
box-shadow: inset 0 0 10px black;
transition: all 0.2s ease;
&:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease;
    box-shadow: inset 0 0 10px black;
}
h3 {
text-align: center;
font-size: 16px;
}
@media(max-width:580px) {
    width: 190px;
    height: 280px;
}
@media(max-width:500px){
    width:152px;
    height: 230px;
    padding: 3.5px;
    h3{
        font-size: 16px;
        font-weight: 500;
   margin-bottom: 10px;
    }
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
@media(max-width:500px){
height: 90%;
}
`
