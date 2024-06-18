import React, { useRef, useState } from 'react';
import lang from '../../utills/languageconstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_options, Search_movie_url } from '../../utills/constants';
import { setSearchMovieDetails } from '../../utills/searchslice';

const Gptsearchbar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const [searchMovie, setSearchMovie] = useState('');
    const searchedMovie = useSelector(store => store.search.searchedMovie);
    const movieName = useSelector(store => store.search);
    const dispatch = useDispatch();

    console.log(searchedMovie);
    console.log(movieName);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${Search_movie_url}${searchMovie}&include_adult=false&language=en-IN&page=1`, API_options);
            const data = await response.json();
            console.log(data.results); 
            const movies = data.results;
            dispatch(setSearchMovieDetails({ searchedMovies: searchedMovie, movies: movies }));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
        setSearchMovie('');
    };

    return (
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
    );
};

export default Gptsearchbar;
