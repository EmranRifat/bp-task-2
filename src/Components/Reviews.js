import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import GreatReview from "./GreatReview";

const Reviews = () => {
  return (
    <div >
      <h1 className="text-2xl font-bold pb-8">★ 4.87.171 reviews</h1>

      <div className="md:flex justify-around space-x-8">


        <div className="w-2/5">
          <div className=" flex justify-between">
            <h1>Cleanliness</h1>
            <div className="flex space-x-4 mt-2">
              <input

                type="range"
                min={0}
                max="100"
                value="90"
                className="range range-xs h-2 w-60 mt-1"
              />
              <h1>5.9</h1>
            </div>
          </div>
          <div className=" flex justify-between">
            <h1>Communication</h1>
            <div className="flex space-x-4 mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value="85"
                className="range range-xsh-2 h-2  w-60 mt-1"
              />
              <h1>4.9</h1>
            </div>
          </div>
          <div className=" flex justify-between">
            <h1>Check-in</h1>
            <div className="flex space-x-4 mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value="100"
                className="range range-xs h-2 w-60 mt-1"
              />
              <h1>5.0</h1>
            </div>
          </div>
        </div>
      

        <div className="w-2/5">

          <div className=" flex justify-between">
            <h1>Accuracy</h1>
            <div className="flex space-x-4 mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value="95"
                className="range range-xs h-2 w-60 mt-1"
              />
              <h1>4.9</h1>
            </div>
          </div>
          <div className=" flex justify-between">
            <h1>Location</h1>
            <div className="flex space-x-4 h-2 mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value="95"
                className="range range-xs h-2  w-60 mt-1"
              />
              <h1>4.9</h1>
            </div>
          </div>
          <div className="flex justify-between">
            <h1>Value
</h1>
            <div className="flex space-x-4 mt-2">
              <input
                type="range"
                min={0}
                max="100"
                value="100"
                className="range range-xs h-2  w-60 mt-1"
              />
              <h1>4.8</h1>
            </div>
          </div>
        </div>
        </div>

        <GreatReview></GreatReview>
     
    </div>
  );
};

export default Reviews;
