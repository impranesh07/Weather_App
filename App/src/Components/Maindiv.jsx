import React, { useState } from 'react'
import {Search} from 'lucide-react'
import Center from './Center'
import Cards from './Cards'
import Popup from './Popup'



const Maindiv = () => {
  
const [text, settext] = useState('')
const [Data, setData] = useState(()=>{
 const value=localStorage.getItem('name')
 return value?JSON.parse(value):{}
})

const [error, seterror] = useState(Data.cod)
//console.log(error);




async function preventLoad(e) {
  e.preventDefault();
  settext(text);
  await Call_data(text);
  settext('');
}

 //Api call
   async function Call_data(name) {
    const api_key="ede65eb37282192f8b43c113115a7838";
    //let name="Mumbai"
     const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}`)
     const data= await response.json();
     const value=JSON.stringify(data)
     localStorage.setItem('name',value)
     const get_value=JSON.parse(localStorage.getItem('name'))
     console.log(get_value);
     
     setData(get_value);
   }


  return (
    <div className="h-[90vh] w-[40%] bg-amber-200 rounded-2xl p-3 blur-[0.5px] relative">
        <div className="p-3 pb-10 ">
            <form className='gap-2.5 flex'>

            <input type='text' className='font-medium tracking-wider border-2 border-amber-200 rounded-2xl p-3 text-amber-500
            outline-none shadow-[0px_19px_38px_rgba(0,0,0,0.3),0px_15px_12px_rgba(0,0,0,0.22)]' placeholder='Enter City name' value={text}
            onChange={(elem)=>(
             settext(elem.target.value)
            )}></input>

            <button className='topbtn p-3 font-bold bg-amber-200 rounded-[50%] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] text-2xl' onClick={preventLoad}>{<Search />}</button>
          </form>
        </div>
       <Center info={Data} />
       <div className="box_card flex overflow-hidden">
       <Cards Main_data={Data} />
       
       </div>
       <div className="absolute top-[40%] left-[30%] ">
        {/*  <Popup/> */}
           

       </div>
    </div>
  )
}

export default Maindiv
