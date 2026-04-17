import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../components/context/TimelineContext';
import {CallImg} from '../../assets/call.png';
import {textImg} from "../../assets/text.png";
import {vdieoImg} from '../../assets/video.png'



const Timeline = () => {
  const { timeline } = useContext(TimelineContext); 
  const [filterType, setFilterType] = useState("all");

  const getIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "call": return <img src={CallImg} className="text-gray-600" />;
      case "text": return <img src={textImg} className="text-gray-600" />;
      case "video": return <img src ={vdieoImg} className="text-gray-600" />;
     
    }
  };

 
  const filteredData = filterType === "all" 
    ? timeline 
    : timeline.filter(item => item.type.toLowerCase() === filterType.toLowerCase());

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
      <h2 className="text-4xl font-extrabold text-slate-800 mb-6">Timeline</h2>
      <div className="mb-8">
        <select 
          className=" w-full max-w-xs bg-gray-50 text-gray-500 font-medium"
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
        >
          <option value="all">All Interactions</option>
          <option value="call">Calls</option>
          <option value="text">Texts</option>
          <option value="video">Videos</option>
        </select>
      </div>

    
      <div className="space-y-4">
      
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div 
              key={index} 
              className="border-2 border-blue-200 rounded-xl p-5 flex items-center gap-5 bg-white hover:bg-slate-50 transition-all cursor-default"
            >
              <div className="p-4 bg-white-100 rounded-xl">
                {getIcon(item.type)}
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 capitalize">
                  {item.type} <span className="font-normal text-slate-400">with {item.name}</span>
                </h4>
                <p className="text-slate-400 font-medium mt-1">{item.next_due_date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-slate-400 border-2 border-dashed border-gray-100 rounded-xl">
            No {filterType} interactions found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;