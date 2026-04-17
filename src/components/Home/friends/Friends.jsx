import React, { use, useState } from 'react';
import TabBox from '../TabBox/TabBox';

const friendsPromise= fetch("/public/data.json").then(res => res.json());


const Friends = () => {
    const [frnds, setFrnds] = useState([])
const friends =use(friendsPromise);


    return (

        <div>
            <TabBox frnds={frnds}></TabBox>
        <div className='mb-8 container mx-auto'> 
            <h2 className='text-2xl'>Your Friends</h2>
          

        </div>
        </div>
    );
};

export default Friends;