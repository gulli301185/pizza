import { Box, styled } from "@mui/material";
import React, { useCallback, useState } from "react";

import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../slice";

const Search = () => {
  const dispatch=useDispatch()
  const [value, setValue]=useState('')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const  updateSearchHandler=useCallback (
    debounce((str)=>{
      dispatch(setSearchValue(str))
    },1000),[]
  )

  function searchHandler(e){
    setValue(e.target.value)
    updateSearchHandler(e.target.value)
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { marginLeft: -50, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Input
        placeholder="search..."
        variant="outlined"
        type="search"
        onChange={searchHandler}
        value={value}
      />
    </Box>
  );
};

export default Search;

const Input = styled("input")({
  height: "40px",
  borderRadius: "10px",
});
