import React, { useContext } from "react";
import TimeLineCard from "./TimeLineCard";
import { FriendDataContext } from "../../Context/FriendDataProviderContext";

const TimeLine = () => {
 const { timeLineState }= useContext(FriendDataContext);
  console.log(timeLineState)
  return(
    <div className="bg-[#f8fafc] py-12">

     <div className="max-w-7xl mx-auto space-y-4">
      {

      timeLineState.map(data=><TimeLineCard  data={data} ></TimeLineCard>)
      }

  </div>
    </div>
  )
};

export default TimeLine;



