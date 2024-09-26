import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../slice";
import cartSlice from "../slice/cartSlice";
import pizzaSlice from "../slice/fetchSlice";


export const store=configureStore({
    reducer:{
        filter: filterSlice,
        cart:cartSlice,
        pizza:pizzaSlice
    }
})