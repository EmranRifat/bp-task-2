import React from "react";
import SearchForm from "../../Pages/Bedroom/SearchForm";
import lady from "../../Assets/lady.png";
import { BiBed } from "react-icons/bi";
import { FaShower } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiSecurityscorecard } from "react-icons/si";

const Room = () => {
  return (
    <div>
      <div className="md:flex justify-between ">
        <div>
          <div className="md:flex justify-between ">
            <h1 className="text-2xl font-semibold">
              {" "}
              Room in a rental unit hosted by Sagrario
            </h1>
            <div>
              <div className="avatar online">
                <div className="w-12 ml-16 mr-4 rounded-full">
                  <img src={lady} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="md:flex  gap-2  mt-2">
              <div className="card w-56 bg-base-100 border ">
                <div className="card-body ">
                  <div className="flex  space-x-2">
                    <BiBed className="text-xl"></BiBed>
                    <p>1 double bed</p>
                  </div>
                </div>
              </div>
              <div className="card w-56 bg-base-100 border ">
                <div className="card-body ">
                  <div className="flex  space-x-2">
                    <FaShower className="text-xl"></FaShower>
                    <p>Share Bathroom</p>
                  </div>
                </div>
              </div>
              <div className="card h-28 w-56 bg-base-100 border ">
                <div className="px-6 py-6 ">
                  <div className="flex space-x-3 ">
                    <FaHouseUser className="text-xl mt-4"></FaHouseUser>
                    <p>
                      Host and other <br /> guests may be here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <IoIosBed className="text-2xl mt-3 s "></IoIosBed>
              <div>
                <h1 className="text-xl font-semibold">Room in a rental unit</h1>
                <p className="text-gray-500">
                  Your own room in a home, plus access to shared spaces.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <MdOutlineScreenSearchDesktop className="text-2xl mt-3 s "></MdOutlineScreenSearchDesktop>
              <div>
                <h1 className="text-xl font-semibold">Dedicated workspace</h1>
                <p className="text-gray-500">
                  A room with wifi that’s well-suited for working..
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <MdOutlinePersonAddAlt className="text-2xl mt-3 s "></MdOutlinePersonAddAlt>
              <div>
                <h1 className="text-xl font-semibold">
                  Sagrario is a Superhost
                </h1>
                <p className="text-gray-500">
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p>
              </div>
            </div>
          </div>

          <div className="divider"></div>

          <div className="flex">
            <SiSecurityscorecard className="mt-4 mx-2"></SiSecurityscorecard>
            <p className=" ">
              Some info has been automatically translated.<button className="btn btn-active btn-link">Show original language</button>
            </p>
          </div>
          <div className="divider"></div>
        </div>

        {/* <SearchForm></SearchForm> */}
      </div>
    </div>
  );
};

export default Room;
