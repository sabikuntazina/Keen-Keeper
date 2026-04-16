import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayouts = () => {
  return (
    <div>

       <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
      
    </div>
  );
};

export default MainLayouts;