import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    searchByLetter: '',
    searchByLiquor: ''
}

const searcherSlice = createSlice({
    name: 'Searcher',
    initialState: initialState,
    reducers: {
        setSearchValue: (state, action) => {
            return {
                ...state,
                searchValue: action.payload 

            }
        },
        setLetter: (state, action) => {
            return {
                ...state,
                searchByLetter: state.searchByLetter === action.payload ? '' : action.payload
            }
        },
                setLiquor: (state, action) => {
            return {
                ...state,
                searchByLiquor: action.payload 

            }
        },
    }
}
);
export const { setSearchValue, setLetter, setLiquor } = searcherSlice.actions;
export default searcherSlice.reducer