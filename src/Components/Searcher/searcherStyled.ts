import styled from "styled-components";


export const SearcherContainer = styled.div`
align-self: flex-end;
form{
     display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
   input{ 
      width: 200px;
    padding: 10px 15px;
    border-radius:15px;
    border: none;
    &:focus{
         outline: none;
    border: none;
    }
   }
   button {
      background-color: rgb(56, 63, 158)
   }
   }
`