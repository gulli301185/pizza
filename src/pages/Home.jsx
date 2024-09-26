import React  from 'react'
import Header from '../components/Header'
import { styled } from '@mui/material'

const Home = () => {

  return (
    <Container>
        <Header/>
        <hr></hr>
    </Container>

  )
}

export default Home

const Container=styled('div')(()=>({
    width:'1340px',
    marginLeft:'122px',
    marginTop:'50px',
  '& hr':{
    marginTop:'30px',
    marginBottom:'50px'
  }
 
}))