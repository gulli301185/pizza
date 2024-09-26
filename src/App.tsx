
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './pages/Home'
import NotFoundBlock from './pages/NotFoundBlock'
import Cart from './pages/Cart'
import PizzaInfo from './pages/PizzaInfo'


const App = () => {


  return (
    <>
<Home />
      <Routes>
         <Route path='/' element={<Main/>} /> 
         <Route path='/info/:id' element={<PizzaInfo />} /> 
         <Route path='/cart' element={<Cart/>} /> 
         <Route path='*' element={<NotFoundBlock/>} /> 
    </Routes>
    </>
  )
}

export default App

