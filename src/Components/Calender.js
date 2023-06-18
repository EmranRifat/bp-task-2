import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { LuCalendarDays } from "react-icons/lu";

const Calender = () => {

    const [range, setRange]=useState(new Date());
    
  
    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
      if (!range?.to) {
        footer = <p>{format(range.from, 'PP')}</p>;
      } else if (range?.to) {
        footer = (
          <p>
            {format(range.from, 'PP')}–{format(range.to, 'PP')}
          </p>
        );
      }
    }
    return (
        <div>
        <h2 className="text-2xl font-semibold text-gray-700">Select checkout date</h2>
        <p className="text-sm text-gray-600">Minimum stay: 5 nights
</p>
         <div className='md:flex space-x-16'>
         <div >
           
           <DayPicker
    
 
    defaultMonth={new Date(2023, 20)}
      mode="range"
      min={2}
      max={4}
      selected={range}
      onSelect={setRange}
      footer={footer}
 
             />
 
  
           </div>
            <div >
    
           <DayPicker
          defaultMonth={new Date(2022, 8)}
      mode="range"
      min={3}
      max={6}
      selected={range}
      onSelect={setRange}
      footer={footer}
 />
 
           </div> 
 
         </div>
         <div className=' md:flex justify-between'>
<LuCalendarDays className='mt-10 ml-8 text-xl'></LuCalendarDays>
         <button className=" btn btn-link text-black mt-8 mr-8">Clear data</button>

         </div>
         <div className='divider'></div>
        </div>

    );
};

export default Calender;