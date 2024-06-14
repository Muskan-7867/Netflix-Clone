import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,  
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },

        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },

        addupcomingMovies: (state, action) => {
            state.UpComingMovies = action.payload;
        }


    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies , addupcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
