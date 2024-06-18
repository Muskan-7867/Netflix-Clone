import { API_options } from '../../utills/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../../utills/movieslice.jsx';
import { useEffect } from 'react';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
      const json = await response.json();
     
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      
    }
  }

  useEffect(() => {
   getPopularMovies();
  }, [dispatch]);  // Added dispatch to the dependency array
}

export default usePopularMovies;
