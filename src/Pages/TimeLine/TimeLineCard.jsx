import React from 'react';
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
const TimeLineCard = ({data}) => {
    const formattedDate = new Date(data.time).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return (
    <div className='flex items-center gap-4 bg-white shadow-sm hover:shadow-xl p-5 rounded-xl'>
      <div>
        {
          data.status==='Call'? <img src={call} className='rounded-full' alt="" /> : data.status==='Video'? <img className='rounded-full' src={video} alt="" /> : <img className='rounded-full' src={text} alt="" />
        }
      </div>
      
      <div className='space-y-3'>

      <h2 className='text-lg text-gray-500'><span className='text-xl text-black font-semibold'>{data.status}</span>  with {data.name}</h2>
      <h3 className='text-lg text-gray-500'>{formattedDate}</h3>
      </div>
      
    </div>
  );
};

export default TimeLineCard;