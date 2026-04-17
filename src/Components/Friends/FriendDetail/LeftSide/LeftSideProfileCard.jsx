import React from 'react';


const LeftSideProfileCard = ({expectedFriend}) => {
  return (
            <div className="card bg-base-100  shadow-sm hover:shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={expectedFriend.picture}
      alt={expectedFriend.name}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title md:text-xl">{expectedFriend.name}</h2>
    <p className='text-gray-500 md:text-xl'>{expectedFriend.days_since_contact}d ago</p>
    <p className='bg-green-300 text-black py-1 px-4 font-semibold rounded-2xl'>{expectedFriend.category}</p>
   <p
  className={`${
    expectedFriend.status === 'almost due'
      ? 'bg-[#EFAD44]'
      : expectedFriend.status === 'overdue'
      ? 'bg-[#EF4444]'
      : 'bg-[#244D3F]'
  } py-2 px-4 rounded-2xl text-white`}
>
  {expectedFriend.status}
</p>
<i className='text-gray-600 '>"{expectedFriend.bio}"</i>
<p className='text-gray-500'>{expectedFriend.email}</p>
  </div>
  
</div>
  );
};

export default LeftSideProfileCard;