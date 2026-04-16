import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineTextsms, MdOutlineVideocam } from 'react-icons/md';
import { FriendDataContext } from '../../../../Context/FriendDataProviderContext';

const RightSide = ({expectedFriend}) => {
  const {handleTimeLine}= useContext(FriendDataContext);
  return (
    <div className='space-y-6'>
       <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
 
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-3xl font-bold text-gray-700">{expectedFriend.days_since_contact}</p>
          <p className="text-xl md:text-xl text-gray-700">Days Since Contact</p>
         </div>
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-3xl font-bold text-gray-700">{expectedFriend.goal} </p>
          <p className="text-xl md:text-xl text-gray-700">Goal (Days)</p>
         </div>
  <div className="card bg-base-100  shadow-sm hover:shadow-xl space-y-3 text-center px-4 py-8 rounded-xl">
          <p className="text-xl md:text-3xl font-bold text-gray-700">{expectedFriend.next_due_date}</p>
          <p className="text-xl md:text-xl text-gray-700">Next Due</p>
         </div>

         
</div>

<div className='bg-white rounded-xl space-y-4 py-10 px-14'>
  <div className='flex flex-col md:flex-row justify-between items-center'>
    <h2 className='text-2xl md:text-5xl text-[#244D3F]'>Relationship Goal</h2>
    <h4 className='btn text-xl'>Edit</h4>
  </div>
  <h3 className='text-2xl'>Connect every {expectedFriend.goal} days</h3>
</div>
      
<div className='bg-white rounded-xl space-y-4 py-10 px-14'>

    <h2 className='text-xl md:text-3xl text-[#244D3F]'>Quick Check-In</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <button onClick={()=>handleTimeLine(expectedFriend, 'Call' )} className='btn py-10 px-12 rounded-xl text-xl md:text-2xl '><FiPhoneCall /> Call</button>
      <button onClick={()=>handleTimeLine(expectedFriend, 'Text' )} className='btn py-10 px-12 rounded-xl text-xl md:text-2xl '><MdOutlineTextsms /> Text</button>
      <button onClick={()=>handleTimeLine(expectedFriend, 'Video' )} className='btn py-10 px-12 rounded-xl text-xl md:text-2xl '><MdOutlineVideocam /> Video</button>

    </div>

</div>
      
    </div>
  );
};

export default RightSide;