import React from 'react'
import {Sun} from 'lucide-react'

const Center = () => {
  return (
    <div className="h-[55vh] w-full rounded-md p-3 bg-[linear-gradient(53deg,_rgba(34,193,195,1)_0%,_rgba(242,191,5,1)_100%)] flex items-center">
      <div className="font-bold h-32 w-3xs p-3 flex items-center justify-center">
        <Sun className='sun  fill-amber-500 
    text-amber-500
    filter 
    drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] 
    drop-shadow-[0_0_20px_rgba(245,158,11,0.6)] 
    drop-shadow-[0_0_40px_rgba(217,119,6,0.4)]'
    />
      </div>
        <div className="text p-2 font-sans tracking-wide">
            <h6 className='font-medium'>Today</h6>
            <h1 className='font-bold text-4xl pb-3 pt-2'>New Work</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam necessitatibus sint.</p>
        </div>
        
    </div>
  )
}

export default Center
