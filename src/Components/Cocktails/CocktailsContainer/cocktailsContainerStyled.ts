import styled from "styled-components";



export const CocktailsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 25px;
width: 100%;
height: auto;
 padding-bottom: 110px;
margin-top: 180px;
z-index: 3;
h1{
    font-family: serif;
    font-size: 45px;
    margin: 0 30px;
    text-align: center;
    @media(max-width:500px){
        font-size: 40px;
    }
}

`


export const DropDownContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BtnsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
margin: 0 20px;
padding: 10px 20px;
background-color: rgb(20, 20, 20);
border-radius: 10px;
@media(max-width:413px){
    width: 280px;
    padding: 15px;
}
`

export const DropDownBtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const ToggleBtn = styled.button`
font-size: 18px;
    @media(max-width:500px){
        font-size: 17px;
    }
`

type Icon_DropDownProps = {
    dropDown: boolean,
   
}
export const IconContainer = styled.div<Icon_DropDownProps>`
font-size: 20px;
transform: ${(props) => (props.dropDown === true ? 'rotate(180deg)' : 'none')};
color: ${(props) => (props.dropDown === true ? 'rgb(248, 166, 166)' : 'white')};
font-size: ${(props) => (props.dropDown === true ? '25px' : 'none')};
transition: all 0.3s ease;
&:hover {
    cursor: pointer;
}
`

export const DropDownMenuContainer = styled.div<Icon_DropDownProps>`
width: ${(props) => (props.dropDown === true ? '100%' : '0')};
height: ${(props) => (props.dropDown === true ? '200px' : '0')};;
margin:20px 0 -30px 0;
 background: rgba(0, 68, 116, 0.1) ;
 backdrop-filter: blur(5px);
border-radius: 15px;
box-shadow:inset 0 0 10px rgba(75, 75, 75, 0.57);
overflow-y : scroll;
transition: all 0.3s ease;
&::-webkit-scrollbar{background-color: transparent}
ul{ 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
 
   li{
    width: 100%;
      padding: 15px 0;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
    }
     .active {
        color:rgb(248, 166, 166)
      
   }
}
`
export const DeleteFilter = styled.button`
width: 120px;
height: 30px;
background-color: var(--UI-Secondary);
border-radius: 15px;
letter-spacing: 1px;
`

export const CocktailsRenderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 40px;
height: auto;
width: 100%;
margin-top: 50px;
padding: 0 40px;
@media(max-width:500px) {
  gap: 15px;
  padding: 0 0px;
  margin-top: 30px ;
}
`