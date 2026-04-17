import React, { useEffect, useState } from 'react';

const useFriend = () => {
     const [frnds, setFrnds] = useState([]);
     const [ loading, setLoading] =useState(true);
     useEffect(() => {
    fetch("/public/data.json") 
      .then((res) => res.json())
      .then((data) => setFrnds(data));
    setLoading(false);
    
      ;
  }, []);




    return {frnds , loading}
};

export default useFriend;