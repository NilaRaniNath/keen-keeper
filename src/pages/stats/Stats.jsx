import React, { useContext } from 'react';
import { TimelineContext } from '../../components/context/TimelineContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

const Stats = () => {

    const { timeline } = useContext(TimelineContext); 

      const totalText = timeline.filter((it) => it.type === "text").length;
  const totalCall = timeline.filter((i) => i.type === "call").length;
  const totalVideo = timeline.filter((i) => i.type === "video").length;

  const isEmpty = totalText === 0 && totalCall === 0 && totalVideo === 0;

  const data = isEmpty
    ? [
        { name: "Text", value: 0, realValue: 0 },
        { name: "Call", value: 0, realValue: 0 },
        { name: "Video", value: 0, realValue: 0 },
      ]
    : [
        { name: "Text", value: totalText, realValue: totalText },
        { name: "Call", value: totalCall, realValue: totalCall },
        { name: "Video", value: totalVideo, realValue: totalVideo },
      ];





    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-6' >
          <div className='w-full max-w-5xl rounded-xl shadow-sm p-8'>
              <div className='mt-5'>
                <h2 className='font-bold text-3xl'>Friendship Analytics</h2>
            </div>

            <div className='shadow-sm rounded-lg p-10'>
                <h3>By Interaction Type</h3>
            
             <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh',margin:'auto', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        
        cornerRadius="50%"
        fill="#8884d8"
        
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
    
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
        </div>
          </div>
        </div>
    );
};

export default Stats;