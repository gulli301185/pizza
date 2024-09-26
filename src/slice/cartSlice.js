import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:[],
    totalCount:0,
    totalPrice:0
}


const cartSlice= createSlice({
  name: "cart",
  initialState,
  reducers: {
  addItem:(state, actions)=>{
    const id=actions.payload.id
    const findItem=state.items?.find((el)=>el.id===id)
 

    if(findItem){     
            findItem.counter++
            findItem.prices=(findItem.prices+findItem.price)
            state.totalCount++
       
    } else{

            state.items.push({...actions.payload,prices:actions.payload.price, counter:1,})
            state.totalCount++
  
    }   
    state.totalPrice=state.items?.reduce((sum,obj)=>{
        return sum+obj.price*obj.counter
    },0)
    },
    removeItem:(state, actions)=>{
 const filterItem=state.items?.find((el)=>el.id ===actions.payload.id)
 if(filterItem.counter>0){
filterItem.prices=filterItem.prices-filterItem.price
     filterItem.counter--
     state.totalCount--

     
 }
 state.totalPrice=state.items?.reduce((sum,obj)=>{
    return sum+obj.price*obj.counter
},0)
    },
    clearItem:(state)=>{
        state.items=[]
        state.totalPrice=0
        state.totalCount=0
    },
    deleteItem:(state, actions)=>{
        console.log(actions);
        const findedItem=state.items?.find((el)=>el.id ===actions.payload.id)
        state.totalPrice=state.totalPrice-findedItem.prices
   const deletedItem=state.items?.filter((el)=>el.id !==actions.payload.id)
    state.items=deletedItem
   state.totalCount=state.totalCount-findedItem.counter
    }
},
});

export const  cartSelector=((state)=>state.cart.items)
export const {addItem, removeItem , clearItem, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;