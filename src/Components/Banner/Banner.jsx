import React from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-10">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-2xl md:text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-6 text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white text-center inline-block text-xl rounded-lg "> <p className="flex items-center gap-2"><FaPlus /> Add a Friend </p> </button>
        </div>
      </div>
    
      
    </div>
  );
};

export default Banner;
