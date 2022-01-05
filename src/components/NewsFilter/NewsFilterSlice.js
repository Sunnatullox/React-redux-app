import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/useHttp";

const initialState = {
  filters: [],
  filterLoadingStatus: "sun",
  activFilter: "all",
};

export const filterfetchingnews= createAsyncThunk(
  "filter/fetchnews",
  async()=> {
    const {request}= useHttp();
    return request("https://reactreduxmyapp.herokuapp.com/filters")
  }
)

const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    activeFilterChanged: (state, action) => {
      state.activFilter = action.payload;
    },
  },
  extraReducers: builder => {
    builder 
    .addCase(filterfetchingnews.pending,(state) => {state.filterLoadingStatus = ("loading")})
    .addCase(filterfetchingnews.fulfilled,  (state, action) => {
      state.filterLoadingStatus = "sun";
      state.filters = action.payload;
    })
    .addCase(filterfetchingnews.rejected,(state) => {state.filterLoadingStatus = "error"})
    .addDefaultCase(()=> {})
  }
});

export default FilterSlice.reducer;
export const {
  filtersFitching,
  filtersFitchid,
  filtersFitchingError,
  activeFilterChanged,
} = FilterSlice.actions;
