import React from 'react';
import { BsFileLock } from "react-icons/bs";
import { BiWifi,BiBuildingHouse } from "react-icons/bi";
import { TbWashDry3 } from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='md:w-2/3 my-12 '>
           <h1 className="text-2xl font-semibold pb-4 text-gray-800">About this place</h1> 
           <p>Nice and spacious room in the heart of Valencia, with double bed and a balcony. Silent because there is no traffic. Surrounded by all the landmarks , museums , cathedral , leisure, and close to the beach where you can go by bike, bus , tram or car if your means of transportation.
I would love to receive people wanting to enjoy my city and help in what I can .</p>

<button className="btn btn-link text-black -ml-4 mt-4">Show more ></button> <br />
<div className='divider'></div>

<h2 className="text-2xl font-semibold my-4 text-gray-800">What this place offers
</h2>

<div className="md:flex justify-between">
    <div className='space-y-4'>

<div className='flex space-x-2 '>
    <BsFileLock className='mt-1  text-2xl'></BsFileLock>
    <h1 className="text-lg text-gray-600">Lock on bedroom door</h1>
</div>
<div className='flex space-x-2'>
    <BiWifi className='mt-1 text-2xl'></BiWifi>
    <h1 className="text-lg text-gray-600">Wifi
</h1>
</div>
<div className='flex space-x-2'>
    <TbWashDry3 className='mt-1 text-2xl'></TbWashDry3>
    <h1 className="text-lg text-gray-600">Washers
</h1>
</div>
<div className='flex space-x-2'>
    <BiBuildingHouse className='mt-1 text-2xl'></BiBuildingHouse>
    <h1 className="text-lg text-gray-600">Private patio or balcony
</h1>
</div>
<div className='flex space-x-2'>
    <HiOutlineTruck className='mt-1 text-2xl'></HiOutlineTruck>
    <h1 className="text-lg text-gray-600">Pack ’n play/Travel crib</h1>
</div>
    </div>
    <div className='space-y-4'>
    
<div className='flex space-x-2 '>
    <ImSpoonKnife className='mt-1  text-2xl'></ImSpoonKnife>
    <h1 className="text-lg text-gray-600">Kitchen</h1>
</div>
<div className='flex space-x-2'>
    <BiWifi className='mt-1 text-2xl'></BiWifi>
    <h1 className="text-lg text-gray-600">Bathtub
</h1>
</div>
<div className='flex space-x-2'>
    <TbWashDry3 className='mt-1 text-2xl'></TbWashDry3>
    <h1 className="text-lg text-gray-600">Luggage dropoff allowed
</h1>
</div>
<div className='flex space-x-2'>
    <BiBuildingHouse className='mt-1 text-2xl'></BiBuildingHouse>
    <h1 className="text-lg text-gray-600">Security cameras on property
</h1>
</div>
<div className='flex space-x-2'>
    <HiOutlineTruck className='mt-1 text-2xl'></HiOutlineTruck>
    <h1 className="text-lg text-gray-600">Pack ’n play/Travel crib</h1>
</div>
    </div>
    
</div>
<Link to="/comingsoon" className="btn btn-outline mt-8">Show all 37 amenities</Link>
<div className='divider mt-12'></div>






        </div>
    );
};

export default About;