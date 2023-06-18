import React from 'react';
import DatePicker from 'react-datepicker'
import { useState } from 'react';

    const SearchForm = () => {
        const [location,setLocation]=useState('')
        const [arrivalDate,setArrivalDate]=useState(new Date())
        const [departureDate,setDepartureDate]=useState(
         new Date(arrivalDate.getTime() + 24 * 60 * 60 * 100))
       
        //  const navigate=useNavigate()
       
         
      
       
       
    return (
        <div  className='md:w-2/5  h-1/2 sticky top-0 right-0  ml-6 border rounded-lg shadow-lg  p-6 px-12 '>

        <h1 className='text-xl font-semibold text-gray-700'>
          Where do you want to go
        </h1>
  
        <form className='mt-6 md:w-72'>
          <div className='shadow-md rounded-md my-2 p-3'>
            <label
              htmlFor='location'
              className='block text-md font-bold text-gray-800'
            >
              Location
            </label>
            <input
              type='text'
              name='location'
              value={location}
              required
              placeholder='Add city, Landmark or address'
              className=' w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
            />
          </div>
  
          <div className='md:flex justify-between'>
            <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
              <div>
                <p className='block text-sm text-gray-500'>Arrival</p>
                <DatePicker 
                 selected={arrivalDate} 
                 className='w-2/3' 
                   
                 />
              </div>
  
              <div className='h5 w-5' />
            </div>
            <div className='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
              <div>
                <p className='block text-sm text-gray-500'>Departure</p>
                <DatePicker 
                onChange={(date)=>setDepartureDate(date)}
                selected={departureDate} 
                className='md:w-2/3' 
  
                />
              </div>
  
              <div className='h5 w-5' />
            </div>
          </div>
  
          <div className='mt-6'>

<label htmlFor="my-modal-3" className="btn text-white bg-[#FF385C] w-full">Check Availibity</label>

          </div>
        </form>
      </div>
      
    );
};

export default SearchForm;