import React from 'react';
import bed from "../Assets/bed2.png"
const Modal = () => {
    return (
        <>



 <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <p className=" text-xl font-bold"> Well Come to airbnb </p>
    <p className="">Airbnb your home  </p>
    <img className='h-auto w-28  mt-2 ' src={bed} alt="" />
   <h2 className="text-lg font-semibold text-red-600 " > Price :2450.00$</h2>
    <p className="py-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum maiores fugit voluptatem eaque cupiditate consequuntur! </p>
</div>
 
  </div>

        </>
    );
};

export default Modal;