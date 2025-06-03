import styled from "styled-components";



export const FooterWrapper = styled.div`
position: fixed;
bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
span {
    padding: 10px 20px;
    border-radius: 15px;
background:  linear-gradient(var(--UI-Secondary),rgba(175, 135, 165, 0.47)) ;
    backdrop-filter: blur(5px);
    color: white;
    box-shadow: 0 0 5px black;
    letter-spacing: 1px;
}
ul {
    display: flex;
    gap: 10px;
    padding:20px 30px;
    border-radius: 30px;
    background: rgba(88, 88, 88, 0.09) ;
    backdrop-filter: blur(7px);
    box-shadow: 0 0 10px black;
    button{
        width: 25px;
        font-size: 20px;
        transition: all 0.2s ease;
        &:hover{
            transform: scale(1.4);
            color: rgb(248, 166, 166);
            transition: all 0.2s ease;
        }
    }
   .active {
    transform: scale(1.4);
    color: rgb(248, 166, 166);
     transition: all 0.2s ease;
   }
}
`
