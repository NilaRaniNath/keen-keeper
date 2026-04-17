import React from 'react';

const TabBox = ({frnds}) => {
      const totalFriends = frnds?.length || 0;
  
  const onTrackCount = frnds?.filter(f => f.status === "on-track").length || 0;
  
  const needAttentionCount = frnds?.filter(
    (f) => f.status === "overdue" || f.status === "almost due"
  ).length || 0;

  

  return (
   <div className='container mx-auto max-w-5xl w-full items-center justify-center px-4 bg-white'>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
      
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <h2 className="text-4xl font-bold text-[#2d4f48]">{totalFriends}</h2>
        <p className="text-gray-500">Total Friends</p>
      </div>

      
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <h2 className="text-4xl font-bold text-[#2d4f48]">{onTrackCount}</h2>
        <p className="text-gray-500">On Track</p>
      </div>

     
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <h2 className="text-4xl font-bold text-[#2d4f48]">{needAttentionCount}</h2>
        <p className="text-gray-500">Need Attention</p>
      </div>

     
      <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
        <h2 className="text-4xl font-bold text-[#2d4f48]">12</h2>
        <p className="text-gray-500">Interactions This Month</p>
      </div>
    </div>
   </div>
    );
};

export default TabBox;