import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiArchive } from 'react-icons/fi';
import { MdNotificationsPaused } from 'react-icons/md';
import LeftSideProfileCard from './LeftSideProfileCard';

const LeftSide = ({expectedFriend}) => {
  return (
    <div className='space-y-5'>
      <LeftSideProfileCard expectedFriend={expectedFriend}></LeftSideProfileCard>
      <ul className='space-y-4'>
  <li className=' flex items-center gap-2 btn py-4 px-6 rounded-xl bg-white text-xl '><MdNotificationsPaused /> Snooze 2 weeks</li>
  <li className='flex items-center gap-2 btn py-4 px-12 rounded-xl bg-white text-xl '> <FiArchive /> Archive</li>
  <li className='flex items-center gap-2 btn py-4  rounded-xl bg-white text-xl text-red-700 px-12'><AiTwotoneDelete />Delete</li>
</ul>
      
    </div>
  );
};

export default LeftSide;