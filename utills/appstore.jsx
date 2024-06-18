import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './userSlice';
import movieReducer from './movieslice';
import gptReducer from './Gptslice';
import configreducer from './configslice'
import searchReducer from './searchslice'
const appstore = configureStore({
    reducer : {
    user:userReducer,
    movies:movieReducer,
    gpt : gptReducer,
    config:configreducer,
    search:searchReducer,
    },

})
export default appstore;