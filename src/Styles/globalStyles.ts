import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --UI-Primary: rgb(72, 68, 131);
  --UI-Secondary: rgb(174, 89, 120);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

  html{
    position: relative;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: transparent;

}

::-webkit-scrollbar-thumb {
  background: rgb(104, 104, 104); 
  border: 1px solid  black;
  border-radius: 15px;
    &:hover {
    cursor: grab;
} 
}

  }
  
  
body {   
    background-color: #2c2c2c;
font-family: sans-serif;
letter-spacing: 1px;
    color: white;
  }
    
   a {
    text-decoration: none;
    color: white;
    &&:visited {
    color: white;
    }
    }

   
    li {
    list-style: none;
    }

    button {
        background: transparent;
        border: none;
        color: white;
        text-align: center;
        &:hover {
          cursor: pointer;
        }
    }
`