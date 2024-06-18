import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Add a check to ensure movies is not null or undefined
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

 

  return (
    <div className="px-6">
      <h1 className="md:text-3xl text-lg text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
