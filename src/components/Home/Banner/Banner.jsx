import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-white">
      
      <div className="shadow rounded-lg p-12 max-w-5xl w-full flex flex-col items-center text-center">
        
       
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e2a] mb-6">
          Friends to keep close in your life
        </h1>

       
        <p className="text-slate-500 text-lg max-w-2xl mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <button className="btn bg-[#2d4f48] hover:bg-[#233d37] text-white border-none px-8 py-3 h-auto min-h-0 flex items-center gap-2 text-lg font-medium shadow-lg">
          <FaPlus/>
          Add a Friend
        </button>
        
      </div>
    </div>
  );
};

export default Banner;