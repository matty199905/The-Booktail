import { createSlice } from "@reduxjs/toolkit";
import { cocktailsData } from "../../Data/cocktailsData";
import { liquorsData } from "../../Data/liquorsData";


const initialState = {
Cocktails: cocktailsData,
Liquors: liquorsData,
}

const cocktailsSlice = createSlice({
    name: 'Cocktails',
    initialState: initialState,
    reducers: {

    
        }
    }
);

export default cocktailsSlice.reducer