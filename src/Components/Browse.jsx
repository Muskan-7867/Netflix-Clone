import React, { useEffect } from 'react'
import Header from './Header';
import { json } from 'react-router-dom';
import { API_options } from '../../utills/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utills/movieslice';

export const Browse = () => {
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
  return (
    <div>
        <Header />
    </div>
  )
}
export default Browse;