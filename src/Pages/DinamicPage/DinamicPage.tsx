import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionData, DetailsContainer, DinamicPageContainer, Divider, FlavorsData, IconContainer, ImgContainer, IngredientsData } from './dinamicPageStyled';
import { IoIosArrowDown } from "react-icons/io";



const DinamicPage: React.FC = () => {

  const location = useLocation()
  const data = location.state.selectedCocktail

  
  return (
<DinamicPageContainer>

<IconContainer onClick={()=> window.history.back()}>
  <IoIosArrowDown />
</IconContainer>

<ImgContainer img={data.img}/>


<Divider/>

<DetailsContainer>
<h1>{data.name}</h1>

<FlavorsData>
  <h3>Sabor:</h3>
  <ul>{data.flavor.map((item: string[])=> <li>--{item}--</li>)}</ul>
</FlavorsData>

<IngredientsData>
<h3>Ingredientes:</h3>
<ul>{data.ingredients.map((item: string[])=> <li>{item}</li>)}</ul>
</IngredientsData>

<DescriptionData>
<h3>Preparacion:</h3>
<ul>{data.description.map((item: string[])=> <li>{item}</li>)}</ul>
</DescriptionData>
</DetailsContainer>


</DinamicPageContainer>
  )
}

export default DinamicPage
