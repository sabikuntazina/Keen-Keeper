import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendDataContext } from '../../Context/FriendDataProviderContext';


const States = () => {
   const { timeLineState } = useContext(FriendDataContext);
   let call=0;
   let text=0;
   let video=0;
   timeLineState.map(dat=> dat.status==='Call'? call++ : dat.status=='Text'? text++ : video++  )
  const data = [
  { name: 'Call', value: call,fill: '#FF8042' },
  { name: 'Text', value: text, fill: '#00C49F' },
  { name: 'Video', value: video, fill: '#FFBB28' },
];

  return (
   <div  className="bg-[#f8fafc] py-12">

      <div className='max-w-7xl px-5 mx-auto space-y-4'>

      <h1 className='font-bold text-2xl md:text-5xl'>Friendship Analytics</h1>


         {timeLineState.length === 0 ? (
          <div className="flex flex-col justify-center shadow-xl bg-white md:py-20 rounded-xl  items-center gap-4 place-items-center">
            <h2 className="md:text-5xl text-gray-500 font-bold">
              No Analytics here
            </h2>
          </div>
        ) : (
            <div className='bg-white rounded-xl shadow-xl'>

          <PieChart  style={{ width: '100%', maxWidth: '500px', margin:'0 auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
     
    </PieChart>
      </div>
          )
        }
      </div>

    </div>
  );
};

export default States;