import React from 'react'
import Layout from './Components/Layout/Layout'
import RoutesApp from './Router/RoutesApp'
import { useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'




const App: React.FC = () => {

const location = useLocation()


  return (

    <Layout>
      <RoutesApp />
      {
        location.pathname === '/licores' ? (
          <Navbar/>
        ) : (location.pathname !== '/' && location.state?.page !== 'dinamicPage') ? (
          <>
            <Navbar/>
            <Footer/>
          </>
        ) : null
      }
    </Layout>

  )
}

export default App
