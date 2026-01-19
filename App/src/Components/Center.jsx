import React, { useState } from 'react'
import {Sun} from 'lucide-react'

const Center = ({info}) => {
  //console.log(info);
  const [Date_time, setDate_time] = useState(new Date())
  function updateClock() {
    setTimeout(() => {
      setDate_time(new Date());
    }, 1000);
  }
  updateClock()
  return (
    <div className="parent h-[55vh] w-full rounded-md p-3 bg-[linear-gradient(53deg,_rgba(34,193,195,1)_0%,_rgba(242,191,5,1)_100%)]">
    <div className="date_time flex justify-between">
      <p>{Date_time.toLocaleDateString('in')}</p>
      <p>{Date_time.toLocaleTimeString()}</p>
    </div>  
    <div className="h-[43vh] flex items-center">
      <div className="font-bold h-32 w-3xs p-3 flex items-center justify-center">
        {/* sun img */}
        
        <img src={`https://openweathermap.org/img/wn/${info.weather?.[0]?.icon}@4x.png`}></img>
      </div>
        <div className="text p-2 font-sans tracking-wide ">
            <h6 className='font-medium'>Today/<span>{info.weather?.[0]?.description}</span><span>&deg;</span></h6>
            <h1 className='font-bold text-4xl pt-1 pb-1'>{info.name}</h1>
        <div className="down flex justify-between gap-16">
            <p>Lon:{info.coord?.lon}</p>      
            <p>lat:{info.coord?.lat}</p> 
        </div>
        </div>
    </div>
    <div className="box w-full p-3 flex justify-between">
      <p>Visibility:{info.visibility}</p>
      <p>Cod:{info.cod}</p>
      <p>Timezone:{info.timezone}</p>
      <p>dt:{info.dt}</p>
      <p>Pressure:{info.main?.pressure}</p>
    </div>
    </div> 
  )
}

export default Center
