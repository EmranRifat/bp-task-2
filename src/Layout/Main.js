import React from "react";
import Navbar from "../Share/Navbar/Navbar";
import Bedroom from "../Pages/Bedroom/Bedroom";
import { Outlet } from "react-router-dom";
import Room from "../Components/Room/Room";
import Host from "../Components/Room/Host";
import About from "../Components/About";
import Calender from "../Components/Calender";
import Reviews from "../Components/Reviews";
import Together from "../Components/Together";
import Map from "../Components/Map";
import Explore from "../Components/Explore";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-24 space-y-12">
        {/* <Bedroom></Bedroom> */}
        <div></div>
        <Together></Together>
        {/* <Room></Room>
            <Host></Host>
            <About></About>   
            <Calender></Calender>  */}
        <Reviews></Reviews>
        <Map></Map>

        <Outlet></Outlet>
      </div>
      <Explore></Explore>

    </div>
  );
};

export default Main;
