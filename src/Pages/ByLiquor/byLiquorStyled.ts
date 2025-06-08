import styled from "styled-components";



export const LiquorsContainer = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-flow: row wrap;
width: 100vw;
height: auto;
margin-top: 150px;
z-index: 3;
@media(min-width:1100px){
gap: 50px;
}
@media(max-width:705px){
    width: 90vw;
    margin: 250px auto 0 auto;
}
@media(max-width:360px){
   margin-left: 0;
}
`


export const LiquorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
width: 650px;
height: auto;
margin: 50px -50px;

h2{
    font-size: 35px;
    font-style: oblique;
    margin: 0 60px -25px 60px;
    text-align: center;
    @media(max-width:400px){
        font-size: 30px;
    }
}
@media(max-width:1100px){
width: 50vw;
margin: 50px -20px;
}
@media(max-width:705px){
    width: 100%;
    margin: -70px auto 120px auto;
   
}

@media(min-width:1100px){
width: 50vw
   
}
`
type LiquorsRenderProps = {
    wine?: boolean
}
export const LiquorsRender = styled.div<LiquorsRenderProps>`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
height: ${(props)=>(props.wine === true ? '300px' : '500px;')};
width: 75%;
padding: 20px 20px;
margin-top: 50px;
background: linear-gradient(to bottom,  var(--UI-Secondary), rgba(109, 79, 79, 0.39) );
backdrop-filter: blur(5px);
border-radius:15px;
box-shadow:inset 0 0 20px rgba(158, 158, 158, 0.61);
overflow: scroll;
overflow-x: hidden;
.vinos-espumantes{
    height: 200px;
}
@media(min-width:1100px){
width: 450px
   
}
@media(max-width:705px){
    width: 90vw;
    margin:  50px auto;
   
}
@media(max-width:440px){
height: 420px;
}
@media(max-width:360px){
padding: 20px 0px;
width: 90vw;
margin-left: 17px
}

`