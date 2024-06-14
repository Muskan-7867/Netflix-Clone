import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  // Add a check to ensure movies is not null or undefined
  if (!movies || movies.length === 0) {
    return <div>No movies available</div>;
  }

  console.log("from movie list", movies[0]);

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
         
          {movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;