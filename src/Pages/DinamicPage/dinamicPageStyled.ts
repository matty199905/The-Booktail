import styled from "styled-components";






export const DinamicPageContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:20px;
width: 70vw;
height: 90vh;
padding: 20px;
background: linear-gradient(to bottom,  transparent, transparent, rgba(0, 0, 0, 0.28) );
border-radius: 15px;
box-shadow: 0 0 20px black;
`

export const IconContainer = styled.div`
position: absolute;
top: 40px;
left: 40px;
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

type ImgContainerProps = {
    img:string
}

export const Divider = styled.div`
height: 106.5%;
width: 2px;
background-color: rgba(0, 0, 0, 0.59);
box-shadow: 0 0 8px black;
`

export const ImgContainer = styled.div<ImgContainerProps>`
width: 45%;
height: 100%;
background-image: ${(props)=>(props.img ? `url(${props.img})` : 'none')};
background-position: center;
background-size: cover;
border-radius: 15px;
box-shadow: 0 0 5px black;
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
width: 100%;
padding: 20px 30px;
border: 2px solid rgba(0, 0, 0, 0.54);
border-radius: 15px;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.53);
h3 {align-self:flex-start}
ul {
    display: flex;
    align-self:flex-start;
    gap: 20px;
}
`

export const IngredientsData = styled(FlavorsData)`
flex-direction: column;

ul {
    flex-direction: column;
}
li{
    list-style: inside;
}
`

export const DescriptionData = styled(IngredientsData)`
ul {gap: 9px;
li{
    line-height: 25px;
    font-style: oblique;
    list-style: inside;
}
}

`