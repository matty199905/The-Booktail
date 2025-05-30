import React from 'react'
import { Btn, BtnContainer, CocktailsRenderContainer, CocktailsWrapper, DropDownContainer, DropDownMenuContainer, IconContainer } from './cocktailsContainerStyled'
import { IoIosArrowDown } from "react-icons/io";
import { useSelectorTS } from '../../../Redux/store';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useLocation } from 'react-router-dom';



type CocktailsContainerData = {
    title: string
}


const CocktailsContainer: React.FC<CocktailsContainerData> = ({ title }) => {

    const { Cocktails } = useSelectorTS(state => state.Cocktails)
    const { searchValue } = useSelectorTS(state => state.Searcher);
    const location = useLocation()


    return (
        <CocktailsWrapper>
            <h1>{title}</h1>

            <DropDownContainer>
                <BtnContainer>
                    <Btn>¿No sabes que tomar?</Btn>
                    <IconContainer>
                        <IoIosArrowDown />
                    </IconContainer>
                </BtnContainer>

                <DropDownMenuContainer>
                    <ul>
                        {[
                            'Aperitivo',
                            'Dulce',
                            'Fresco',
                            'Tropical',
                            'Frutal',
                            'Floral',
                            'Especiado',
                            'Herbal / Botánico',
                            'Cremoso',
                            'Sparkling',
                            'Seco',
                            'Picante',
                            'Salado',
                            'Cítrico',
                        ].map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </DropDownMenuContainer>
            </DropDownContainer>

            <CocktailsRenderContainer>

                {

                    location.pathname === '/cocktails' &&
                    Cocktails.slice().sort((a, b) => {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    }).map((item) => <CocktailCard {...item} key={item.id} />)

                }
                {
                    location.pathname === '/bySearch' &&
                    Cocktails
                        .filter(item =>
                            item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
                        )
                        .map(item => <CocktailCard {...item} key={item.id} />)
                }

            </CocktailsRenderContainer>
 

        </CocktailsWrapper>
    )
}

export default CocktailsContainer
