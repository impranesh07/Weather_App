import React from 'react'
import {Search} from 'lucide-react'
import Center from './Center'
import Cards from './Cards'

const Maindiv = () => {
  return (
    <div className="h-[90vh] w-[40%] bg-amber-200 rounded-2xl p-3 blur-[0.5px]">
        <div className="p-3 flex gap-2.5 pb-10 ">
            <input type='text' className='font-medium tracking-wider border-2 border-amber-200 rounded-2xl p-3 text-amber-300
            outline-none shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)]' placeholder='Enter City name'></input>

            <button className='topbtn p-3 font-bold bg-amber-200 rounded-[50%] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-2xl'>{<Search />}</button>
        
        </div>
       <Center/>
       <div className="box_card flex overflow-hidden">
       <Cards/>
       <Cards/>
       <Cards/>
       </div>

    </div>
  )
}

export default Maindiv
