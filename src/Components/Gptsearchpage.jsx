import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggestions from './Gptsuggestions'

const Gptsearchpage = () => {
  return (
    <div>
       <div className="absolute  -z-10 w-full h-full">
        <img className="h-full w-full object-cover" src='src/assets/netflix.jpg' alt="Netflix" />
      </div>
      <Gptsearchbar />
      <Gptsuggestions />
    </div>
  )
}

export default Gptsearchpage