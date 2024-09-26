import styled from '@emotion/styled'
import React from 'react'
import Sort from './Sort'
import { useDispatch, useSelector } from 'react-redux'
import { categoryHandler } from '../slice'


const category=['Все',"Мясные","Вегетарианские","Гриль","Острые","Закрытые"]

const Categories = () => {
    const dispatch=useDispatch()
    const {categoryNum}=useSelector((state)=>state.filter)



    function categ(i){
      
        dispatch(categoryHandler(i))
        
    }
  return (
    <Box>
    <Div>
        <div className='list'>

        {category.map((el,i)=>(
            <li key={i} className={categoryNum===i? 'active':'notActive'} onClick={()=>categ(i)}>{el}</li>
        ))}
        </div>
    </Div>
        <Sort className='sort' />
    </Box>
  )
}

export default Categories
const Box=styled('div')({
   display:'flex',
    justifyContent:'space-between',
    width:"1300px"
   
})

const Div=styled('div')(()=>({
 
    '.list':{
        width:'800px',
        display:'flex',
        justifyContent:'space-around',
        listStyle:'none',
        marginLeft:'-40px',
        cursor:'pointer'

    },
    '.active':{
        backgroundColor:'black',
        color:'white',
        padding:'5px 15px  5px 10px',
        borderRadius:'30px',
    },
    '.notActive':{
    backgroundColor:'grey',
    color:'white',
    padding:'5px 15px  5px 10px',
    borderRadius:'30px'
    },
}))