import React from 'react';
import { Link } from "react-router-dom";
import VerifiedIcon from '@mui/icons-material/Verified';

import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai' ;

const About = () => {
  return <section className='section bg-black bg-no-repeat bg-cover min-h-screen'>
    <div className='py-20 '>
      {/* <h1 className='text-xl'>ShotsWithDelvin was built with love by Delvin Reyes</h1> */}
    </div>

    <div className='text-center p-10'>
      <h2 className='text-5xl py-3 text-white font-primary'> Delvin Reyes </h2>
      <h3 className='text-2xl py-2 font-primary'> Photographer & Software Engineer </h3>
      <h5 className='text-2xl py-2 font-primary text-white'> Vero @DelvinReyes 
      <VerifiedIcon fontSize="small" sx={{ fontSize: 15 }} className='mb-2 m-1 text-[#60a5fa]' /> </h5>
      
      <p className='text-md py-5 leading-7 font-primary'>
      ShowsWithDelvin was built with love. My goal is to capture memories that last a lifetime. With a keen eye for detail and a passion for capturing the essence of my subjects, I strive to provide clients with a truly unique and personal experience. My style is a blend of portraits, streets, boudoir, and products, creating timeless images that tell a story. I am dedicated to customer satisfaction and take pride in delivering high-quality images that truly reflect my clients' vision. If you're looking for a photographer who will go the extra mile to make your special moments unforgettable, I would love to be your choice.
      </p>
    </div>
    <div className='text-5xl flex justify-center gap-10 text-[#60a5fa]'>
      <Link to={"https://twitter.com/delvinreyez"}>
      <AiFillTwitterCircle />
      </Link>
      <Link to={"https://www.linkedin.com/in/delvinreyes/"}>
      <AiFillLinkedin />
      </Link>
      <Link to={"https://www.instagram.com/delvinreyesofficial/"}>
      <AiFillInstagram />
      </Link>
      
    </div>
  </section>;


  
};

export default About;