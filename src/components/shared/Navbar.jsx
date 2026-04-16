import { FaHome, FaHistory, FaChartBar } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-12 py-4 border-b border-gray-100 shadow-sm">
      {/* Brand Name/Logo */}
      <div className="flex-1">
        <h1 className="text-2xl font-extrabold text-[#1a2e2a]">
          Keen<span className="text-[#2d4f48]">Keeper</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 gap-2 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                  isActive 
                  ? "bg-[#2d4f48] text-white hover:bg-[#233d37]" 
                  : "text-slate-500 hover:bg-slate-100"
                }`
              }
            >
              <FaHome/>
              <span>Home</span>
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                  isActive 
                  ? "bg-[#2d4f48] text-white hover:bg-[#233d37]" 
                  : "text-slate-500 hover:bg-slate-100"
                }`
              }
            >
              <FaHistory/>
              <span>Timeline</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-lg transition-all ${
                  isActive 
                  ? "bg-[#2d4f48] text-white hover:bg-[#233d37]" 
                  : "text-slate-500 hover:bg-slate-100"
                }`
              }
            >
              <FaChartBar/>
              <span>Stats</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;