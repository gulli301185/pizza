import React, { useState } from "react";

import Categories from "./Categories";
import Pizza from "./Pizza";
import { styled } from "@mui/material";

const Main = () => {
  const [categoryNum, setCategoryNum]=useState(0)

  function onTog(id){
    setCategoryNum(id)
  }

  
  return (
    <ContainerBox>
      <Categories onTog={onTog} />
      <Pizza categoryNum={categoryNum}/>
    </ContainerBox>
  );
};

export default Main;

const ContainerBox=styled('div')(()=>({
  marginLeft:'122px',

}))