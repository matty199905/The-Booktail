import React from 'react'
import {CardContainer, ImgContainer } from './cocktailCardStyled'
import { Link } from 'react-router-dom'
import type { CocktailData } from '../../../Data/cocktailsData'





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

      </CardContainer>
    </Link>
  )
}

export default CocktailCard
