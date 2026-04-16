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
 <div>
  
 </div>
  );
};

export default States;