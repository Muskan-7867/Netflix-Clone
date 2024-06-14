import React from 'react'
import { IMG_CDN_URL } from '../../utills/constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div>
        <img alt='Movie card' 
        src={IMG_CDN_URL + posterPath }>
            
        </img>
        
    </div>
  )
}

export default MovieCard