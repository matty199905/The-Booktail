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
                searchValue: action.payload,
                searchByLetter: '',
                searchByLiquor: ''

            }
        },
        setLetter: (state, action) => {
            return {
                ...state,
                searchByLetter: state.searchByLetter === action.payload ? '' : action.payload,
                searchValue: '',
                searchByLiquor: ''
            }
        },
        setLiquor: (state, action) => {
            return {
                ...state,
                searchByLiquor: action.payload,
                searchValue: '',
                searchByLetter: '',

            }
        },
    }
}
);
export const { setSearchValue, setLetter, setLiquor } = searcherSlice.actions;
export default searcherSlice.reducer