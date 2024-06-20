import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        movieName: '',
        searchedMovie: [],
    },
    reducers: {
        setSearchMovieDetails: (state, action) => {
            const { searchMovie, movies } = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = movies;
          
        }
    }
});

export const { setSearchMovieDetails,searchMovie } = searchSlice.actions;
export default searchSlice.reducer;
