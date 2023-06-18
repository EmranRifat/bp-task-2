import React from 'react';
import air from '../../Assets/Airbnb-logo.png';
import { TbWorld } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (

    <div className="navbar bg-base-100 border-b-2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img className="w-36 ml-20" src={air} alt="" />
    {/* <href to="/" className=" normal-case text-2xl text-red-600 font-bold pl-4">airbnb</href> */}
  </div>
  <div className="navbar-center hidden lg:flex">

  <div className="relative flex ">
            <input
              type="search"
              className="relative m-0 -mr-0.5 h-12 flex-auto shadow  rounded-full w-[18rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary placeholder:text-xl"
              placeholder="Start your search .."
              aria-label="Search"
              aria-describedby="button-addon1"
            />
<button className=" absolute right-0 text-gray-200 bg-red-500 h-10 w-10 mr-1 mt-1 btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

          </div>


    <ul className="menu menu-horizontal px-1">
    <label htmlFor="my-modal-3" className="btn  text-gray-600 btn-ghost rounded" >Airbnb your home</label>


<button className="btn text-gray-600 btn-ghost rounded">  <TbWorld className=" text-xl"></TbWorld>
</button>

      <li tabIndex={0}>
        <details className="mt-2 border-2 rounded-full">
          <summary><BsPersonCircle className="text-xl"></BsPersonCircle></summary>
          <ul className="p-2 pr-8">
          <li>  <Link to="/login" ><a>Login </a></Link></li>
           <li> <Link to="/signup"><a>SignUp</a></Link></li>
            <div className="divider"></div>
            <li><a>Airbnb your home</a></li>
            <li><Link to="/comingsoon">Help</Link></li>
          </ul>
        </details>
      </li>
      {/* <li><a>Item 3</a></li> */}
    </ul>
  </div>
 
</div>
  );
};

export default Navbar;