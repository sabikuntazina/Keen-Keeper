import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-[#244D3F] p-10'>


<div className=' max-w-7xl mx-auto space-y-3'>
      <footer className="footer footer-horizontal footer-center text-primary-content  ">
  <aside  className='space-y-3'>
    <p className="font-bold text-xl md:text-3xl lg:text-5xl">
      KeenKeeper
    </p>
    <p className='text-white'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
   
  </aside>

  <nav className='space-y-3'>
  <h1 className='text-xl lg:text-2xl font-semibold text-white'>Social Links</h1>
    <div className="grid grid-flow-col gap-4">
      <a className='p-2 rounded-full bg-white md:text-xl text-black'>
       <FaInstagram />
      </a>
      <a className='p-2 rounded-full bg-white md:text-xl text-black'>
       <FaSquareFacebook />
      </a>
      <a className='p-2 rounded-full bg-white md:text-xl text-black'>
       <FaXTwitter />
      </a>
    </div>
  </nav>
</footer>
  <div className='flex flex-col lg:flex-row justify-between items-center gap-3 text-gray-300'>
     <p >Copyright © {new Date().getFullYear()} - All right reserved</p>
     <div  className='flex justify-between items-center gap-3 space-y-3'>
      <p>Privacy Policy</p>
      <p>Terms of Service </p>
      <p>Cookies</p>

     </div>
  </div>
</div>
    </div>
  );
};

export default Footer;