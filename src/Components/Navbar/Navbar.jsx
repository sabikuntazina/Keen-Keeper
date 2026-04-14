import React from 'react';
import { GoGraph } from 'react-icons/go';
import { IoMdHome } from 'react-icons/io';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const routers= [
    {
        name:'Home',
        path: '/',
        icon: <IoMdHome />

    },
    {

        name:'Timeline',
        path:'/timeline',
        icon: <RiTimeLine />
    },
    {

        name:'Stats',
        path:'/states',
        icon: <GoGraph />
    }
]


const Navbar = () => {
    return (
      <nav className=" bg-base-100 py-3 shadow-sm sticky top-0 z-10">
 <div className='navbar max-w-7xl mx-auto'>
     <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        { 
        routers.map((router,index)=>  <NavLink key={index} to={router.path} className={'pb-2.5 flex justify-between items-center gap-2'}> {router.icon} {router.name}</NavLink>)
        }
      </ul>
    </div>
    <Link to={'/'}><img src="/logo.png" className='w-52' alt="" /></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="flex justify-between items-center gap-6 text-xl font-semibold">
        { 
              routers.map((router,index)=>  <NavLink key={index} to={router.path} className={'pb-2.5 text-2xl flex justify-between text-gray-700 items-center gap-2'}> {router.icon} {router.name}</NavLink>)
        }
    </ul>
  </div>
 </div>
</nav>
    );
};

export default Navbar;