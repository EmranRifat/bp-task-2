import { Tab } from '@headlessui/react';
import React from 'react';
import bed1 from '../../Assets/bed1.png'
import bed2 from '../../Assets/bed2.png'
import bed3 from '../../Assets/bed3.png'
import bed4 from '../../Assets/bed4.png'
import bed from '../../Assets/bed.png'
import { Link } from 'react-router-dom';
import Modal from '../../Share/Modal';
const Bedroom = () => {
    return (
        <div >
<div className='mt-4'>
<h1 className='text-2xl font-semibold '>Enjoy historic Valencia and close to the beach.</h1>
<div className='md:flex display-block hidden justify-between '>

<div className="md:flex py-2 display-block hidden">
<p>★4.87.</p>
<label htmlFor="my-modal-3" className="link link-neutral font-semibold px-4">171 reviews</label>
<p>Super host</p>

</div>
<div className='-mt-8'>
   <label htmlFor="my-modal-3" className="btn  btn-ghost">Share</label>
   <label htmlFor="my-modal-3" className="btn  btn-ghost">Save</label>
    </div>
</div>
    
</div> 

<div className='grid lg:grid-cols-2 gap-2 '>
  <img className='w-full h-72 rounded-l-lg ' src={bed1} alt="" />

  <div className='grid lg:grid-cols-2 gap-2 ml-4'>
  <img className='w-full h-36 rounded-r-lg' src={bed2} alt="" />
  <img className='w-full h-36 rounded-r-lg' src={bed} alt="" />
  <img className='w-full h-36 rounded-r-lg' src={bed4} alt="" />
  <img className='w-full h-36 rounded-r-lg' src={bed2} alt="" />

  </div>
</div>
<Modal className="lg:hidden"></Modal>


</div>
    );
};

export default Bedroom;