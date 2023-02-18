import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MobileNavBar from './MobileNavBar';
import Logout from '../components/Logout'
import { UserContext } from "../context/userContext";

const Header = () => {

  const { showOverlay } = useContext(UserContext)

  return (
    <div>

    {!showOverlay && <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={'/'} className='max-w-[200px]'>
          
        </Link>

        <nav className="hidden lg:flex gap-x-12 font-semibold font-primary">
        <Link
            to={'/'}
            className='bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent hover:text-primary transition'
          >
            Home
          </Link> 
          
          <Link
            to={'/showcase'}
            className='bg-gradient-to-r from-gray-600 to-red-600 bg-clip-text text-transparent hover:text-primary transition'
          >
            Showcase
          </Link>

          
          <Link
            to={'/about'}
            className='bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent hover:text-primary transition'
          >
            About
          </Link>
         
          <Link
            to={'/contact'}
            className='bg-gradient-to-r from-gray-400 to-red-400 bg-clip-text text-transparent hover:text-primary transition'
          >
            Contact
          </Link>
          <div className="bg-gradient-to-r from-gray-400 to-red-400 bg-clip-text text-transparent hover:text-primary transition">
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
