import React from "react";

import { FaHome, FaArrowLeft } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-slate-950 via-green-950 to-slate-900 flex items-center justify-center px-6">
      
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-3xl w-full">
        <div className="backdrop-blur-md bg-white/10 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-14 text-center">
          
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-white/10 border border-white/10 shadow-lg animate-bounce">
              <BiSearchAlt className="w-12 h-12 text-green-300" />
            </div>
          </div>

       
          <h1 className="text-7xl md:text-9xl font-extrabold text-white tracking-wider drop-shadow-lg animate-pulse">
            404
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-green-300">
            Oops! Page not found
          </h2>

          <p className="mt-4 text-sm md:text-lg text-slate-200 max-w-xl mx-auto leading-relaxed">
            The page you are looking for might have been removed, renamed,
            or is temporarily unavailable. Let's get you back safely.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 shadow-lg shadow-green-500/30 transition duration-300 hover:scale-105"
            >
              <FaHome className="w-5 h-5 group-hover:rotate-12 transition duration-300" />
              Back to Home
            </Link>

            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 transition duration-300 hover:scale-105"
            >
              <FaArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition duration-300" />
              Go Back
            </button>
          </div>
          
          <div className="mt-10">
            <p className="text-slate-300 text-sm md:text-base animate-pulse">
              Lost in space? Let's guide you home ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;