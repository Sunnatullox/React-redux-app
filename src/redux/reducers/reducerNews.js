import { createReducer } from "@reduxjs/toolkit";
import { newsFetching,newsFetched, newsCreated, newsDeleted,newsFetchingError } from "../../components/NewsList/NewsListSlice";

const initalState = {
    news: [],
    newsLoadingStatus: "sun"
  };
  
  ////  createReducer bilan reduser yozishning1- eng yaxshi yuli hisoblanadi!.
  // const reducerNews = createReducer(initalState,builder => {
  //   builder
  //   .addCase(newsFetching,state => {state.newsLoadingStatus=("loading")})
  //   .addCase(newsFetched,(state,action)=> {
  //     state.newsLoadingStatus = "sun";
  //     state.news=action.payload;
  //   })
  //   .addCase(newsCreated,(state,action)=> {state.news.push(action.payload)})
  //   .addCase(newsFetchingError, state => {state.newsLoadingStatus = "error"})
  //   .addCase(newsDeleted,(state, action) => {state.news = state.news.filter((s) => s.id !== action.payload)})
  //   .addDefaultCase(()=> {})
  // })

  /////createReducer bilay reduser yozishning 2-usuli bu unchalik yaxshimas -
  //// - chunkiy buni faqat javascriptni o'zida ishta olamiz typeScript bilan esa ishlata olmaymiz!. 

 const reducerNews= createReducer(initalState,{
   [newsFetching]:state => {state.newsLoadingStatus=("loading")},
   [newsFetched]: (state,action)=> {
        state.newsLoadingStatus = "sun";
        state.news=action.payload;
      },
    [newsCreated]:(state,action)=> {state.news.push(action.payload)},
    [newsFetchingError]: state => {state.newsLoadingStatus = "error"},
    [newsDeleted]: (state, action) => {state.news = state.news.filter((s) => s.id !== action.payload)}
 },[], state => state) 

  export default reducerNews;
  