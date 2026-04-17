import React from 'react';
const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;
 
  const getStatusStyles = (status) => {
    switch (status) {
      case "overdue":
        return "bg-red-100 text-red-600";
      case "almost due":
        return "bg-[#f3b14e] text-white";
      case "on-track":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center max-w-70 w-full hover:shadow-md transition-shadow">
      
     
      <div className="avatar mb-4">
        <div className="w-24 rounded-full ring ring-[#2d4f48] ring-offset-base-100 ring-offset-2">
          <img src={picture} alt={name} />
        </div>
      </div>

    
      <h3 className="text-xl font-bold text-[#1a2e2a] mb-1">{name}</h3>

     
      <p className="text-slate-400 text-sm mb-4">
        {days_since_contact}d ago
      </p>

  
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags?.map((tag, index) => (
          <span 
            key={index} 
            className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100"
          >
            {tag}
          </span>
        ))}
      </div>

      
      <div className={`px-6 py-2 rounded-full text-sm font-semibold capitalize ${getStatusStyles(status)}`}>
        {status}
      </div>
      
    </div>
  );
};

export default FriendCard;