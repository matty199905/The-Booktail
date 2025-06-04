import React from 'react'
import { ArrowResponsiveIcon, CardContainer, ImgContainer } from './cocktailCardStyled'
import { Link } from 'react-router-dom'
import type { CocktailData } from '../../../Data/cocktailsData'
import { BsArrowRightCircleFill } from "react-icons/bs";




const CocktailCard: React.FC<CocktailData> = ({ img, name, flavor, ingredients, liquor, description }) => {


  const selectedCocktail = {
    img: img,
    name: name,
    flavor: flavor,
    ingredients: ingredients,
    liquor: liquor,
    description: description,
  }

  return (
    <Link to={`/cocktails/${name}`} state={{ selectedCocktail, page: 'dinamicPage' }} >
      <CardContainer>

        <ImgContainer img={img} />
        <h3>{name}</h3>
        <ArrowResponsiveIcon>
          <BsArrowRightCircleFill />
        </ArrowResponsiveIcon>
      </CardContainer>
    </Link>
  )
}

export default CocktailCard
