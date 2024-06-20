import React, { useState } from 'react';
import lang from '../../utills/languageconstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_options, Search_movie_url } from '../../utills/constants';
import { setSearchMovieDetails } from '../../utills/searchslice';
import MovieList from './MovieList';

const Gptsearchbar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const [searchMovie, setSearchMovie] = useState('');
    const [hasSearched, setHasSearched] = useState(false);  // Track if a search has been performed
    const { movieName, searchedMovie } = useSelector(store => store.search);
    const dispatch = useDispatch();

    console.log('Searched Movie:', searchedMovie);
    console.log('Movie Name:', movieName);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${Search_movie_url}${searchMovie}&include_adult=false&language=en-IN&page=1`, API_options);
            const data = await response.json();
            console.log('API Response:', data.results);
            const movies = data.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
            console.log('Dispatched action with:', { searchMovie, movies });
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
        setSearchMovie('');
        setHasSearched(true);  // Mark that a search has been performed
    };

    return (
        <>
            <div className='pt-[35%] md:pt-[10%] flex justify-center'>
                <form
                    onSubmit={handleSearch}
                    className='bg-black grid grid-cols-12 w-full md:w-1/2'>
                    <input
                        value={searchMovie}
                        onChange={(e) => setSearchMovie(e.target.value)}
                        type='text'
                        className='p-4 col-span-9 m-4'
                        placeholder={lang[langKey]?.gptSearchplaceholder}
                    />
                    <button className='py-2 px-4 col-span-3 m-4 bg-red-600 text-white rounded-lg'>
                        {lang[langKey]?.search}
                    </button>
                </form>
            </div>
            {hasSearched && ( // Only display results if a search has been performed
                searchedMovie.length > 0 ? (
                    <MovieList title={movieName} searchedMovie={true} movies={searchedMovie} />
                ) : (
                    <h1>Movies Not Found!!</h1>
                )
            )}
        </>
    );
};

export default Gptsearchbar;
