import { Tab } from '@headlessui/react';
import React from 'react';
import bed1 from '../../Assets/bed1.png'
import bed2 from '../../Assets/bed2.png'
import bed3 from '../../Assets/bed3.png'
import bed4 from '../../Assets/bed4.png'
import bed from '../../Assets/bed.png'
import { Link } from 'react-router-dom';
const Bedroom = () => {
    return (
        <div >
<div className='mt-4'>
<h1 className='text-2xl font-semibold '>Enjoy historic Valencia and close to the beach.</h1>
<div className='md:flex justify-between '>
<div>
<Tab.Group>
      <Tab.List className="md:flex flex-wrap">
        <Tab>171 reviews ./ </Tab>
        <p className='text-gray-600'> Superhost ./ </p>
        <Tab> Valencia, Spain</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
</div>
<div className='-mt-8'>
        <Link to='/comingsoon' className='btn btn-ghost' >Share</Link>
        <Link to='/comingsoon' className='btn btn-ghost' >Save</Link>
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



</div>
    );
};

export default Bedroom;