import React from 'react'
import { IMG_CDN_URL } from '../../utills/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='md:w-48 w-36  pr-4'>
        <img alt='Movie card' 
        src={IMG_CDN_URL + posterPath }>
            
        </img>
        
    </div>
  )
}

export default MovieCard