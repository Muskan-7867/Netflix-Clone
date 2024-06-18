 import { createSlice } from "@reduxjs/toolkit";
 const searchslice = createSlice({
    name:'search',
    initialState:{
        movieName:null,
        searchedMovie:null,
    },
    reducers:{
        setSearchMovieDetails:(state,action) =>{
            const {searchedMovies, movies} = action.payload;
            state.movieName = searchedMovies;
            state.searchedMovie  = movies;
        }
    }
})

   

export const {  setSearchMovieDetails,searchedMovies} = searchslice.actions;

export default searchslice.reducer;