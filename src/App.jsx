import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'


const App = () => {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App