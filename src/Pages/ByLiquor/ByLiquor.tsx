import React from 'react'
import { LiquorsRenderContainer, LiquorsWrapper } from './byLiquorStyled'




const ByLiquor: React.FC = () => {
  return (
<LiquorsWrapper>

<h1>Licores</h1>

<LiquorsRenderContainer>

<h2 style={{opacity: 0.5, fontSize: '40px'}}>Próximamente</h2>

</LiquorsRenderContainer>


</LiquorsWrapper>
  )
}

export default ByLiquor
