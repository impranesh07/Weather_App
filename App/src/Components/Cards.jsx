import React from 'react'
import {Wind } from 'lucide-react'
import {ThermometerSun} from 'lucide-react'

const Cards = () => {
  return (
    <div className="container w-full p-4">
       <div className="box h-[100px] w-[150px] bg-amber-500 p-3 rounded-lg">
         <div className="tem flex gap-1">
            <ThermometerSun/> <p>Temp<span>&deg;C</span> </p>
         </div>
         <div className="wind flex gap-1 p-1">
            <Wind/>
            <p>Wind</p>
         </div>
         <div className="humadity">
            <p>Humadity</p>
         </div>
       </div>
    </div>
  )
}
export default Cards
