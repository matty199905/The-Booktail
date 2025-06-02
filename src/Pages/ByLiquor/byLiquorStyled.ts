import styled from "styled-components";



export const LiquorsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row wrap;
width: 100%;
height: auto;
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
gap: 60px;
height: 400px;
width: 75%;
padding: 40px 20px;
margin-top: 50px;
background-color:  rgb(63, 25, 25);
border-radius:20px;
box-shadow: 0 0 20px black;
overflow: scroll;
overflow-x: hidden;

`