import { createReducer } from "@reduxjs/toolkit";
import { filtersFitching, filtersFitchid, filtersFitchingError, activeFilterChanged } from "../../components/NewsFilter/NewsFilterSlice";

const initalState = {
    filters: [],
    filterLoadingStatus: "sun",
    activFilter: "all",
  };

    // const reducerFilter = createReducer(initalState,builder =>{
  //   builder
  //   .addCase(filtersFitching,state => {state.filterLoadingStatus = "loading"})
  //   .addCase(filtersFitchid,(state,action)=> {
  //     state.filterLoadingStatus = "sun";
  //     state.filters = action.payload;
  //   })
  //   .addCase(filtersFitchingError, state => {state.filterLoadingStatus = "error"})
  //   .addCase(activeFilterChanged, (state, action) => {state.activFilter = action.payload})
  //   .addDefaultCase(()=> {})    
  // }) 

  const reducerFilter = createReducer(initalState,{
    [filtersFitching]: (state) => {
      state.filterLoadingStatus = "loading";
    },
    [filtersFitchid]: (state, action) => {
      state.filterLoadingStatus = "sun";
      state.filters = action.payload;
    },
    [filtersFitchingError]: (state) => {
      state.filterLoadingStatus = "error";
    },
    [activeFilterChanged]: (state, action) => {
      state.activFilter = action.payload;
    },
  })  
 
  export default reducerFilter;
  