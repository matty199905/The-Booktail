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
@media(max-width:580px) {
    width: 190px;
    height: 280px;
}
@media(max-width:500px) {
    display: flex;
    flex-direction: row;
    width: 90vw;
    height: 120px;
    gap: 20px;
    padding: 3px;
    h3{
        font-size: 16px;
        max-width: 100px;
        text-align: left;
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
@media(max-width:500px) {
width: 25%;
height: 100%;
}
`


export const ArrowResponsiveIcon = styled.div`
display: none;
@media(max-width:500px) {
display: flex;
position: absolute;
right: 20px;
top: 35%;
font-size: 40px;
color: rgba(255, 255, 255, 0.71);
}
`