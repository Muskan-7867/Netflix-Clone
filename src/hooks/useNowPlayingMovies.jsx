import { API_options } from '../../utills/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utills/movieslice.jsx';
import { useEffect } from 'react';

const useNowPLayingMovies = () =>{
const dispatch = useDispatch()
  const getNowPlayingMovies = async  () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options)
    const json =  await data.json();
    console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  },[])
}

export default useNowPLayingMovies;