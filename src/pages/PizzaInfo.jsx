import { styled } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPizza } from "../slice/fetchSlice";

const PizzaInfo = () => {
  const {id} = useParams();
  const navigate=useNavigate()
  const [pizza, setPizza] = useState();
console.log(id, typeof id)
  useEffect(() => {
    async function fetchPizza () {
      try {
        const  {data}  = await axios.get( `https://64a141bb0079ce56e2dae912.mockapi.io/items/${id}`)
         setPizza(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchPizza()
  }, []);
  console.log(pizza);
  return <Div>
    <img style={{width:'250px' }} alt="pizza" src={pizza?.imageUrl}/>
    <h1>{pizza?.name}</h1>
    <h1>{pizza?.price}руб</h1><br />
    <button onClick={()=>navigate('/')}><h1>nazad</h1></button>
  </Div>;
};

export default PizzaInfo;

const Div = styled("div")(() => ({
    width:'500px',
  // background: "#e8d7d7",
  border:'3px solid orange',
  marginLeft: "300px",
  "& img": {
  marginLeft:'50px',
  },
  "& h1":{
  marginLeft:'50px',
  }
}));
