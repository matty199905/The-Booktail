import styled from "styled-components";



export const CocktailsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: auto;
gap: 25px;
width: 100%;
h1{
    font-size: 45px;
}
`


export const DropDownContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const BtnContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`

export const Btn = styled.button`
font-size: 18px;
`

export const IconContainer = styled.div`
font-size: 20px;
&:hover {
    cursor: pointer;
}
`

export const DropDownMenuContainer = styled.div`
display: none;
width: 100%;
height: 200px;
overflow-y : scroll;
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
   }
}
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
`