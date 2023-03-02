import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MobileNavBar from './MobileNavBar';
import Logout from '../components/Logout'
import { UserContext } from "../context/userContext";

//bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent hover:text-primary transition

const Header = () => {

  const { showOverlay } = useContext(UserContext)

  return (
    <div>

    {!showOverlay && <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between" >
        <Link to={'/'} className='max-w-[200px]'></Link>

        <nav className="backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-full hidden lg:flex gap-x-12 font-semibold font-primary" >
        <Link
            to={'/'}
            className='rounded text-[#991b1b] hover:text-primary transition bg-opacity-30'
          >
            Home
          </Link> 
          
          <Link
            to={'/showcase'}
            className='rounded text-[#b91c1c] hover:text-primary transition bg-opacity-30'
          >
            Showcase
          </Link>

          
          <Link
            to={'/about'}
            className='rounded text-[#b91c1c] hover:text-primary transition bg-opacity-30'
          >
            About
          </Link>
         
          <Link
            to={'/contact'}
            className='rounded text-[#b91c1c] hover:text-primary transitionn bg-opacity-30'
          >
            Contact
          </Link>
          <div className="rounded text-[#b91c1c] hover:text-primary transition bg-opacity-30">
            <Logout />
          </div>
        </nav>
      </div>
      <MobileNavBar/>
    </header>}
    </div>
  );
};

export default Header;
