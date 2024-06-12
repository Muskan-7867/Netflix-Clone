import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
<h1 className='font-bold text-6xl '>{title}</h1>
<p className='py-6 text-lg w-1/4'>{overview}</p>
  <div className=''>
<button className='bg-white  text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'>
    ▶ Play</button>
<button className= 'mx-2 bg-white  text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'>More info</button>
    </div>
    </div>
  )
}

export default VideoTitle;