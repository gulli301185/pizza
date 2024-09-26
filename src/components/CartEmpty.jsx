import { styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <Div>
       <h1> Корзина пустая !!!</h1>
       <p>Вероятней всего, вы еще не заказывали пиццу! Для того , чтобы заказать пиццу, перейдите на главную страницу!</p>
       <Link to='/'>
       <button>Вернуться назад!</button>
       </Link>
    </Div>
  )
}

export default CartEmpty

const Div=styled('div')(()=>({
    width:'800px',
    background:'grey',
    marginLeft:'300px',
    '& button':{
      marginTop:'300px'
    }
  }))