import styled from "styled-components";





export const DinamicPageContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:20px;
width: 70vw;
height: 90vh;
padding: 20px;
background: linear-gradient(to bottom,  var(--UI-Secondary), rgba(65, 65, 65, 0.46) );
backdrop-filter: blur(5px);
border-radius: 15px;
box-shadow:inset 0 0 20px black;
z-index: 3;
@media(max-width:1240px) {
    width: 90vw;
}
@media(max-width:800px) {
    padding: 10px;
    height: 80vh;
}
`


export const IconContainer = styled.div`
position: absolute;
top: 40px;
left: 20px;
width: 50px;
font-size: 50px;
transform: rotate(90deg);
transition: all 0.2s ease;
cursor: pointer;
:hover{
    color: orange;
    transition: all 0.2s ease;
}
`
export const Divider = styled.div`
height: 106.5%;
width: 2px;
background-color: rgba(0, 0, 0, 0.59);
box-shadow: 0 0 5px black;
@media(max-width:800px) {
height: 103%;
margin-left: -10px;
}
`



type ImgContainerProps = {
    img: string
}
export const ImgContainer = styled.div<ImgContainerProps>`
width: 45%;
height: 100%;
background-image: ${(props) => (props.img ? `url(${props.img})` : 'none')};
background-position: center;
background-size: cover;
border-radius: 15px;
box-shadow: 0 0 5px black;
@media(max-width:800px) {
    width: 50%;
}
`

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 40px;
padding: 30px 30px 30px 15px;
width: 60%;
height: 100%;
overflow-y: scroll;

`

export const FlavorsData = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 30px;
flex-wrap: wrap;
width: 100%;
padding: 20px 30px;
background:  linear-gradient(var(--UI-Primary),rgba(29, 15, 51, 0.65)) ;
backdrop-filter: blur(5px);
border: 2px solid rgba(0, 0, 0, 0.54);
border-radius: 15px;
box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.53);
h3 {
    align-self:flex-start;
 font-size: 18px;}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self:flex-start;
    gap: 10px;
    margin-left: 10px;
    font-size: 15px;
    li{
list-style: none;
    }
}
`

export const IngredientsData = styled(FlavorsData)`
flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;

ul {
    flex-direction: column;
    gap: 10px;
    li{
            list-style: disc; 
            line-height: 25px;
            text-align: left;
    }
}
`

export const DescriptionData = styled(IngredientsData)`
ul {gap: 9px;
li{
    font-style: oblique;
}
}

`