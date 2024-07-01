import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchedMovie = false }) => {
  // Add a check to ensure movies is not null or undefined
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className="px-6">
      <h1 className={`${searchedMovie ? "text-black" : "text-white"} md:text-3xl text-lg py-4`}>
        {title}
      </h1>
      <div className="flex overflow-x-scroll  no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movieid={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
