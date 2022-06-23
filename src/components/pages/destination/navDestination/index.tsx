import React from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Europa from "../europa";
import Mars from "../mars";
import Moon from "../moon";
import Titan from "../titan";


const NavDestination:React.FC = () => {


  return (
    <>
      <div>
         <NavLink to="0">Europa</NavLink> 
         <NavLink to="1" >Mars</NavLink> 
         <NavLink to="2" >Moon</NavLink> 
         <NavLink to="3" >Titan</NavLink> 
      </div>
      {/* <Outlet/> */}
      {/* <h1>aa</h1> */}
    </>
  )
}


export default NavDestination