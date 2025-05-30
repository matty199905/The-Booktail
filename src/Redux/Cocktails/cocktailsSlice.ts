import { createSlice } from "@reduxjs/toolkit";
import { cocktailsData } from "../../Data/cocktailsData";


const initialState = {
Cocktails: cocktailsData
}

const cocktailsSlice = createSlice({
    name: 'Cocktails',
    initialState: initialState,
    reducers: {

    
        }
    }
);

export default cocktailsSlice.reducer