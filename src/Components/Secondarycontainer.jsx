import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log(nowPlayingMovies);
  const PopularMovies = useSelector((store) => store.movies.PopularMovies);
  const UpComingMovies = useSelector((store) => store.movies.UpComingMovies);

  
  return (
   nowPlayingMovies && (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Trending "} movies={nowPlayingMovies} />
      <MovieList title={"Popular"} movies={PopularMovies} />
      <MovieList title={"Up Coming"} movies={UpComingMovies} />
      <MovieList title={"Horror "} movies={nowPlayingMovies} />
p Coming
      </div>
      

    </div>
    )
  );
};

export default SecondaryContainer;
