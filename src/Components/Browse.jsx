import React, { useEffect } from 'react'
import Header from './Header';
import useNowPLayingMovies from '../hooks/useNowPlayingMovies.jsx';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies.jsx';
import useUpComingMovies from '../hooks/useUpComingMovies.jsx';

export const Browse = () => {
  useNowPLayingMovies()
  usePopularMovies()
  useUpComingMovies()
  
  return (
    <div>
        <Header />
        <Maincontainer />
        <Secondarycontainer />
    </div>
  )
}
export default Browse;