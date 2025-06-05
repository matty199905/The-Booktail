import styled from "styled-components";
import type { SearcherProps } from "./Searcher";




export const SearcherContainer = styled.div<SearcherProps>`
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
    margin-bottom: ${(props)=>(props.navbar === true ? '10px': '0')};
    
    &:focus{
         outline: none;
         border: none;
    }
   }
   button {
      background-color:  rgb(83, 97, 164)
   }
   }
      @media(max-width:850px){
      display: ${(props)=>(props.navbar === true ? 'none': 'flex')};
    }
`