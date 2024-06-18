import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video px-6 md:px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
<h1 className='font-bold md:text-6xl text-2xl '>{title}</h1>
<p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
  <div className='my-4 md:m-0'>
<button className='bg-white  text-black px-3  md:px-12  py-1 md:py-4 text-xl rounded-lg hover:bg-opacity-80'>
    ▶ Play</button>
<button className= '  hidden md:inline-block mx-2 bg-white  text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-80'>More info</button>
    </div>
    </div>
  )
}

export default VideoTitle;