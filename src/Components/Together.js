import React from 'react';
import Room from './Room/Room';
import Host from './Room/Host';
import About from './About';
import Calender from './Calender';
import SearchForm from '../Pages/Bedroom/SearchForm';
import Bedroom from '../Pages/Bedroom/Bedroom';

const Together = () => {
    return (
       <div>
       <Bedroom></Bedroom>

         <div className='md:flex  mt-10'>
            <div>
                <Room></Room>
                <Host></Host>
                <About></About>
                <Calender></Calender>
            </div>
         
                <SearchForm></SearchForm>
            
        </div>
       </div>
    );
};

export default Together;