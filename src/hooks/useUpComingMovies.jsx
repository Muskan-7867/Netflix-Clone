import { API_options } from '../../utills/constants';
import { useDispatch } from 'react-redux';
import { addupcomingMovies } from '../../utills/movieslice.jsx';
import { useEffect } from 'react';

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getupcomingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
      const json = await response.json();
      console.log("from upcoming movies", json.results);
      dispatch(addupcomingMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
getupcomingMovies();
  }, [dispatch]);  // Added dispatch to the dependency array
}

export default useUpComingMovies;
