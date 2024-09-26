import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
  "pizza/fetchSlice",
  async (params) => {
    const { category, sortBy, order, searchValue, page } = params;
    const { data } = await axios.get(
      `https://64a141bb0079ce56e2dae912.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}&search=${searchValue}&page=${page}&limit=3`
    
    );
   
    return data;
  },
);

const initialState = {
  status: "",
  items: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPizza.pending]: (state) => {
      state.status = "pending";
    },
    [fetchPizza.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.status = 'fullfilled'

    },
    [fetchPizza.rejected]: (state, actions) => {
      console.log(actions);
      state.status = 'error'
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
