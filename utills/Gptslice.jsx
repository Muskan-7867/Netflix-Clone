import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
    name: 'gpt',
    initialState: {
         showgptsearch:false
    },
    reducers : {
        togglegptsearchview: (state) =>{
         state.showgptsearch = !state.showgptsearch
        }
    },

})

export const { togglegptsearchview} = Gptslice.actions;
export default Gptslice.reducer;
