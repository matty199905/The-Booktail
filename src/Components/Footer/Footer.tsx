import React from 'react'
import { FooterWrapper } from './footerStyled'

const Footer: React.FC = () => {
  const letras = [
    ..."ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
  ];

  return (
    <FooterWrapper>
      <span>Búsqueda por Letra</span>
      <ul>
        {letras.map((letra) => (
          <li key={letra}>
            <button>{letra}</button>
          </li>
        ))}
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
