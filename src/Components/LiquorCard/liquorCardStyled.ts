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
box-shadow: inset 0 0 20px rgb(0, 0, 0);
transition: all 0.2s ease;
background: linear-gradient(var(--UI-Primary),rgb(29, 15, 51)) ;
&:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease;
    box-shadow:inset 0 0 10px black;
}
h3 {
text-align: center;
font-size: 16px;
}
@media (max-width:520px){
    width: 150px;
    height: 200px;
    padding: 8px;
    h3{
        font-size: 16px;
    }
    @media(max-width:449px){
    width: 130px;
    height: 180px;
    }
        @media(max-width:380px){
    width: 120px;
    height: 180px;
    padding: 6px;
    }
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
@media (max-width:490px){
height: 85%;
    }
`