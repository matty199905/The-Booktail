import React, { useState } from 'react'
import { DropDownBtnContainer, CocktailsRenderContainer, CocktailsWrapper, DeleteFilter, DropDownContainer, DropDownMenuContainer, IconContainer, BtnsContainer, ToggleBtn } from './cocktailsContainerStyled'
import { IoIosArrowDown } from "react-icons/io";
import { useSelectorTS, type AppDispatch } from '../../../Redux/store';
import CocktailCard from '../CocktailCard/CocktailCard';
import { useLocation } from 'react-router-dom';
import { resetValues, setFalvor } from '../../../Redux/Searcher/searcherSlice';
import { useDispatch } from 'react-redux';
import Searcher from '../../Searcher/Searcher';



type CocktailsContainerData = {
    title: string
}


const CocktailsContainer: React.FC<CocktailsContainerData> = ({ title }) => {

    const { Cocktails } = useSelectorTS(state => state.Cocktails);
    const { searchValue } = useSelectorTS(state => state.Searcher);
    const { searchByLiquor } = useSelectorTS(state => state.Searcher);
    const { searchByLetter } = useSelectorTS(state => state.Searcher);
    const { searchByFlavor } = useSelectorTS(state => state.Searcher);
    const [dropDown, setDropDown] = useState(false);
    const letter = useSelectorTS(state => state.Searcher.searchByLetter);
    const location = useLocation()
    const dispatch = useDispatch<AppDispatch>()



    const renderAll =
        Cocktails
            .slice()
            .sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
            .map((item) => <CocktailCard {...item} key={item.id} />)


    const renderSearched =
        Cocktails
            .filter(item =>
                item.name.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
            )
            .map(item => <CocktailCard {...item} key={item.id} />)


    const seachedValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);


    const renderByLetter =
        Cocktails
            .filter(item => item.name.charAt(0).toUpperCase() === letter.toUpperCase())
            .map(item => <CocktailCard {...item} key={item.id} />);



    const renderByFlavors =
        Cocktails
            .filter((items) => { if (items.flavor?.some((flavor) => flavor === searchByFlavor)) { return items } })
            .map(items => <CocktailCard {...items} key={items.id} />);

    const onClickFlavorHandler = (item: string) => {

        dispatch(setFalvor(item));
        setDropDown(false);

    }

    const renderByLiquors =
        Cocktails
            .filter((item) => { if (item.liquor.find((item) => item === searchByLiquor)) { return item } })
            .map((item) => { return <CocktailCard {...item} key={item.id} /> })




    return (
        <CocktailsWrapper>
            <h1>
                {
                    letter ? `Resultados con: '${letter}'` :
                        seachedValue ? `Resultados de: "${seachedValue}"` :
                            searchByLiquor ? `Todos los Cocktails con: ${searchByLiquor}` :
                                searchByFlavor ? `Todos los Cocktails: ${searchByFlavor}` :
                                    title
                }
            </h1>



            <DropDownContainer>

                <Searcher cocktailsWrapper={true} onKeyDown={(e) => { if (e.key === 'Enter') { (e.target as HTMLInputElement).blur() } }} />

                <BtnsContainer>

                    <DropDownBtnContainer onClick={() => setDropDown(!dropDown)}>

                        <ToggleBtn>
                            {!searchByFlavor ? '¿No sabes que tomar?' : searchByFlavor}
                        </ToggleBtn>
                        <IconContainer
                            dropDown={dropDown}>
                            <IoIosArrowDown />
                        </IconContainer>

                    </DropDownBtnContainer>
                    {

                        (searchByFlavor || searchByLiquor || searchByLetter) && <DeleteFilter onClick={() => { setFalvor(''); dispatch(resetValues()) }}>Borrar Filtro</DeleteFilter>
                    }

                </BtnsContainer>


                <DropDownMenuContainer
                    dropDown={dropDown}>
                    <ul>
                        {[
                            'Aperitivo',
                            'Dulce',
                            'Fresco',
                            'Tropical',
                            'Frutal',
                            'Floral',
                            'Herbal / Botánico',
                            'Cremoso',
                            'Sparkling',
                            'Seco',
                            'Picante',
                            'Salado',
                            'Cítrico',
                        ].map((item, index) => (
                            <li
                                onClick={() => { onClickFlavorHandler(item) }}
                                key={index}
                                className={(searchByFlavor === item) ? 'active' : ''}>{item}</li>
                        ))}
                    </ul>
                </DropDownMenuContainer>


            </DropDownContainer>





            <CocktailsRenderContainer>

                {location.pathname === '/cocktails' && (
                    searchByFlavor !== ''
                        ? renderByFlavors
                        : (letter !== ''
                            ? renderByLetter : searchByLiquor !== '' ? renderByLiquors
                                : searchValue !== '' ? renderSearched : renderAll)
                )}



            </CocktailsRenderContainer>


        </CocktailsWrapper>
    )
}

export default CocktailsContainer
