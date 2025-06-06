import { motion } from "framer-motion";
import styled from "styled-components";



type FooterProps = {
    hidden: boolean
}

export const FooterWrapper = styled.div<FooterProps>`
position: fixed;
bottom: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 10px;
z-index: 4;
.footer_title {
    margin-bottom: ${(props)=>(props.hidden === true ? '-65px' : '0')};
    padding: 10px 20px;
    border-radius: 15px;
    background-color: var(--UI-Secondary);
    backdrop-filter: blur(5px);
    color: white;
    box-shadow: inset 0 0 5px black;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    @media (max-width: 560px) {
         margin-bottom: ${(props)=>(props.hidden === true ? '-120px' : '0')};
    }
      @media (max-width: 385px) {
         margin-bottom: ${(props)=>(props.hidden === true ? '-160px' : '0')};
    }
}

`

export const LettersContainer = styled(motion.div)`
ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 20px;
    padding: 20px 20px;
    border-radius: 30px;
    background: rgba(0, 149, 255, 0.1) ;
    backdrop-filter: blur(5px);
    box-shadow: inset 0 0 10px black;
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