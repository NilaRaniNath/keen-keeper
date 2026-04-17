
import TabBox from '../TabBox/TabBox';
import FriendCard from '../friendCard/FriendCard';
import { HiH1 } from 'react-icons/hi2';
import { RingLoader } from 'react-spinners';
import useFriend from '../../../hooks/useFriend';


const Friends = () => {
    const {frnds , loading} =useFriend();

    return (

        <div>
            <TabBox frnds={frnds}></TabBox>
        <div className='container mx-auto max-w-5xl w-full'> 
            <h2 className='text-2xl'>Your Friends</h2>

           {loading ? (
            <div className='flex justify-center items-center'>
                <RingLoader />
                </div>


           ) : ( <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {frnds.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
        ))},
         </div>)}
          

        </div>
        </div>
    );
};

export default Friends;