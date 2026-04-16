import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendDataContext = createContext("");

const FriendDataProviderContext = ({ children }) => {
  const [timeLineState, setTimeLineState] = useState([]);

  const handleTimeLine = (expectedFriend, status) => {
    const updatedFriend = {
      ...expectedFriend,
      id: Date.now(),
      status: status,
      time: new Date(),
    };
    if (status === "Call") {
      toast.success(`Call with ${expectedFriend.name}`, {
        position: "top-center",
      });
    } else if (status === "Text") {
      toast.success(`Text with ${expectedFriend.name}`, {
        position: "top-center",
      });
    } else {
      toast.success(`Video with ${expectedFriend.name}`, {
        position: "top-center",
      });
    }
    setTimeLineState([...timeLineState, updatedFriend]);
  };
  const data = {
    timeLineState,
    handleTimeLine,
  };
  return (
    <div>
      <FriendDataContext.Provider value={data}>
        {children}
      </FriendDataContext.Provider>
    </div>
  );
};

export default FriendDataProviderContext;
