import React, { useContext} from 'react';
import { useParams } from 'react-router';
import useFriend from '../../hooks/useFriend';
import { RingLoader } from 'react-spinners';
import { MdEdit } from 'react-icons/md';
import { FaArchive, FaHistory, FaPhoneAlt, FaRegEnvelope, FaTrashAlt, FaVideo } from 'react-icons/fa';
import { TimelineContext } from '../../components/context/TimelineContext';

const FriendDetails = () => {
    const { id } =useParams();
    const {frnds , loading}=useFriend();
    const expectedFrnd = frnds.find((frnd) => String(frnd.id) === id );
    // console.log(id ,expectedFrnd );


// const [call, setCall] = useState([]);
// const [text, setText] = useState([]);
// const [video, setVideo] =useState([]);
const {timeline, setTimeline} = useContext(TimelineContext)



    if(loading) {
        <div className='flex justify-center items-center'>
                <RingLoader />
                </div>
    };

// const handleCallBtn = () => {
//     setCall([...call,expectedFrnd])
// };
// const handleTextBtn = () => {
//     setText([...text,expectedFrnd])
// };
// const handleVideoBtn = () =>{
//     setVideo([...video,expectedFrnd])
// };

const handleBtn = (type) => {
     const newExpectedFriend = { ...expectedFrnd, type: type };
    // console.log(newExpectedFriend);
    setTimeline([...timeline, newExpectedFriend]);
}

    return (
        <div className='container mx-auto'>

            <div className="max-w-6xl mx-auto p-6 bg-[#f8fafc] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
      
        <div className="md:col-span-4 space-y-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-[#2d4f48] ring-offset-2">
                <img src={ expectedFrnd?.picture} alt={expectedFrnd?.name} />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#1a2e2a]">{expectedFrnd?.name}</h2>
            <div className="flex gap-2 my-2">
              <span className="badge badge-error text-white text-[10px] px-3 uppercase">{expectedFrnd?.status}</span>
              <span className="badge badge-success badge-outline text-[10px] px-3 uppercase">{expectedFrnd?.tags?.[0]}</span>
            </div>
            <p className="text-sm italic text-gray-500 mt-2">"{expectedFrnd?.bio}"</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Preferred: {expectedFrnd?.email.split('@')[0]}</p>
          </div>

         
          <div className="space-y-2">
            <button className="btn btn-block bg-white border-gray-100 text-gray-600 hover:bg-gray-50 normal-case shadow-sm">
              <FaArchive className="mr-2" /> Snooze 2 Weeks
            </button>
            <button className="btn btn-block bg-white border-gray-100 text-gray-600 hover:bg-gray-50 normal-case shadow-sm">
              <FaArchive className="mr-2" /> Archive
            </button>
            <button className="btn btn-block bg-white border-gray-100 text-red-500 hover:bg-red-50 normal-case shadow-sm">
              <FaTrashAlt className="mr-2" /> Delete
            </button>
          </div>
        </div>

   
        <div className="md:col-span-8 space-y-6">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#2d4f48]">{expectedFrnd?.days_since_contact}</h3>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-3xl font-bold text-[#2d4f48]">{expectedFrnd?.goal}</h3>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-xl font-bold text-[#2d4f48]">{expectedFrnd?.next_due_date}</h3>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

        
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-gray-700">Relationship Goal</h4>
              <p className="text-sm text-gray-500 mt-1 font-medium">Connect every <span className="text-black font-bold">{expectedFrnd?.goal} days</span></p>
            </div>
            <button className="btn btn-sm btn-ghost bg-gray-50"><MdEdit /></button>
          </div>

         
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-gray-700 mb-4">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all" onClick={() => handleBtn("call")}>
                <FaPhoneAlt className="text-xl text-gray-600 mb-2" />
                <span className="text-sm font-medium">Call</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all" onClick={() => handleBtn("text")}>
                <FaRegEnvelope className="text-xl text-gray-600 mb-2" />
                <span className="text-sm font-medium">Text</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all" onClick={() => handleBtn("video")}>
                <FaVideo className="text-xl text-gray-600 mb-2" />
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>

       
          
        </div>
      </div>
    </div>
          







        </div>
    );
};

export default FriendDetails;