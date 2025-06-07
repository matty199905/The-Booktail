import styled from "styled-components";





export const DinamicPageContainer = styled.div`
position: relative;
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
@media(max-width:550px) {
flex-direction: column;
height: 95vh;
width: 95vw;
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
 @media(max-width:550px) {
left:0px;
top: 18px;
font-size: 40px;
z-index: 2;
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
@media(max-width:550px) {
display: none;
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
@media(max-width:550px) {
    position: absolute;
    top: 0px;
    left: -1px;
    width: 100%;
    height: 100%;
    align-self: flex-start
}
`

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
gap: 25px;
padding: 30px 30px 30px 15px;
width: 60%;
height: 100%;
overflow-y: auto;

@media(max-width:800px) {
h1{
    font-size: 27px;

}
}
@media(max-width:550px) {
flex-flow: row wrap;
gap: 15px;
width: 110%;
padding-top: 10px;
margin-left: -10px;
h1{
z-index: 2;
margin-left: 40px;
}
}
`

export const FlavorsData = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 30px;
flex-wrap: wrap;
width: 105%;
margin-left: 20px;
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
    justify-content: flex-start;
    align-self:flex-start;
    gap: 10px;
    margin-left: 10px;
    font-size: 15px;
    li{
list-style: none;
    }
}
    @media(max-width:750px) {
        gap: 20px;
        ul{
    margin-left: 0;}
    }
    @media(max-width:550px) {
   background:  linear-gradient(rgba(144, 144, 144, 0.23),rgba(144, 144, 144, 0.23)) !important;
   backdrop-filter: blur(3px);
}

`

export const IngredientsData = styled(FlavorsData)`
position: unset;
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