import React from "react";
// import Logo from '../images/header/icon.webp';
import { Link } from "react-router-dom";
import MobileNavBar from './MobileNavBar';

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/*NAME-LOGO*/}
        <Link to={'/'} className='max-w-[200px]'>
          {/* <img src={Logo} alt='' /> */}
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold">
        <Link
            to={'/'}
            className='text-[#9d174d] hover:text-primary transition'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-[#9d174d] hover:text-primary transition'
          >
            About
          </Link>
          <Link
            to={'/showcase'}
            className='text-[#9d174d] hover:text-primary transition'
          >
            Showcase
          </Link>
          <Link
            to={'/contact'}
            className='text-[#9d174d] hover:text-primary transition'
          >
            Contact
          </Link>
        </nav>
      
      </div>
      <MobileNavBar/>
    </header>
  );
};

export default Header;
