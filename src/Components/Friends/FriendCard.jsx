import React from 'react';

const FriendCard = ({friend}) => {
  return (
    <div className="card bg-base-100  shadow-sm hover:shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture}
      alt={friend.name}
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title md:text-xl">{friend.name}</h2>
    <p className='text-gray-500 md:text-xl'>{friend.days_since_contact}d ago</p>
    <p className='bg-green-300 text-black py-1 px-4 font-semibold rounded-2xl'>{friend.category}</p>
   <p
  className={`${
    friend.status === 'almost due'
      ? 'bg-[#EFAD44]'
      : friend.status === 'overdue'
      ? 'bg-[#EF4444]'
      : 'bg-[#244D3F]'
  } py-2 px-4 rounded-2xl text-white`}
>
  {friend.status}
</p>
  </div>
  
</div>
  );
};

export default FriendCard;