import React, { useEffect } from 'react'
import Header from './Header';
import useNowPLayingMovies from '../hooks/useNowPlayingMovies.jsx';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

export const Browse = () => {
  useNowPLayingMovies()
  
  return (
    <div>
        <Header />
        <Maincontainer />
        <Secondarycontainer />
    </div>
  )
}
export default Browse;