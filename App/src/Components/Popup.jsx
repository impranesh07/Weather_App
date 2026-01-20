import React from 'react'
import {Bomb} from 'lucide-react'
const Popup = () => {
  return (
    <div className='inset-0 bg-black/20 p-1 h-56 w-56 rounded-md flex-col flex justify-center gap-2.5 z-99'>
        <div className="bom font-bold h-[10vh] w-full text-red-800 p-1 flex justify-center">
              <Bomb className='h-full w-[50%]' />
        </div>
         <div className="text font-sans tracking-wide  flex justify-center items-center h-[10vh] w-full lowercase">
            <h1 className='text-4xl text-red-800'>Not Found!</h1>
         </div>
    </div>
  )
}

export default Popup
