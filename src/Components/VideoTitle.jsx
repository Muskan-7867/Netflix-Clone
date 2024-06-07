import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='px-12 pt-36'>
<h1 className='font-bold text-6xl '>{title}</h1>
<p className='py-6 text-lg w-1/4'>{overview}</p>
  <div className=''>
<button className='bg-gray-500 rounded-lg text-white px-12 p-4 text-xl bg-opacity-50'>
    ▶ Play</button>
<button className= 'mx-2 bg-gray-500 rounded-lg text-white px-12 p-4 text-xl bg-opacity-50'>More info</button>
    </div>
    </div>
  )
}

export default VideoTitle;