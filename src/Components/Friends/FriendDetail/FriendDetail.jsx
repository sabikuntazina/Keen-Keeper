import React from "react";

import { useLoaderData, useParams } from "react-router";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";

const FriendDetail = () => {
  const friendId = useParams();
  const friends = useLoaderData();

  const expectedFriend = friends.find((friend) => friend.id == friendId.id);
  return (
    <div className="bg-[#f8fafc] py-12">

      <div className="grid grid-cols-12 gap-10 max-w-7xl mx-auto ">
        <div className="col-span-4">
          <LeftSide expectedFriend={expectedFriend}></LeftSide>
        </div>
        <div className="col-span-8">
          <RightSide expectedFriend={expectedFriend} ></RightSide>
        </div>
      </div>
       </div>
    );
   
};

export default FriendDetail;
