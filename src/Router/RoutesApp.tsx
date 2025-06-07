import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AllDrinks from '../Pages/AllDrinks/AllDrinks'
import ByLiquor from '../Pages/ByLiquor/ByLiquor'
import DinamicPage from '../Pages/DinamicPage/DinamicPage'



const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/licores' element={<ByLiquor/>} />
      <Route path='/cocktails' element={<AllDrinks/>}/>
      <Route path='/cocktails/:cocktailDinamico' element={<DinamicPage/>}/>
      
    </Routes>
  )
}

export default RoutesApp
