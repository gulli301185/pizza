import { styled } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Div>
     <h1> Not found anything...</h1>
      </Div>
  )
}

export default NotFound

const Div=styled('div')(()=>({
  width:'200px',
  background:'grey',
  margin:'auto',
  textAlign:'center',
  padding:'200px'
}))