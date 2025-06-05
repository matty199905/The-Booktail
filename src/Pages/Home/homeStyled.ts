import styled from "styled-components";



export const HomeWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-position: center;
background-size: cover;
width: 100vw;
height: 100vh;
margin: -180px 0;
z-index: 3;
`


export const Title = styled.h1`
font-size: 70px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
margin: 0 30px 70px 30px ;
font-family: serif;
text-align: center;
@media(max-width: 476px){
  font-size: 55px;
  margin: 50px 30px 40px 30px;
}
`

export const SearchBy_Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
max-width: 400px;
margin: 0 20px;
padding: 40px 50px;
border-radius: 30px;
background: linear-gradient(to bottom, rgba(0, 0, 0, 0.57), rgba(113, 157, 224, 0.4) );
backdrop-filter: blur(5px); 
box-shadow: inset -7px 0px 20px rgba(72, 72, 72, 0.72);
margin-bottom: 120px;
@media(max-width:390px){
  font-size: 16px;
  padding: 30px 30px;
}
h2 {
  font-size: 18px;
  font-weight:100;
  letter-spacing: 1px;
    margin-bottom: 28px;
    text-align: center;
}
`

export const SearchBy_Container = styled.div`
display: flex;
justify-content:center;
align-items: center;
ul{
    display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap: 17px;
   button{
    padding: 10px 20px;
    border-radius: 15px;
    background-color: rgb(83, 97, 164);
    backdrop-filter: blur(7px);
    color: white;
     transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease;
            background-color: var(--UI-Secondary);
    }
    }


}
`
