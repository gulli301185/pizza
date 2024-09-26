import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue:'',
  categoryNum: 0,
  select: 0,
  page: 1,
  sort: {
    name: "цена",
    sortProperty: "price",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue: (state, actions) => {
      state.searchValue = actions.payload;
    },
    categoryHandler: (state, actions) => {
      state.categoryNum = actions.payload;
    },
    SortSlice: (state, actions) => {
      state.sort = actions.payload.list;
      state.select = actions.payload.id;
    },
    setPage: (state, actions) => {
      state.page = actions.payload;
    },
    setFilters:(state,actions)=>{
      console.log(actions.payload.sorts);
      state.page=Number(actions.payload.page);
      state.sort=actions.payload.sorts
      state.categoryNum=Number(actions.payload.categoryNum)
    }
  },
});

export const filterSelector=(state=>state.filter)
export const {setFilters, categoryHandler, SortSlice, setPage ,setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;
