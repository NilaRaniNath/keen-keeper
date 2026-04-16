import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
            
      
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                  isActive 
                  ? "bg-[#2d4f48] text-white hover:bg-[#233d37]" 
                  : "text-slate-500 hover:bg-slate-100"
                }`
              }

            >
                {children}
            </NavLink>
    );
};

export default MyNavLink;