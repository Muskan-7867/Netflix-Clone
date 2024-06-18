import { API_options } from '../../utills/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utills/movieslice.jsx';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
      const json = await response.json();
    
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]);  // Added dispatch to the dependency array
}

export default useNowPlayingMovies;
