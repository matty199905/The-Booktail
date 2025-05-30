import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchValue: '',
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
        }
    }
}
);
export const { setSearchValue } = searcherSlice.actions;
export default searcherSlice.reducer