import React from 'react'
import { CardContainer, ImgContainer } from './liquorCardStyled'
import { Link } from 'react-router-dom'
import type { LiquorData } from '../../Data/liquorsData'
import { useDispatch } from 'react-redux'
import { setLiquor } from '../../Redux/Searcher/searcherSlice'
import type { AppDispatch } from '../../Redux/store'

const LiquorCard: React.FC<LiquorData> = ({img, name}) => {


const dispatch = useDispatch<AppDispatch>()

  return (
<Link to={`/cocktails`} onClick={()=> dispatch(setLiquor(name))} >
      <CardContainer>

        <ImgContainer img={img} />
        <h3>{name}</h3>

      </CardContainer>
    </Link>
  )
}

export default LiquorCard
