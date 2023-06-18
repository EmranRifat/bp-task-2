import React from "react";
import lady from "../../Assets/lady.png"
import { BsBalloonFill } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { LuMusic4 } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

const Host = () => {
  return (
   <div>
     <h1 className="text-2xl font-semibold py-4">Meet your host</h1>

     <div className="bg-[#F0EFE9] rounded-xl w-full ">
   <div className=" py-12 justify-center flex ">
   <div className="card card-side md:w-3/5  bg-base-100 shadow-xl">
      <div>
      {/* <figure >
          <img 
          style={{'borderRadius':'50%'}}
          className=" w-24  ml-8 py-6"
            src={lady}
            alt="Movie"
          />
        </figure> */}
      <div className="ml-8">
      <div className="avatar indicator mt-8 ">
  <span className="indicator-item  mt-16 badge badge-secondary">nw</span> 
  <div className="w-20  rounded-lg ml-8">
    <img   style={{'borderRadius':'50%'}} src={lady} alt=""/>
  </div>
</div>
       <div className="text-center pb-8 ml-5 ">
       <h1 className="text-3xl font-bold">Sagario</h1>
          <p>Superhost</p>
       </div>
      </div>
      </div>

        <div className="card-body md:text-center">
       <div className=" divide-y w-1/2 ml-20 text-left divide-slate-300 space-y-2">
       <div  >
         <h2 className="text-2xl font-bold">316</h2>
          <p  ><small>Reviews</small></p>
         </div>
         <div >
         <h2 className="text-2xl font-bold ">4.86★</h2>
          <p  ><small>Rating</small></p>
         </div>
         <div >
         <h2 className="text-2xl font-bold">7</h2>
          <p  ><small>years hosting</small></p>
         </div>

       </div>
        </div>
      </div>
      
   </div>
   <div className="md:ml-36 space-y-4 pb-16">
        <div className="flex space-x-3">
        <BsBalloonFill className="text-2xl mt-1"></BsBalloonFill>
            <h1 className="text-lg text-gray-600"> Born in the 60s</h1>
        </div>
        <div className="flex space-x-3">
        <BsBriefcase className="text-2xl mt-1"></BsBriefcase>
            <h1 className="text-lg text-gray-600"> My work: coach</h1>
        </div>
        <div className="flex space-x-3">
        <LuMusic4 className="text-2xl mt-1"></LuMusic4>
            <h1 className="text-lg text-gray-600"> Favorite song in high school: Resistiré</h1>
        </div>
        <div className="flex space-x-3">
        <BsStars className="text-2xl mt-1"></BsStars>
            <h1 className="text-lg text-gray-600"> What makes my home unique: Good energy <br /> and feeling at  home</h1>
        </div>
        <div className="flex space-x-3">
        <FaHandshake className="text-2xl mt-1"></FaHandshake>
            <h1 className="text-lg text-gray-600"> For guests, I always: Help them enjoy Valencia</h1>
        </div>
        <p className="text-lg text-gray-600 ">Open and communicative, with donation of people and <br />happy  to welcome friends from the world at home.</p>

<div className=" ">
<button className="btn btn-link">Show more ></button> <br />

<Link to="/comingsoon"  className="btn btn-neutral">Message Host</Link>
</div>

      </div>
    </div>
   </div>
  );
};

export default Host;
