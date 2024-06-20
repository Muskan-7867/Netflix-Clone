import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,  
        open:false,
        id:"",
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
        },
        setopen:(state,action) => {
            state.open = action.payload;
        },
        getid:(state,action) =>{
            state.id= action.payload;
        }


    }
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies , getid, addupcomingMovies, setopen} = movieSlice.actions;
export default movieSlice.reducer;
