import { styled } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, clearItem, deleteItem, removeItem } from '../slice/cartSlice'
import CartEmpty from '../components/CartEmpty'

const typeName = ["тонкое", "традиционное"];
const Cart = () => {
  const dispatch=useDispatch()
  const {items, totalPrice}=useSelector((state)=>state.cart)
  console.log(items);
  function cleanHandler(){
    dispatch(clearItem())
    console.log('kkk');
  }

  function plusHandler(el){
    console.log(el);
 dispatch(addItem(el))
  }
  
  function minusHandler(el){
    dispatch(removeItem(el))
  }

  function deleteHandler(el){
    dispatch(deleteItem(el))
  }
  if(!totalPrice){
    return <CartEmpty/>
  }
  return (
    <Div>
      <div style={{display:'flex', justifyContent:'space-between'}}>

     <h1> КАРЗИНО...</h1>
     <h3 onClick={cleanHandler}>очистить карзину</h3>
      </div>
      <div>
        {items?.map((el)=>{
      console.log(el);
       return <li key={el.id}>
<span style={{display:'flex',justifyContent:'space-around'}}>

         <img src={el.imageUrl} alt="pizza" style={{width:'50px'}} />
         <span>{el.name}</span>
         {/* <span>{typeName[el.types]}</span>
         <span>{el.sizes}sm</span> */}
         <span onClick={()=>{plusHandler(el)}}><h1>+</h1></span>
         <span>{el.counter}x{el.price}</span>
         {/* <span>{el.counter2}x{el.price}</span> */}
        
         <span onClick={()=>{minusHandler(el)}}>-</span>
         <span>{el.prices}</span>
         <span onClick={()=>{deleteHandler(el)}}>x</span>
</span>
       </li>
        })}
<div>Total Price:{totalPrice}</div>
      </div>
     <Link to='/'>
     <button>назад</button>
     </Link>
      </Div>
   
  )
}

export default Cart

const Div=styled('div')(()=>({
  width:'1400px',
  background:'grey',
  marginLeft:'300px',
  '& button':{
    marginTop:'300px'
  }
}))