
import reducerFilter from "../components/NewsFilter/NewsFilterSlice";
import NewsSlice from "../components/NewsList/NewsListSlice";
import { configureStore } from "@reduxjs/toolkit"
import stringMidelware from "../middlware/stringmiddlware";


  export const store = configureStore({
      reducer:{NewsSlice ,reducerFilter },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMidelware),
      devTools:process.env.NODE_ENV !== "production"
  })
