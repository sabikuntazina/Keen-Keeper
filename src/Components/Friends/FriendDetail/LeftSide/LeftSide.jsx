import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiArchive } from 'react-icons/fi';
import { MdNotificationsPaused } from 'react-icons/md';
import LeftSideProfileCard from './LeftSideProfileCard';

const LeftSide = ({expectedFriend}) => {
  return (
    <div className='space-y-5'>
      <LeftSideProfileCard expectedFriend={expectedFriend}></LeftSideProfileCard>
      <div className='space-y-4'>
  <button className=' flex items-center gap-2 btn py-4 px-6 rounded-xl bg-white text-xl '><MdNotificationsPaused /> Snooze 2 weeks</button>
  <button className='flex items-center gap-2 btn py-4 px-12 rounded-xl bg-white text-xl '> <FiArchive /> Archive</button>
  <button className='flex items-center gap-2 btn py-4  rounded-xl bg-white text-xl text-red-700 px-12'><AiTwotoneDelete />Delete</button>
</div>
      
    </div>
  );
};

export default LeftSide;