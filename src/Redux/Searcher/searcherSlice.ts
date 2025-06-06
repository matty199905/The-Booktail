import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    searchByLetter: '',
    searchByLiquor: '',
    searchByFlavor: '',
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
                searchByLiquor: '',
                searchByFlavor: '',

            }
        },
        setLetter: (state, action) => {
            return {
                ...state,
                searchByLetter: state.searchByLetter === action.payload ? '' : action.payload,
                searchValue: '',
                searchByLiquor: '',
                searchByFlavor: '',
            }
        },
        setLiquor: (state, action) => {
            return {
                ...state,
                searchByLiquor: action.payload,
                searchValue: '',
                searchByLetter: '',
                searchByFlavor: '',

            }
        },
        setFalvor: (state, action) => {
            return {
                ...state,
                searchByLiquor: '',
                searchValue: '',
                searchByLetter: '',
                searchByFlavor: action.payload,

            }
        },
        resetValues: (state) => {
            return {
                ...state,
                searchByLiquor: '',
                searchValue: '',
                searchByLetter: '',
                searchByFlavor: '',

            }
        },
    }
}
);
export const { setSearchValue, setLetter, setLiquor, setFalvor, resetValues } = searcherSlice.actions;
export default searcherSlice.reducer