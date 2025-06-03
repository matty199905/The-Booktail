import styled from "styled-components";



export const LiquorsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row wrap;
width: 100%;
height: auto;
margin-top: -50px;
`


export const LiquorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 700px;
height: auto;
margin: 50px -50px;
h2{
    font-size: 35px;
    font-style: oblique;
    margin-bottom: -25px;
}
`

export const LiquorsRender = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 30px;
height: 500px;
width: 75%;
padding: 20px 20px;
margin-top: 50px;
background: linear-gradient(to bottom,  var(--UI-Secondary), rgba(86, 86, 86, 0.39) );
backdrop-filter: blur(5px);
border-radius:20px;
box-shadow: 0 0 20px rgba(56, 56, 56, 0.93);
overflow: scroll;
overflow-x: hidden;

`