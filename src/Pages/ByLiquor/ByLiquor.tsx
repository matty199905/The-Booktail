import React from 'react'
import { LiquorsContainer, LiquorContainer, LiquorsRender } from './byLiquorStyled'
import { useSelectorTS } from '../../Redux/store'
import LiquorCard from '../../Components/LiquorCard/LiquorCard'




const ByLiquor: React.FC = () => {

  const { Liquors } = useSelectorTS(state => state.Cocktails)


  type Sections = 'Destilados' | 'Licores' | 'Vermouth y Aperitivos' | 'Vinos y Espumantes'

  const renderLiquorCards = (render: Sections) => (
    Liquors
      .filter((item) => { if (item.section === render) { return item } })
      .map((item) => { return <LiquorCard {...item} key={item.id}/> })
  )

  return (




      <LiquorsContainer>


        <LiquorContainer>
          <h2>Destilados</h2>

          <LiquorsRender>
            {renderLiquorCards('Destilados')}
          </LiquorsRender>

        </LiquorContainer>

        <LiquorContainer>
          <h2>Licores</h2>

          <LiquorsRender>
            {renderLiquorCards('Licores')}
          </LiquorsRender>

        </LiquorContainer>

        <LiquorContainer>
          <h2>Vermouth y Aperitivos</h2>

          <LiquorsRender>
            {renderLiquorCards('Vermouth y Aperitivos')}
          </LiquorsRender>

        </LiquorContainer>




        <LiquorContainer>
          <h2>Vinos y Espumantes</h2>

          <LiquorsRender wine={true}>
            {renderLiquorCards('Vinos y Espumantes')}
          </LiquorsRender>

        </LiquorContainer>



      </LiquorsContainer>



  )
}

export default ByLiquor
