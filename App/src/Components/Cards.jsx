import React, { useState } from 'react'
import {Wind } from 'lucide-react'
import {ThermometerSun} from 'lucide-react'

const Cards = ({Main_data}) => {
 const tempo=Main_data.main?.temp;
 const t=(tempo-273.15).toFixed(2);
  return (
    <div className="container w-full pt-2">
       <div className="box h-[100px] w-full bg-amber-500 p-3 rounded-lg">
         <div className="tem flex gap-1">
            <ThermometerSun/> <p>Temp:-{t}<span>&deg;C</span></p>
         </div>
         <div className="wind flex gap-1 p-1">
            <Wind/>
            <p>Speed:{Main_data.wind?.speed}</p>
         </div>
         <div className="humadity">
            <p>Humadity:{Main_data.main?.humidity}</p>
         </div>
       </div>
    </div>
  )
}
export default Cards
