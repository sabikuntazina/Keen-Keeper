import React, { useContext, useState } from "react";
import TimeLineCard from "./TimeLineCard";
import { FriendDataContext } from "../../Context/FriendDataProviderContext";
import { IoMdArrowDropdown } from "react-icons/io";

const TimeLine = () => {
  const { timeLineState } = useContext(FriendDataContext);

  const [sorting, setSorting] = useState("");

const handleSorting = (sortType) => {
  console.log(sortType);
  setSorting(sortType);
};

  const filterTimeState =
    sorting === ""
      ? timeLineState
      : timeLineState.filter((dt) => dt.status === sorting);

  return (
    <div className="bg-[#f8fafc] py-12">
      <div className="max-w-7xl mx-auto space-y-4 px-5">

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 text-xl">
            Filter timeline- {sorting} <IoMdArrowDropdown />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm md:text-xl"
          >
            <li onClick={() => handleSorting("Call")}>
              <a>Call</a>
            </li>
            <li onClick={() => handleSorting("Text")}>
              <a>Text</a>
            </li>
            <li onClick={() => handleSorting("Video")}>
              <a>Video</a>
            </li>
            <li onClick={() => handleSorting("")}>
              <a>All</a>
            </li>
          </ul>
        </div>

        {filterTimeState.length === 0 ? (
          <div className="flex flex-col justify-center shadow-xl bg-white md:py-20 rounded-xl items-center gap-4">
            <h2 className="md:text-5xl text-gray-500 font-bold">
              No activities here
            </h2>
          </div>
        ) : (
          filterTimeState.map((data) => (
            <TimeLineCard key={data.id} data={data} />
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLine;