import { createSlice, createAsyncThunk, createEntityAdapter,createSelector } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/useHttp"


const NewsAdapter = createEntityAdapter();

const initialState = NewsAdapter.getInitialState({newsLoadingStatus: "sun"});


export const fetchnews = createAsyncThunk(
  "news/fetchNews",
  async()=> {
    const {request} = useHttp();
    return await request("http://localhost:3001/news")
  }
)

export const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
       newsCreated:(state,action)=> {NewsAdapter.addOne(state, action.payload)},
     newsDeleted: (state, action) => {NewsAdapter.removeOne(state, action.payload)}
  },
  extraReducers: builder => {
    builder
    .addCase(fetchnews.pending, state => {state.newsLoadingStatus=("loading")})
    .addCase(fetchnews.fulfilled,(state,action)=> {
      state.newsLoadingStatus = "sun";
      NewsAdapter.setAll(state, action.payload)
    })
    .addCase(fetchnews.rejected, state => {state.newsLoadingStatus = "error"})
    .addDefaultCase(()=> {})
  }
});

 const { selectAll } = NewsAdapter.getSelectors(state => state.NewsSlice)

 export const filteredNewsSelected = createSelector(
  (state)=> state.reducerFilter.activFilter,
  selectAll,
  (Filter,reducerNews)=>{
    if(Filter === "all"){
      return reducerNews
    }else {
      return reducerNews.filter(s => s.category === Filter)
    }
  } 
)

export default NewsSlice.reducer;
export const { newsFetching, newsFetched, newsCreated, newsFetchingError, newsDeleted,} = NewsSlice.actions;