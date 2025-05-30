import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import cocktailsReducer from './Cocktails/cocktailsSlice'
import searcherReducer from './Searcher/searcherSlice'

const reducers = combineReducers({
Cocktails: cocktailsReducer,
Searcher: searcherReducer,
})


export const store = configureStore({

    reducer: reducers
    
})



export type RootState = ReturnType<typeof store.getState>;
export const useSelectorTS: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;