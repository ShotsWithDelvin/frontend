import React, { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const tab = {
    hidden: {
      x: '100%',
    },
    appear: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

const MobileNavBar = () => {
    const [openTab, setOpenTab] = useState(false)
  return (
    <nav className='text-primary xl:hidden'>
      <div onClick={() => setOpenTab(true)}
      className="text-3xl cursor-pointer">
        <div className='icon1'>
          <CgMenuBoxed />
        </div>
        
      </div>


      <motion.div variants={tab}
      initial='hidden'
      animate={openTab ? 'appear' : ''}
      className="bg-black shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
        <div onClick={() => setOpenTab(false)}
        className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer">
          <div className='iconclose'>
            <AiOutlineCloseSquare/>
          </div>
            
        </div>


        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary text-3xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/showcase">ShowCase</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNavBar;
