import React from 'react';
import { FaHome, FaHistory, FaChartBar } from "react-icons/fa";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
 
  return (
    <div className="navbar bg-base-100 px-4 md:px-12 py-4 border-b border-gray-100 shadow-sm">
    
      <div className="flex-1">
        <h1 className="text-2xl font-extrabold text-[#1a2e2a]">
          Keen<span className="text-[#2d4f48]">Keeper</span>
        </h1>
      </div>

     
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 gap-0 md:gap-2 font-medium">
         
          <li>
            <MyNavLink to={"/"}> <FaHome/>Home</MyNavLink>
          </li>
          
          <li>
            
            <MyNavLink to={"/timeline"}><FaHistory/>Timeline</MyNavLink>
          </li>

          <li>
            
             <MyNavLink to={"/stats"}><FaChartBar/>Stats</MyNavLink>

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;