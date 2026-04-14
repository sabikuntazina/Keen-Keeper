import React, { createContext, useState } from 'react';

export const FriendDataContext= createContext('');

const FriendDataProviderContext = ({children}) => {

   const [timeLineState,setTimeLineState] =useState([]);

   const handleTimeLine=(expectedFriend, status)=>{
      const updatedFriend = {
    ...expectedFriend,
    status: status,
     time: new Date()
  };
    setTimeLineState([...timeLineState,updatedFriend]);


   }
   const data= {
    timeLineState,
    handleTimeLine,
   }
  return (
    <div>
      <FriendDataContext.Provider value={data}>
          {children}
      </FriendDataContext.Provider>
      
    </div>
  );
};

export default FriendDataProviderContext;